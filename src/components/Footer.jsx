import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__item">
            <div className="footer__label">Haqqımızda</div>
            <div className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              eveniet aspernatur esse quo, minima et.
            </div>
            <ul className="footer__icons">
              <li className="footer__icon">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="footer__icon">
                <i className="fa-brands fa-google"></i>
              </li>
              <li className="footer__icon">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="footer__icon">
                <i className="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__label">Navigasiya</div>
            <ul className="footer__nav">
              <Link to="/about_market">
                <li>Market</li>
              </Link>
              <Link to="/recipes">
                <li>Reseptlər</li>
              </Link>
              <Link to="/search">
                <li>Reseptlərin axtarışı</li>
              </Link>
              <Link to="/about_us">
                <li>Haqqımızda</li>
              </Link>
              <Link to="/blog">
                <li>Bloq</li>
              </Link>
              <Link to="/contact_us">
                <li>Bizimlə əlaqə</li>
              </Link>
            </ul>
          </div>
          <div className="footer__item">
            <div className="footer__label">Abunə ol</div>
            <div className="footer__info">
              Ən son yeniləmələri və təklifləri birinci əldə edin.
            </div>
            <div className="footer__input">
              <input type="text" placeholder="E-mail" />
              <div className="footer__send">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyrights">
            Copyright © 2022 Bütün hüquqlar qorunur
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
