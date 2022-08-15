import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Hamburger({ menu, setMenu, dispatch }) {
  const [category, setCategory] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    let getCategory = async () => {
      let data = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setCategory(data.categories);
    };
    getCategory();
  }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <div
      onClick={() => {
        dispatch({
          type: "HEADER_SHOW",
          payload: true,
        });
        setMenu(false);
      }}
      className={menu ? "ham modal opened" : "ham modal"}
    >
      <div onClick={(e) => e.stopPropagation()} className="ham__wrapper">
        <div
          onClick={() => {
            dispatch({
              type: "HEADER_SHOW",
              payload: true,
            });
            setMenu(false);
          }}
          className="ham__close"
        >
          &times;
        </div>
        <ul className="ham__menu">
          <li
            onClick={() => {
              setMenu(false);
              dispatch({
                type: "HEADER_SHOW",
                payload: true,
              });
            }}
          >
            <NavLink to="/taste-it">Ana səhifə</NavLink>
          </li>
          <li
            onClick={() => {
              setDropdown((dropdown) => !dropdown);
              setClicked((clicked) => !clicked);
            }}
            className={clicked ? "ham-clicked" : "ham-opened"}
          >
            Reseptlər <i className="fa-solid fa-caret-down"></i>
            <ul className={dropdown ? "ham-dropdown" : "ham-hide"}>
              {category.map((a) => (
                <li
                  onClick={() => {
                    setClicked((clicked) => !clicked);
                    setMenu(false);
                    dispatch({
                      type: "HEADER_SHOW",
                      payload: true,
                    });
                  }}
                  key={a.id}
                  id={a.id}
                  category={a.id}
                >
                  <NavLink
                    onClick={() =>
                      dispatch({
                        type: "HEADER_SHOW",
                        payload: true,
                      })
                    }
                    to={`/recipes/${a.id}`}
                  >
                    {a.name}
                  </NavLink>
                </li>
              ))}
              <NavLink to="/recipes">
                {" "}
                <li
                  onClick={() => {
                    setMenu(false);
                    dispatch({
                      type: "HEADER_SHOW",
                      payload: true,
                    });
                  }}
                  className="ham-dropdown-all"
                >
                  Bütün resepltər
                </li>
              </NavLink>
            </ul>
          </li>
          <li
            onClick={() => {
              setMenu(false);
              dispatch({
                type: "HEADER_SHOW",
                payload: true,
              });
            }}
          >
            <NavLink to="/about_market">Market</NavLink>
          </li>
          <li
            onClick={() => {
              setMenu(false);
              dispatch({
                type: "HEADER_SHOW",
                payload: true,
              });
            }}
          >
            <NavLink to="/about_us">Haqqımızda</NavLink>
          </li>
          <li
            onClick={() => {
              setMenu(false);
              dispatch({
                type: "HEADER_SHOW",
                payload: true,
              });
            }}
          >
            <NavLink to="/blog">Bloq</NavLink>
          </li>
          <li
            onClick={() => {
              setMenu(false);
              dispatch({
                type: "HEADER_SHOW",
                payload: true,
              });
            }}
          >
            <NavLink to="/contact_us">Bizimlə əlaqə</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

const t = (a) => a;
export default connect(t)(Hamburger);
