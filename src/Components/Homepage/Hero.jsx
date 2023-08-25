import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const Data = [
    {
      imgSrc: "./img/ik1.png",
    },
    {
      imgSrc: "./img/ik2.png",
    },
    {
      imgSrc: "./img/ik3.png",
    },
    {
      imgSrc: "./img/ik4.png",
    },
    {
      imgSrc: "./img/ik5.png",
    },
    {
      imgSrc: "./img/ik6.png",
    },
  ];
  return (
    <div className="lg:h-[650px] h-[600px]">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {Data.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="overflow-hidden">
              <img
                src={item.imgSrc}
                alt="Image 1"
                className="absolute inset-0 w-full h-full object-cover filter blur-[5px]"
              />
              <div className="absolute inset-0 lg:-top-10 flex items-center justify-center">
                <img
                  src={item.imgSrc}
                  alt="Image 2"
                  className="w-[90%] h-[80%] object-cover"
                />
              </div>
              <div className="absolute lg:bottom-2 left-0 right-0 items-center justify-center text-white lg:text-[38px] hidden lg:flex">
                <p className="font-libre">
                  Welcome to Bholabhai Patel College of Computer Studies
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
