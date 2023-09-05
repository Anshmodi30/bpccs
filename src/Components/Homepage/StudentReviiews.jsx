import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
const StudentReviiews = () => {
  const WhyData = [
    {
      img: `/img/Rakesh.png`,
      title: `Rakesh Singh`,
      deg: `BCA`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida ultricies purus, et convallis orci. Nam bibendum quam nec dignissim sodales. Vivamus sollicitudin imperdiet vehicula. Proin convallis dui at velit auctor`,
    },
    {
      img: `/img/Ayushi.png`,
      title: `Ayushi Devi`,
      deg: `BBA`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida ultricies purus, et convallis orci. Nam bibendum quam nec dignissim sodales. Vivamus sollicitudin imperdiet vehicula. Proin convallis dui at velit auctor`,
    },

    {
      img: `/img/Priyanka.png`,
      title: `Priyanka Patel`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida ultricies purus, et convallis orci. Nam bibendum quam nec dignissim sodales. Vivamus sollicitudin imperdiet vehicula. Proin convallis dui at velit auctor`,
    },
    {
      img: `/img/Aditya.png`,
      title: `Aditya Mehta`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida ultricies purus, et convallis orci. Nam bibendum quam nec dignissim sodales. Vivamus sollicitudin imperdiet vehicula. Proin convallis dui at velit auctor`,
    },
    {
      img: `/img/Anisha.png`,
      title: `Anisha Singh`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida ultricies purus, et convallis orci. Nam bibendum quam nec dignissim sodales. Vivamus sollicitudin imperdiet vehicula. Proin convallis dui at velit auctor`,
    },
    {
      img: `/img/Mayank.png`,
      title: `Mayank Singh`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida ultricies purus, et convallis orci. Nam bibendum quam nec dignissim sodales. Vivamus sollicitudin imperdiet vehicula. Proin convallis dui at velit auctor`,
    },
  ];
  return (
    <>
      <div className="lg:px-20 px-5 py-5">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          What Students Say
        </h1>
      </div>

      <div className="px-8 lg:px-20 py-10 bg-[#0096F1] flex items-center justify-center mb-5">
        <Swiper
          slidesPerView={
            window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1
          }
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="pt-5 pb-5 px-8  flex items-center justify-center">
            {WhyData.map((data, index) => {
              return (
                <SwiperSlide>
                  <div className="flex flex-row items-center     w-[320px] md:w-[360px] xl:w-[400px] max-h-[224px] min-h-[224px] md:max-h-[224px] md:min-h-[224px] bg-white  border border-grey">
                    <img
                      className="object-cover  px-2 w-[170px]   h-[170px] md:w-[200px] md:h-[190px] "
                      src={data.img}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal ">
                      <h5 className="mb-2 text-[#0096F1] font-inter text-[18px] md:text-[20px] font-semibold leading-[29.05px] ">
                        {data.title}
                      </h5>
                      <h5 className="mb-2 text-[#000] text-[11px] md:text-[11] font-inter font-medium leading-[14.247px]">
                        {data.deg}
                      </h5>
                      <p className=" text-[11px] md:text-[11px] text-[#6B6B6B] font-medium font-inter leading-[14.25px] text-justify  ">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default StudentReviiews;
