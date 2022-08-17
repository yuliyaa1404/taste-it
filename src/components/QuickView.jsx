import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function QuickView({ idItem, dispatch, quickView, quickViewShow, favorite }) {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setProducts(data.products);
    };
    getData();
  }, []);
  useEffect(() => {
    let getReviews = async () => {
      let reviewsData = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setReviews(reviewsData.reviews);
    };
    getReviews();
  }, []);
  return (
    <section
      onClick={() =>
        dispatch({
          type: "QUICK_VIEW_SHOW",
          payload: false,
        })
      }
      className={quickViewShow ? "quick panel opened" : "quick panel"}
    >
      <div onClick={(e) => e.stopPropagation()} className="quick__wrapper">
        <div className="container">
          {products
            .filter((t) => t.id == quickView)
            .map((a, c) => {
              return (
                  <div key={c} className="quick__item">
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
                                type: "QUICK_VIEW_SHOW",
                                payload: false,
                              })
                            }
                            className="quick__btn btn-bg"
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
              );
            })}
        </div>
        <div
          onClick={() =>
            dispatch({
              type: "QUICK_VIEW_SHOW",
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
export default connect(t)(QuickView);
