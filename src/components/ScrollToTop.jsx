import React from 'react'

function ScrollToTop() {
	  const scrollToTop = () => {
      window.scrollTo({
        top: 0,
      //   behavior: "smooth",
        /* you can also use 'auto' behaviour
         in place of 'smooth' */
      });
    };
  return (
	 <div>ScrollToTop</div>
  )
}

export default ScrollToTop