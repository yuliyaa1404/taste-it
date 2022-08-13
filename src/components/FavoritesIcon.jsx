import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function FavoritesIcon({ favorite }) {
  return (
    <Link to="/favorite">
      <div className="favorite-icon">
        <div className="favorite-icon__wrapper">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="favorite-icon-count">
          {favorite.length ? favorite.length : null}
        </div>
      </div>
    </Link>
  );
}

let t = (a) => a;
export default connect(t)(FavoritesIcon);
