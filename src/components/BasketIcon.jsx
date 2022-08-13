import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function BasketIcon({basket }) {
  return (
    <Link to="/basket">
      <div className="basket-icon">
        <div className="basket-icon__wrapper">
          <i className="fa-regular fa-basket-shopping"></i>
        </div>
        <div className="basket-icon-count">
          {basket.length ? basket.length : null}
        </div>
      </div>
    </Link>
  );
}

let t = (a) => a;
export default connect(t)(BasketIcon);
