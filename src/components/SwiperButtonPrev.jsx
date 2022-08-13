import React from "react";
import { useSwiper } from "swiper/react";

function SwiperButtonPrev() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slidePrev()}
      className="slider__customleft customleft"
    >
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
}

export default SwiperButtonPrev;
