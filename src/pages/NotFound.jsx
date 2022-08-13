import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <section className="bg-purple">
        <div class="central-body">
          <img
            src="http://salehriaz.com/404Page/img/404.svg"
            className="image-404"
            style={{ width: "300px" }}
          />
          <Link to="/" class="btn-go-home">
            Ana səhifəyə qayıtmaq
          </Link>
        </div>
        <div class="objects">
          <img
            src="http://salehriaz.com/404Page/img/rocket.svg"
            className="object_rocket"
            style={{ width: "40px" }}
          />

          <div class="earth-moon">
            <img
              src="http://salehriaz.com/404Page/img/earth.svg"
              className="object_earth"
              style={{ width: "100px" }}
            />
            <img
              src="http://salehriaz.com/404Page/img/moon.svg"
              className="object_moon"
              style={{ width: "80px" }}
            />
          </div>
          <div class="box_astronaut">
            <img
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              class="object_astronaut"
              style={{ width: "140px" }}
            />
          </div>
        </div>
        <div className="glowing_stars">
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
          <div class="star"></div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
