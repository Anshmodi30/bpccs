import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Choosecard = () => {
  const WhyData = [
    {
      img: `/img/f1.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/f2.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },

    {
      img: `/img/f3.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/f1.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/f2.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },

    {
      img: `/img/f3.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
    {
      img: `/img/f2.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },

    {
      img: `/img/f3.svg`,
      title: `Admission Through Acpc procedure (No management /NRI Quota)`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at magna non dui volutpat porta.`,
    },
  ];

  return (
    <div className="px-10 lg:px-20 py-5 mb-4"  >
      <div className="flex items-center justify-start mb-3">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Features
        </h1>
      </div>
      <div className="">
        <Swiper
          spaceBetween={150}
          slidesPerView={
            window.innerWidth > 1024 ? 4 : window.innerWidth > 640 ? 2 : 1
          }
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          {WhyData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="ml-2 lg:ml-0 w-[280px] lg:w-[340px] max-h-[370px] min-h-[370px] md:max-h-[370px] md:min-h-[370px] bg-white rounded-[10px] shadow-[0_4px_16px_0px_rgba(190,190,190,0.25)] px-5 py-5">
                  <div className="p-5">
                    <img src={data.img} className="w-[25%]" alt="card image" />
                  </div>
                  <div className="p-2">
                    <h3 className="pb-5 text-[20px] text-[#0096F1] font-semibold leading-[32.5px] font-work">
                      {data.title}
                    </h3>
                    <p className="text-[14px] font-normal leading-[19px] tracking-[-2.5%] text-[#898989] font-work">
                      {data.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Choosecard;
