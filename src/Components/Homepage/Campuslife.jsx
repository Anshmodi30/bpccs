import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Campuslife = () => {
  const Data = [
    {
      imgSrc: "/img/ik1.png",
    },
    {
      imgSrc: "/img/ik2.png",
    },
    {
      imgSrc: "/img/ik3.png",
    },
    {
      imgSrc: "/img/ik4.png",
    },
    {
      imgSrc: "/img/ik5.png",
    },
    {
      imgSrc: "/img/ik6.png",
    },
  ];
  return (
    <div className="px-10 lg:px-20 pb-5">
      <div className="flex items-center justify-start">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Campus Life
        </h1>
      </div>
      <div className="mt-8 flex flex-col-reverse lg:flex-row-reverse md:gap-x-7 lg:gap-x-20 lg:justify-between lg:items-center">
        <div className="flex flex-col py-5 gap-y-1 lg:w-1/2">
          <div>
            <h2 className="  text-[color:var(--01,#0096F1)] text-[20px] lg:text-[32px] not-italic font-bold font-KaiseiHarunoUmi leading-[normal] ">
              Life at BPCCS-BCA,Gandhinagar
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row">
            <h2 className=" text-[14px]  lg:text-[16px] text-[color:var(--02,#FFA800)] font-[inter] not-italic font-semibold leading-[normal] tracking-[0.21px] ">
              Coursed offered BCA (Bachelor of Computer Applications)
            </h2>
          </div>
          <div className="pt-3">
            <p className="text-black text-justify text-[12px] lg:text-[14px] not-italic py-2 font-[inter] font-normal leading-[174.023%] tracking-[0.475px] ">
              The BPCCS BCA program has successfully completed an impressive 23
              years of imparting quality education in the field of computer
              applications. The program prides itself on being the first
              institution in Gujarat to specialize in cutting-edge
              technologieslg: such as Robotics and E-Commerce, which provide
              students with a comprehensive understanding of these fields and
              prime them for success in their careers. The faculty is committed
              to providing students with advanced training and hands-on
              experience through various practical sessions, seminars, and
              workshops. Furthermore, the institution keeps evolving with
              changing market trends by introducing updated syllabi
              incorporating contemporary industry-specific practices. With a
              top-notch infrastructure and state-of-the-art technology labs,
              BPCCS BCA continues to prepare future leaders who are innovative
              and equipped with the latest knowledge and skills required to
              thrive in an ever-evolving industry.
            </p>
          </div>
        </div>
        <div className="scroll-smooth overflow-x-auto group lg:w-1/2">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ el: ".swiper-paginationauto", clickable: true }}
          >
            {Data.map((item, index) => (
              <div key={index} className="">
                <SwiperSlide>
                  <div className=" lg:w-[90%] ">
                    <img src={item.imgSrc} className="" alt="" />
                  </div>
                </SwiperSlide>
              </div>
            ))}
            <div className=" flex justify-center lg:pr-16 py-5">
              <div className="flex swiper-paginationauto justify-center pt-4 py-1 text-[#FFA800] "></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Campuslife;
