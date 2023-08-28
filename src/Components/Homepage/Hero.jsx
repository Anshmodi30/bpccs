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
      imgSrc: "/img/npc1.png",
      imgSrc1: "/img/npc2.png",
    },
    {
      imgSrc: "/img/npc3.png",
      imgSrc1: "/img/npc4.png",
    },
    {
      imgSrc: "/img/npc5.png",
      imgSrc1: "/img/npc6.png",
    },
    {
      imgSrc: "/img/npc7.png",
      imgSrc1: "/img/npc8.png",
    },
    {
      imgSrc: "/img/npc9.png",
      imgSrc1: "/img/npc10.png",
    },
  ];
  return (
    <div className="lg:h-[650px] h-[600px]">
      <Swiper
        direction={"vertical"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        pagination={{ el: ".swiper-pagination1", clickable: true }}
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
              <div className="absolute inset-0 lg:-top-14 flex items-center justify-center">
                <img
                  src={item.imgSrc}
                  alt="Image 2"
                  className="w-[70%] h-[70%] object-cover"
                />
              </div>
              <div className="absolute lg:bottom-16 left-0 right-0 items-center justify-center text-white lg:text-[38px] hidden lg:flex">
                <p className="text-center  font-semibold font-KaiseiHarunoUmi text-[12px] md:text-[30px]  ">
                  Welcome to Bholabhai Patel Collage of Computer studies
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="left-10 md:left-16 absolute top-[21rem] z-40 ">
          <div className="swiper-pagination1"></div>
          <div className=" w-5 -left-1.5 absolute top-[4rem]  z-40 ">
            <img src="/img/Arrow.png" className="arrowmoving" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
