import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import BasketError from "../components/BasketError";

function Market({ dispatch, basket, peopleCount, dishCount, price }) {
  const [marketCategory, setMarketCategory] = useState([]);
  const [market, setMarket] = useState([]);
  const [tabCategory, setTabCategory] = useState(0);
  const [active, setActive] = useState(0);
  const [idItem, setIdItem] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const [showPanelCateory, SetShowPanelCateory] = useState(1);
  const [selectPrice, setSelectPrice] = useState({
    people: 2,
    dish: 3,
  });
  const [value, setValue] = useState(null);
  const [people, setPeople] = useState(2);
  const [dish, setDish] = useState(3);
  useEffect(() => {
    let getMarketiCategory = async () => {
      let dataCategory = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setMarketCategory(dataCategory.market_categories);
    };
    getMarketiCategory();
  }, []);
  //   console.log(process.env);
  useState(() => {
    let getMarket = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setMarket(data.market);
    };
    getMarket();
  }, []);
  const [demoPrice, setDemoPrice] = useState(50);
  const [demoPrices, setDemoPrices] = useState({
    50: {
      people: 2,
      dish: 3,
    },
    100: {
      people: 2,
      dish: 5,
    },
    150: {
      people: 4,
      dish: 3,
    },
    250: {
      people: 4,
      dish: 5,
    },
  });
  const openModal = () => {
    dispatch({
      type: "HEADER_SHOW",
      payload: false,
    });
    setOpenPanel(true);
  };
  const getPrice = (e) => {
    setSelectPrice({
      ...selectPrice,
      [e.target.name]: +e.target.id,
    });
  };
  const getValue = (e) => {
    setValue(e.target.id);
  };
  useEffect(() => {
    let entries = Object.entries(demoPrices);
    for (let i = 0; i < entries.length; i++) {
      for (let j = 0; j <= 1; j++) {
        if (
          entries[i][j].people === selectPrice.people &&
          entries[i][j].dish === selectPrice.dish
        ) {
          dispatch({
            type: "PRICE",
            payload: entries[i][j - 1],
          });
        }
      }
    }
  }, [selectPrice]);
  window.localStorage.setItem("market", JSON.stringify(basket));
  Number(window.localStorage.setItem("peopleCount", peopleCount));
  Number(window.localStorage.setItem("dishCount", dishCount));
  Number(window.localStorage.setItem("price", price));
  useEffect(() => {
    if (openPanel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openPanel]);
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <BasketError />
      <section className="menu">
        <div className="container">
          <div className="menu__wrapper">
            <h1 className="menu__title title">Həftə üçün menyu</h1>
            <h3 className="menu__subtitle subtitle">
              Bazar günündən Çərşənbə axşamı gününə qədər istənilən gün
              çatdırırıq!
            </h3>
            <div className="menu__selection">
              <div className="menu__top">
                <ul className="menu__option">
                  <li className="menu__option-opened">
                    Adam sayı: {people}
                    <ul className="menu__option-dropdown">
                      <button
                        name="people"
                        id="2"
                        onClick={(e) => {
                          getPrice(e);
                          getValue(e);
                          setPeople(2);
                          dispatch({
                            type: "PEOPLE_COUNT",
                            payload: 2,
                          });
                        }}
                      >
                        2 adam
                      </button>
                      <button
                        name="people"
                        id="4"
                        onClick={(e) => {
                          getValue(e);
                          getPrice(e);
                          setPeople(4);
                          dispatch({
                            type: "PEOPLE_COUNT",
                            payload: 4,
                          });
                        }}
                      >
                        4 adam
                      </button>
                    </ul>
                  </li>
                  <li className="menu__option-opened">
                    Yemək sayı: {dish}
                    <ul className="menu__option-dropdown">
                      <button
                        onClick={(e) => {
                          getPrice(e);
                          getValue(e);
                          setDish(3);
                          dispatch({
                            type: "DISH_COUNT",
                            payload: 3,
                          });
                        }}
                        name="dish"
                        id="3"
                      >
                        3 yemək
                      </button>
                      <button
                        onClick={(e) => {
                          getPrice(e);
                          getValue(e);
                          setDish(5);
                          dispatch({
                            type: "DISH_COUNT",
                            payload: 5,
                          });
                        }}
                        name="dish"
                        id="5"
                      >
                        5 yemək
                      </button>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="menu__bottom">
                <div className="menu__price">
                  Qiymət
                  <div className="menu__round">
                    <p>{price} AZN</p>
                  </div>
                </div>
                <div className="menu__selected">
                  {" "}
                  {basket.length} / {selectPrice.dish} seçilib
                </div>
              </div>
              {basket.length == selectPrice.dish ? (
                <Link to="/basket">
                  <p className="menu__order btn-bg">Sifarişi tamamla</p>
                </Link>
              ) : (
                <p
                  onClick={() => {
                    dispatch({
                      type: "BASKET_ERROR",
                      payload: true,
                    });
                  }}
                  className="menu__order btn-bg"
                >
                  Sifarişi tamamla
                </p>
              )}
            </div>
            <ul className="menu__filter">
              <li
                onClick={(e) => {
                  setActive(e.target.id);
                  setTabCategory(0);
                }}
                id="0"
                className={
                  active == 0
                    ? "active-list menu__filter-all"
                    : "menu__filter-all"
                }
              >
                Bütün yeməklər
              </li>
              {marketCategory.map((a) => (
                <li
                  id={a.id}
                  className={a.id == active ? "active-list" : ""}
                  onClick={(e) => {
                    setActive(e.target.id);
                    setTabCategory(a.id);
                  }}
                  key={a.id}
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="market">
        <div className="container">
          <div className="market__row row">
            {tabCategory != 0
              ? market
                  .filter((t) => t.category == tabCategory)
                  .map((a) => {
                    return (
                      <div
                        onClick={() => setIdItem(a.id)}
                        key={a.id}
                        className="market__item"
                      >
                        <div className="market__image">
                          <img src={a.image} alt="" />
                        </div>
                        <div className="market__body">
                          <h5
                            onClick={() => openModal(true)}
                            className="market__name"
                          >
                            {a.name}
                          </h5>
                          <div className="market__info">
                            <div className="market__time">
                              <i className="fa-solid fa-timer"></i>
                              {a.time} dəqiqə
                            </div>
                            <div className="market__difficulty">
                              <i className="fa-solid fa-hat-chef"></i>
                              {a.difficulty}
                            </div>
                          </div>
                          <div className="market__qramm">
                            <i className="fa-solid fa-plate-utensils"></i>
                            {a.gramm} qram/porsiya
                          </div>
                          <div className="market__buy">
                            {!basket.find((t) => t.id == a.id) ? (
                              <button
                                disabled={
                                  basket.length >= selectPrice.dish
                                    ? true
                                    : false
                                }
                                onClick={() => {
                                  dispatch({
                                    type: "ADD_TO_BASKET",
                                    payload: a,
                                  });
                                }}
                                oclick={() => {
                                  dispatch({
                                    type: "ADD_QUANTITY",
                                    payload: a.id,
                                  });
                                }}
                                className="market__add"
                              >
                                <i className="fa-solid fa-check"></i>
                              </button>
                            ) : (
                              <button
                                style={{
                                  background: "#005955",
                                }}
                                onClick={() => {
                                  dispatch({
                                    type: "REMOVE_FROM_BASKET",
                                    payload: a.id,
                                  });
                                  dispatch({
                                    type: "SUB_QUANTITY",
                                    payload: a.id,
                                  });
                                }}
                                className="market__add"
                              >
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
              : market.map((a) => {
                  return (
                    <div
                      onClick={() => setIdItem(a.id)}
                      key={a.id}
                      className="market__item"
                    >
                      <div className="market__image">
                        <img src={a.image} alt="" />
                      </div>
                      <div className="market__body">
                        <h5
                          onClick={() => openModal(true)}
                          className="market__name"
                        >
                          {a.name}
                        </h5>
                        <div className="market__info">
                          <div className="market__time">
                            <i className="fa-solid fa-timer"></i>
                            {a.time} dəqiqə
                          </div>
                          <div className="market__difficulty">
                            <i className="fa-solid fa-hat-chef"></i>
                            {a.difficulty}
                          </div>
                        </div>
                        <div className="market__qramm">
                          <i className="fa-solid fa-plate-utensils"></i>
                          {a.gramm} qramm / porsiya
                        </div>
                        <div className="market__buy">
                          {!basket.find((t) => t.id == a.id) ? (
                            <button
                              disabled={
                                basket.length >= selectPrice.dish ? true : false
                              }
                              onClick={() => {
                                dispatch({
                                  type: "ADD_TO_BASKET",
                                  payload: a,
                                });
                              }}
                              oclick={() => {
                                dispatch({
                                  type: "ADD_QUANTITY",
                                  payload: a.id,
                                });
                              }}
                              className="market__add"
                            >
                              {" "}
                              <i className="fa-solid fa-check"></i>
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "REMOVE_FROM_BASKET",
                                  payload: a.id,
                                });
                                dispatch({
                                  type: "SUB_QUANTITY",
                                  payload: a.id,
                                });
                              }}
                              className="market__remove"
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
      <section
        onClick={() => {
          dispatch({
            type: "HEADER_SHOW",
            payload: true,
          });
          setOpenPanel(false);
        }}
        className={openPanel ? "panel modal opened" : "panel modal"}
      >
        {market
          .filter((t) => t.id == idItem)
          .map((a) => {
            return (
              <>
                <div
                  onClick={(e) => e.stopPropagation()}
                  key={a.id}
                  className={"panel__wrapper "}
                >
                  <div className="panel__head">
                    <h1 className="panel__title title">{a.name}</h1>
                    <div
                      onClick={() => setOpenPanel(false)}
                      className="panel__close"
                    >
                      &times;
                    </div>
                  </div>
                  <div className="panel__body">
                    <div className="panel__energy">
                      <div className="panel__label">Enerji dəyəri</div>
                      <div className="panel__calorie">
                        Kaloriyə - {a.calorie} kkal
                      </div>
                      <div className="panel__protein">
                        Zülallar - {a.proteins} qramm
                      </div>
                      <div className="panel__fats">Yağlar - {a.fats} qramm</div>
                      <div className="panel__carbohydrates">
                        Karbohidratlar- {a.carbohydrates} qramm
                      </div>
                      <div className="panel__difficulty">
                        Çətinlik
                        <p>{a.difficulty}</p>
                      </div>
                    </div>
                    <div className="panel__image">
                      <img src={a.image} alt="" />
                    </div>
                  </div>
                  <div key={a.id} className="panel__bottom">
                    <div key={a.id} className="panel__category">
                      <h5
                        className={
                          showPanelCateory == 2
                            ? "panel__category-recipe panel__category-active"
                            : "panel__category-recipe"
                        }
                        onClick={(e) => SetShowPanelCateory(e.target.id)}
                        id="2"
                      >
                        Hazırlanma prossesi
                      </h5>
                      <h5
                        className={
                          showPanelCateory == 1
                            ? "panel__category-ingredient panel__category-active"
                            : "panel__category-ingredient"
                        }
                        onClick={(e) => SetShowPanelCateory(e.target.id)}
                        id="1"
                      >
                        İngredientlər
                      </h5>
                    </div>
                    <div className="panel__list">
                      <ul
                        className={
                          showPanelCateory == 2 ? "panel__recipe" : "hide"
                        }
                      >
                        {a.recipe.map((t, b) => (
                          <li key={b}>{t}</li>
                        ))}
                      </ul>
                      <ul
                        className={
                          showPanelCateory == 1 ? "panel__ingredient" : "hide"
                        }
                      >
                        {a.ingredients.map((t, b) => (
                          <li key={b}>
                            <p className="panel__icon">
                              <i className="fa-solid fa-check"></i>
                            </p>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </section>
    </>
  );
}

const t = (a) => a;
export default connect(t)(Market);
