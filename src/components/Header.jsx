import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalSearch from "./ModalSearch";
import Login from "./Login";
import { connect } from "react-redux";
import { useScrollBy } from "react-use-window-scroll";
import Hamburger from "./Hamburger";
// import ScrollToTop from "./ScrollToTop";

function Header(props, headerShow) {
  const [modalSearch, setModalSearch] = useState(false);
  const [login, setLogin] = useState(false);
  const [category, setCategory] = useState([]);
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const scrollBy = useScrollBy();
  useEffect(() => {
    let getCategory = async () => {
      let data = await fetch(`http://localhost:7700/categories`).then((a) =>
        a.json()
      );
      setCategory(data);
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
  const openModal = () => {
    props.dispatch({
      type: "HEADER_SHOW",
      payload: false,
    });
    setMenu(true);
  };
  useEffect(() => {
    if (menu || login || modalSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menu, login, modalSearch]);

  useEffect(() => {
    let mode = window.localStorage.getItem("mode");
    mode = mode ? mode : "0";
    if (mode === "1") {
      document.body.classList.add("dark");
    }
    window.localStorage.setItem("mode", mode);
    const switcher = document.querySelector(".header__switcher");
    switcher.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (window.localStorage.getItem("mode") === "0") {
        window.localStorage.setItem("mode", "1");
      } else {
        window.localStorage.setItem("mode", "0");
      }
    });
  }, []);

  return (
    <>
      <ModalSearch setModalSearch={setModalSearch} modal={modalSearch} />
      <Login login={login} setLogin={setLogin} />
      <Hamburger menu={menu} setMenu={setMenu} />
      <header
        style={{
          transition: "0.4s",
          top: props.headerShow ? 0 : -100,
          background: scroll ? "white" : "transparent",
        }}
        className={modalSearch ? "header hide" : "header"}
      >
        <div className="container">
          <div className="header__wrapper">
            <NavLink
              to="/"
               className={scroll ? "header__logo scrolled" : "header__logo"}
              style={{
                color: scroll ? "#222222" : "white",
              }}
            >
              <div className="header__logo-icon">
                <i className="fa-duotone fa-fork-knife"></i>
              </div>
              <div className="header__logo-text">Taste It</div>
            </NavLink>
            <ul
              className={scroll ? "header__menu scrolled" : "header__menu"}
            >
              <li>
                <NavLink to="/">Ana səhifə</NavLink>
              </li>
              <li className="opened">
                <NavLink to="/recipes">Reseptlər</NavLink>
                <ul className="dropdown">
                  {category.map((a) => (
                    <li key={a.id} id={a.id} category={a.id}>
                      <NavLink to={`/recipes/${a.id}`}>{a.name}</NavLink>
                    </li>
                  ))}
                  <NavLink to="/recipes">
                    {" "}
                    <li
                      style={{
                        color: scroll ? "white" : "white",
                      }}
                      className="dropdown-all"
                    >
                      Bütün resepltər
                    </li>
                  </NavLink>
                </ul>
              </li>
              <li className="opened">
                <NavLink to="/about_market">Market</NavLink>
                <ul className="dropdown">
                  <li>
                    <NavLink to="/about_market">Market haqqında</NavLink>
                  </li>
                  <li>
                    <NavLink to="/market">Menu</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/about_us">Haqqımızda</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Bloq</NavLink>
              </li>
              <li>
                <NavLink to="/contact_us">Bizimlə əlaqə</NavLink>
              </li>
            </ul>
            <div className="header__icons">
              <div className="header__search">
                <i
                  onClick={() => setModalSearch(true)}
                  className=" fa-regular fa-magnifying-glass"
                  style={{
                    color: scroll ? "#222222" : "white",
                  }}
                ></i>
              </div>
              <div
                onClick={() => setLogin(true)}
                className="header__search"
                style={{
                  color: scroll ? "#222222" : "white",
                }}
              >
                <i className="fa-solid fa-user"></i>
              </div>
              <div
                onClick={() => {
                  props.dispatch({
                    type: "HEADER_SHOW",
                    payload: false,
                  });
                  setMenu(true);
                }}
                style={{
                  color: scroll ? "#222222" : "white",
                }}
                className="header__burger"
              >
                <i className="fa-solid fa-bars"></i>
              </div>
              <div class="header__switcher">
                <div class="header__thumb"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

const t = (a) => a;
export default connect(t)(Header);
