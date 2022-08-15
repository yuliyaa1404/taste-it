import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function QuickViewMarket({
  dispatch,
  quickViewMarket,
  quickViewShowMarket,
  favorite,
}) {
  const [marketCategory, setMarketCategory] = useState([]);
  const [market, setMarket] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    let getMarketiCategory = async () => {
      let dataCategory = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setMarketCategory(dataCategory.market-categories);
    };
    getMarketiCategory();
  }, []);
  useState(() => {
    let getMarket = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setMarket(data.market);
    };
    getMarket();
  }, []);
  return (
    <section
      onClick={() =>
        dispatch({
          type: "QUICK_VIEW_SHOW_MARKET",
          payload: false,
        })
      }
      className={quickViewShowMarket ? "quick2 panel opened" : "quick2 panel"}
    >
      <div onClick={(e) => e.stopPropagation()} className="quick__wrapper2">
        <div className="container">
          {market
            .filter((t) => t.id == quickViewMarket)
            .map((a, c) => {
              return (
                <>
                  <div key={a.id + 100} className="quick__item2">
                    <div className="quick__img">
                      <img src={a.image} alt="" />
                    </div>
                    <div className="quick__content">
                      <h2 className="quick__title title">{a.name}</h2>
                      <div className="quick__top">
                        <div className="quick__rating">{a.rating}/5</div>
                        <div className="quick__reviews">
                          şərhlər (<span>{reviews.length}</span>)
                        </div>
                      </div>
                      <div className="quick__body">
                        <ul className="quick__ingredients">
                          <p className="quick__label">
                            {a.ingredients.length} dənə ingredient
                          </p>
                          <li>{a.ingredients[0]}</li>
                          <li>{a.ingredients[1]}</li>
                          <li>{a.ingredients[2]}</li>
                          <li>{a.ingredients[3]}</li>
                          <li>{a.ingredients[4]}</li>
                          <li>{a.ingredients[5]}</li>
                          <li>{a.ingredients[6]}</li>
                        </ul>
                      </div>
                      <div className="quick__bottom">
                        <Link to={`/details/${a.id}`}>
                          <p
                            onClick={() =>
                              dispatch({
                                type: "QUICK_VIEW_SHOW_MARKET",
                                payload: false,
                              })
                            }
                            className="quick__recipe btn-bg"
                          >
                            Daha ətraflı
                          </p>
                        </Link>
                        {!favorite.find((t) => t.id == a.id) ? (
                          <div
                            onClick={() =>
                              dispatch({
                                type: "ADD_TO_FAVORITES",
                                payload: a,
                              })
                            }
                            className="quick__like"
                          >
                            <i className="fa-solid fa-heart"></i>
                            Resepti yadda saxla
                          </div>
                        ) : (
                          <div
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_FAVORITES",
                                payload: a.id,
                              })
                            }
                            className="quick__like"
                          >
                            <i className="fa-solid fa-heart"></i>
                            Resepti sil
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div
          onClick={() =>
            dispatch({
              type: "QUICK_VIEW_SHOW_MARKET",
              payload: false,
            })
          }
          className="quick__close"
        >
          &times;
        </div>
      </div>
    </section>
  );
}

let t = (a) => a;
export default connect(t)(QuickViewMarket);
