import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Placement = () => {
  const Company = [
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
    {
      imgSrc: "/img/tos.png",
    },
    {
      imgSrc: "/img/info.png",
    },
    {
      imgSrc: "/img/tech.png",
    },
    {
      imgSrc: "/img/Lt.png",
    },
  ];
  return (
    <div className="px-10 lg:px-20 py-5">
      <div className="flex items-center justify-start">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Our Placement Partners
        </h1>
      </div>
      <div className="px-10 md:px-10 py-10  flex items-center justify-center">
        <Swiper
          spaceBetween={10}
          slidesPerView={
            window.innerWidth > 1024 ? 6 : window.innerWidth > 640 ? 2 : 1
          }
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="pt-5 pb-5 flex items-center justify-center">
            {Company.map((item, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="w-full h-20 lg:w-32 lg:h-20">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Placement;
