import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from "react-redux";
import "swiper/css/navigation";
import "swiper/less/navigation";
import { useSwiper } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";
import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

function SliderMarket({ market, favorite }) {
  const [marketCategory, setMarketCategory] = useState([]);
  useEffect(() => {
    let getMarketiCategory = async () => {
      let dataCategory = await fetch(
        `https://yuliyaa1404.github.io/json-api/database.json`
      ).then((a) => a.json());
      setMarketCategory(dataCategory.market_categories);
    };
    getMarketiCategory();
  }, []);
  window.localStorage.setItem("favorite", JSON.stringify(favorite));
  const swiper = useSwiper();
  return (
    <>
      <div className="slider">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="food-swiper"
        >
          <SwiperButtonNext></SwiperButtonNext>
          <SwiperButtonPrev></SwiperButtonPrev>
          {market.map((a) => (
            <SwiperSlide className="slide" key={a.id}>
              <div className="slide__image">
                <img src={a.image} alt="" />
              </div>
              <div className="slide__body">
                <div className="slide__category"></div>
                <div className="slide__category">
                  {marketCategory
                    .filter((t) => t.id == a.category)
                    .map((a) => (
                      <p key={a.name}>{a.name}</p>
                    ))}
                </div>
                <Link to="/market">
                  <h5 className="slide__name">{a.name}</h5>
                </Link>
                <div className="slide__info">
                  <div className="slide__time">
                    <i className="fa-solid fa-timer"></i>
                    {a.time} dəq
                  </div>
                  {a.rating < 5 ? (
                    <div className="slide__rating">
                      {a.rating}/5
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp-half-stroke"></i>
                    </div>
                  ) : (
                    <div className="slide__rating">
                      {a.rating}/5
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

let t = (a) => a;
export default connect(t)(SliderMarket);
