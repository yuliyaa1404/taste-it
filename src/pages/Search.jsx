import React from "react";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import { connect } from "react-redux";

function Search({ dispatch, searchValue }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setProducts(data.products);
    };
    getData();
  }, []);
  const { query } = useParams();
  console.log(searchValue);
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <section className="filter">
        <div className="container">
          <div className="filter__wrapper">
            <h2 className="filter__title title">Reseptlərin seçimi</h2>
            <div className="filter__head">
              <i className="fa-solid fa-magnifying-glass filter__icon"></i>
              <input
                value={searchValue}
                onChange={(e) => {
                  dispatch({
                    type: "SEARCH_VALUE",
                    payload: e.target.value,
                  });
                }}
                type="text"
                placeholder="Axtarış"
              />
              <div
                oclick={() => {
                  dispatch({
                    type: "SEARCH_VALUE",
                    payload: 2,
                  });
                }}
                className="filter__remove"
              >
                &times;
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="result">
        <div className="container">
          <div className="result__wrapper">
            <div className="result__row">
              {products.filter((t) =>
                t.name.toLowerCase().includes(searchValue.toLowerCase())
              ).length != 0 ? (
                products
                  .filter((t) =>
                    t.name.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .map((a) => <Product product={a} key={a.id} id={a.id} />)
              ) : (
                <div className="result__empty">
                  Axtarış üzrə resept tapılmadı.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

let t = (a) => a;
export default connect(t)(Search);
