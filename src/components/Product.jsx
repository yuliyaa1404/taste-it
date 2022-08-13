import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Product({ id, product, dispatch, favorite, category }) {
  const [categories, setCategories] = useState([]);
	  useEffect(() => {
      const getCategory = async () => {
        let dataCategory = await fetch(
          `http://localhost:7700/categories`
        ).then((a) => a.json());
        setCategories(dataCategory);
      };
      getCategory();
    }, []);
  window.localStorage.setItem("favorite", JSON.stringify(favorite));
  const [deleteId, setDeleteId] = useState(null);
  return (
    <>
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
			<div className="product__category">
				{categories.filter((t) => t.id == product.category).map((a) => (
					<p key={a.name}>{a.name}</p>
				))}
			</div>
          <Link to={`/details/${id}`}>
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
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVORITES",
                payload: product.id,
              })
            }
            className="product__fav fav-selected"
          >
            <i className="fa-solid fa-heart"></i>
          </div>
        )}
      </div>
    </>
  );
}

let t = (a) => a;
export default connect(t)(Product);
