import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import QuickView from "../components/QuickView";

function Recipes() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
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
    let getCategory = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setCategory(data.categories);
    };
    getCategory();
  }, []);
  let top =
    products.length && products.filter((a) => a.category == categoryId)[0];
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <QuickView />
      <section className="info">
        {category
          .filter((a) => a.id == categoryId)
          .map((a) => {
            return (
              <div key={a.id} className="info__content">
                <h1 className="info__title title">{a.name} Reseptləri</h1>
                <h4 className="info__subtitle subtitle">{a.title}</h4>
              </div>
            );
          })}
      </section>
      <section className="category">
        <div className="container">
          <div key={"top" + top.id} className="category__top">
            <div className="category__image">
              <img src={top.image_2} alt="" />
            </div>
            <div className="category__body">
              <h3 className="category__name">{top.name}</h3>
              <p className="category__description">{top.description}</p>
              <p className="category__time">
                <i className="fa-solid fa-timer"></i>
                {top.time} dəqiqə
              </p>
              <Link to={`/details/${top.id}`}>
                <p className="category__btn btn-arrow">Reseptə keçid</p>
              </Link>
            </div>
          </div>
          <div className="category__row row">
            {products
              .filter((a) => a.category == categoryId)
              .map((a) => {
                return <Product product={a} key={a.id} id={a.id} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Recipes;
