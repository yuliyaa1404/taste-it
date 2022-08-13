import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function BasketConfirmation({ dispatch, basketConfirmation }) {
  useEffect(() => {
    if (basketConfirmation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [basketConfirmation]);
  return (
    <div
      className={
        basketConfirmation
          ? "basket-confirmation modal opened"
          : "basket-confirmation modal "
      }
      onClick={() =>
        dispatch({
          type: "BASKET_CONFIRMATION",
          payload: false,
        })
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="basket-confirmation__wrapper"
      >
        <div
          onClick={() =>
            dispatch({
              type: "BASKET_CONFIRMATION",
              payload: false,
            })
          }
          className="basket-confirmation__close"
        >
          &times;
        </div>
        <div className="basket-confirmation__info">
          <div className="basket-confirmation__check">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <p className="basket-confirmation__text">
            Sifarişiniz uğurla gəbul olundu!
          </p>
          <Link to="/market">
            <div
              onClick={() =>
                dispatch({
                  type: "BASKET_CONFIRMATION",
                  payload: false,
                })
              }
              className="basket-confirmation__btn"
            >
              Marketə qayitmaq
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(BasketConfirmation);
