import React from "react";
import { useSwiper } from "swiper/react";

function SwiperButtonNext() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slideNext()}
      className="slider__customright customright"
    >
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}

export default SwiperButtonNext;
