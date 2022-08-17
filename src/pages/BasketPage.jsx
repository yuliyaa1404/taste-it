import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import ModalConfirmation from "../components/ModalConfirmation";
import BasketError from "../components/BasketError";
import BasketConfirmation from "../components/BasketConfirmation";

function BasketPage({ dispatch, basket, peopleCount, dishCount, price }) {
  const [deleteItem, setDeleteItem] = useState(null);
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <ModalConfirmation
        deleteItem={deleteItem}
        name={basket.find((a) => a.id == deleteItem)?.name}
      />
      <BasketError />
      <BasketConfirmation />
      <section className="basket">
        <div className="container">
          <h1 className="basket__title title">Sizin səbətiniz</h1>
          <div className="basket__option">
            <div className="basket__info">
              <div className="basket__people">Adam sayı: {peopleCount}</div>
              <div className="basket__dish">
                Yemək sayı: {dishCount}
                <p
                  className={
                    basket.length != dishCount
                      ? "basket__error"
                      : "basket__error-hide"
                  }
                >
                  Yemək sayi {dishCount} dənə olmalıdır. Sifarişi tamamlamaq
                  üçün Markete keçid edin
                </p>
              </div>
              <Link to="/market">
                <p className="basket__btn-change">Dəyişmək</p>
              </Link>
            </div>
          </div>
          <div className="basket__wrapper">
            <div className="basket__description">
              <p className="basket__label">Təsvir</p>
              <ul className="basket__row">
                {basket.map((a) => (
                  <li key={a.id} className="basket__card">
                    <div className="basket__img">
                      <img src={a.image} alt="" />
                    </div>
                    <div className="basket__content">
                      <div className="basket__name">{a.name}</div>
                      <div className="basket__ingredient">
                        <i className="fa-solid fa-bowl-hot"></i>
                        {a.ingredients.length} dənə ingredient
                      </div>
                      <div className="basket__qram">
                        <i className="fa-solid fa-plate-utensils"></i>
                        {a.gramm} qram/porsiya
                      </div>
                      <div className="basket__dif">
                        <div className="basket__time">
                          <i className="fa-solid fa-timer"></i>
                          {a.time} dəqiqə
                        </div>
                        <div className="basket__difficulty">
                          <i className="fa-solid fa-hat-chef"></i>
                          {a.difficulty}
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        dispatch({
                          type: "MODAL_CONFIRMATION_SHOW",
                          payload: true,
                        });
                        setDeleteItem(a.id);
                      }}
                      className="basket__btn-delete"
                    >
                      &times;
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="basket__check">
              <p className="basket__label">Qiymət</p>
              <div className="basket__row">
                <div className="basket__item">
                  <div className="basket__price">
                    Qiymət: <span>{price} AZN</span>
                  </div>
                  <div className="basket__delivery">
                    Çatdırılma: <span>0 AZN</span>
                  </div>
                  {basket.length == dishCount ? (
                    <div
                      onClick={() =>
                        dispatch({
                          type: "BASKET_CONFIRMATION",
                          payload: true,
                        })
                      }
                      className="basket__checkout"
                    >
                      Təsdiqlə
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        dispatch({
                          type: "BASKET_ERROR",
                          payload: true,
                        })
                      }
                      className="basket__checkout"
                    >
                      Təsdiqlə
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

let t = (a) => a;
export default connect(t)(BasketPage);
