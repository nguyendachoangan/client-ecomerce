import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true, // Hiển thị dấu tròn
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.tgdd.vn/Products/Images/44/309018/Slider/vi-vn-apple-macbook-air-m2-2023-16gb-slider-6.jpg"
            alt="banner1"
            className="h-[400px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn.tgdd.vn/Products/Images/522/311074/Slider/samsung-galaxy-tab-s9-plus-thumb-yt-1020x570.jpg"
            alt="banner2"
            className="h-[400px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn.tgdd.vn/Products/Images/522/294104/Slider/ipad-pro-m2-11-inch638035032357488319.jpg"
            alt="banner3"
            className="h-[400px] w-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://cdn.tgdd.vn/Products/Images/42/153856/Slider/iphone-11-up-4-new-1933x982.jpg"
            alt="banner3"
            className="h-[400px] w-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
