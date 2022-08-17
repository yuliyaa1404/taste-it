import React from "react";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import BasketIcon from "../components/BasketIcon";
import FavoritesIcon from "../components/FavoritesIcon";
import QuickView from "../components/QuickView";

function Filter() {
  const [category, setCategory] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [fullIngredient, setFullIngredient] = useState([]);
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [active, setActive] = useState(0);
  useEffect(() => {
    let getCategory = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setCategory(data.categories);
    };
    getCategory();
  }, []);
  useEffect(() => {
    let getCuisine = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setCuisine(data.cuisine);
    };
    getCuisine();
  }, []);
  useEffect(() => {
    let getIngredient = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setFullIngredient(data.ingredient);
      setIngredient(data.ingredient.slice(0, 8));
    };
    getIngredient();
  }, []);
  useEffect(() => {
    const getData = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setProducts(data.products);
      setFilteredProducts(data.products);
    };
    getData();
  }, []);
  const [filter, setFilter] = useState({
    category: [],
    cuisine: [],
    ingredient: [],
  });
  const [tabCategory, setTabCategory] = useState({
    name: "",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    let t = products;
    if (filter.category.length) {
      t = products.filter((a) =>
        filter.category.includes(a.category.toString())
      );
    }
    if (filter.cuisine.length) {
      t = products.filter((a) => filter.cuisine.includes(a.cuisine.toString()));
    }
    if (filter.ingredient.length) {
      let s = [];
      for (let i = 0; i < products.length; i++) {
        let c = false;
        for (let j = 0; j < filter.ingredient; j++) {
          if (products[i].ingredient.includes(Number(filter.ingredient[j]))) {
            c = true;
          }
        }
        if (c) {
          s.push(products[i]);
        }
      }
      t = s;
    }
    setFilteredProducts(t);
  }, [filter]);
  const handleChange = (e) => {
    if (e.target.checked) {
      setFilter({
        ...filter,
        [e.target.name]: [...filter[e.target.name], e.target.value],
      });
    } else {
      setFilter({
        ...filter,
        [e.target.name]: [
          ...filter[e.target.name].filter((a) => a != e.target.value),
        ],
      });
    }
  };
  const openMore = () => {
    setShowMore(true);
  };
  return (
    <>
      <BasketIcon />
      <FavoritesIcon />
      <QuickView />
      <section className="filter">
        <div className="container">
          <div className="filter__wrapper">
            <h2 className="filter__title title">
              Reseptlər və Bişirmə İdeyaları
            </h2>
            <ul className="filter__list">
              <li className="filter__opened">
                Kateqoriya
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="filter__dropdown">
                  {category.map((a) => (
                    <li key={"category" + a.id}>
                      <label htmlFor={a.name}>
                        <input
                          name="category"
                          className="checkbox"
                          onChange={(e) => handleChange(e)}
                          type="checkbox"
                          id={a.name}
                          value={a.id}
                        />
                        {a.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="filter__opened">
                Mətbəx
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="filter__dropdown">
                  {cuisine.map((a) => (
                    <li key={"cuisine" + a.id}>
                      <label htmlFor={a.name}>
                        <input
                          name="cuisine"
                          onChange={handleChange}
                          type="checkbox"
                          id={a.name}
                          value={a.id}
                        />
                        {a.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="filter__opened">
                İngredient
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="filter__dropdown">
                  {ingredient.map((a, b) => {
                    return (
                      <li key={`ingredient_${a.id}`}>
                        <label htmlFor={a.name}>
                          <input
                            name="ingredient"
                            onChange={handleChange}
                            type="checkbox"
                            id={a.name}
                            value={a.id}
                          />
                          {a.name}
                        </label>
                      </li>
                    );
                  })}
                  <p onClick={openMore} className="filter__btn-more">
                    Daha çox filter
                  </p>
                </ul>
              </li>
            </ul>
            <div
              className={
                showMore ? "filter__expended show" : "filter__expended"
              }
            >
              <div className="container">
                <div className="filter__row">
                  {fullIngredient.map((a, b) => (
                    <div className="filter__item" key={"full" + b}>
                      <label htmlFor={a.name}>
                        <input
                          name="ingredient"
                          onChange={handleChange}
                          type="checkbox"
                          id={a.name}
                          value={a.id}
                        />
                        {a.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="filter__btns">
                  <p className="filter__apply">Göstər</p>
                  <p
                    onClick={() => setShowMore(false)}
                    className="filter__close"
                  >
                    Bağla
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="result">
        <div className="container">
          <div className="result__wrapper">
            <h3 className="result__title">Reseptləri araşdırın</h3>
            <ul className="result__list">
              <li
                className={0 == active ? "result__active-list" : ""}
                onClick={(e) => {
                  setFilter({
                    ...filter,
                    category: [],
                  });
                  setActive("0");
                }}
              >
                Bütün reseptlər
              </li>
              {category.map((a) => (
                <li
                  className={a.id == active ? "result__active-list" : ""}
                  onClick={(e) => {
                    setFilter({ ...filter, category: [a.id.toString()] });
                    setActive(a.id);
                  }}
                  value={a.id}
                  name="category"
                  key={a.id}
                >
                  {a.name}
                </li>
              ))}
            </ul>
            <div className="result__row">
              {filteredProducts != 0 ? (
                handleChange &&
                filteredProducts.map((a) => (
                  <Product product={a} key={a.id} id={a.id} />
                ))
              ) : (
                <div className="result__empty">
                  Seçdiyiniz kateqoriya üzrə resept tapılmadı.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filter;
