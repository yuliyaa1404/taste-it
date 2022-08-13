import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ModalConfirmation from "../components/ModalConfirmation";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import QuickView from "../components/QuickView";

function Favorites({ props, favorite, dispatch }) {
  window.localStorage.setItem("favorite", JSON.stringify(favorite));
  const [deleteItem, setDeleteItem] = useState(null);
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <ModalConfirmation
        deleteItem={deleteItem}
        name={favorite.find((a) => a.id == deleteItem)?.name}
      />
		<QuickView/>
      <section className="favorite">
        <div className="container">
          <div className="row">
            {favorite.length > 0 ? (
              favorite.map((product) => {
                return (
                  <div className="product">
                    <div className="product__image">
                      <img src={product.image} alt="" />
                      <div
                        onClick={() => {
                          dispatch({
                            type: "QUICK_VIEW",
                            payload: product.id,
                          });
                          dispatch({
                            type: "QUICK_VIEW_SHOW",
                            payload: true,
                          });
                        }}
                        className="product__view btn-bg"
                      >
                        Qısa məlumat
                      </div>
                    </div>
                    <div className="product__body">
                      <Link to={`/details/${product.id}`}>
                        <h5 className="product__name">{product.name}</h5>
                      </Link>

                      <div className="product__info">
                        <div className="product__time">
                          <i className="fa-solid fa-timer"></i>
                          {product.time} dəq
                        </div>
                        {product.rating < 5 ? (
                          <div className="product__rating">
                            {product.rating}/5
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp-half-stroke"></i>
                          </div>
                        ) : (
                          <div className="product__rating">
                            {product.rating}/5
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                            <i className="fa-solid fa-star-sharp"></i>
                          </div>
                        )}
                      </div>
                    </div>
                    {!favorite.find((a) => a.id === product.id) ? (
                      <div
                        onClick={() =>
                          dispatch({
                            type: "ADD_TO_FAVORITES",
                            payload: product,
                          })
                        }
                        className="product__fav"
                      >
                        <i className="fa-solid fa-heart"></i>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          dispatch({
                            type: "MODAL_CONFIRMATION_SHOW",
                            payload: true,
                          });
								  setDeleteItem(product.id);
                        }}
                        className="product__fav fav-selected"
                      >
                        <i className="fa-solid fa-heart"></i>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="favorite__empty">
                <p className="favorite__title">Sevimlilər yoxdur</p>
                <p className="favorite__subtitle">
                  Maraqlı reseptləri tapmağa tələsin!
                </p>
                <Link to="/recipes">
                  <p className="favorite__btn btn">Reseptlər</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

let t = (a) => a;
export default connect(t)(Favorites);
