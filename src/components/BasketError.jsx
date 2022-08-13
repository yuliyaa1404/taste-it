import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function BasketError({ dispatch, basketError, basket, dishCount }) {
	  useEffect(() => {
      if (basketError) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [basketError]);
  return (
    <div
      onClick={() =>
        dispatch({
          type: "BASKET_ERROR",
          payload: false,
        })
      }
      className={basketError ? "error modal opened" : "error modal"}
    >
      <div onClick={(e) => e.stopPropagation()} className="error__wrapper">
        <div
          onClick={() =>
            dispatch({
              type: "BASKET_ERROR",
              payload: false,
            })
          }
          className="error__close"
        >
          &times;
        </div>
        <div className="error__info">
          <div className="error__attention">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </div>
          <div className="error__text">
            {basket.length}/{dishCount} məhsul seçilməlidir
          </div>
          <Link to="/market">
            <div
              onClick={() => {
                dispatch({
                  type: "BASKET_ERROR",
                  payload: false,
                });
              }}
              className="error__btn"
            >
              Marketə qayıtmaq
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(BasketError);
