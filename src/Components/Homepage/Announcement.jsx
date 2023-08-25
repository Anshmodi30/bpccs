import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Announcement = () => {
  const current = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = `${
    month[current.getMonth()]
  } ${current.getDate()}, ${current.getFullYear()}`;

  const [CalDate, setCalDate] = useState(new Date());

  const NewsData = [
    {
      title: "IT Fair1",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair2",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair3",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair4",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair5",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair6",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair7",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair8",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair9",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
    {
      title: "IT Fair10",
      description:
        "IT fairs in colleges are great opportunities for students to gain exposure to a variety of technology-related companies and products. They provide students with the opportunity to explore different technologies and find out how they can be used in their daily lives.",
    },
  ];

  return (
    <div className="px-10 lg:px-20 py-5">
      <div className="mb-10">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] font-libre relative before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Announcements
        </h1>
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-10 gap-y-8">
          <div className="border-2 border-[#0096F1] h-[342px] w-[300px] lg:w-1/3">
            <div className="bg-[#0096f1] text-white text-[17px] px-3 py-2">
              <h1>Calendar</h1>
            </div>
            <div>
              <Calendar onChange={setCalDate} value={CalDate} />
            </div>
          </div>
          <div className="border-2 border-[#0096F1] h-[342px] overflow-hidden scrolling-card relative w-[300px] lg:w-1/3">
            <div className="bg-[#0096f1] text-white text-[17px] px-3 py-2 z-40 relative">
              <h1>{date}</h1>
            </div>
            <div className="scrolling-content z-30 h-[330px]">
              <Swiper
                slidesPerView={window.innerHeight > 640 ? 2 : 1}
                direction={"vertical"}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="w-full h-full cursor-pointer"
              >
                {NewsData.map((item, index) => {
                  return (
                    <SwiperSlide className="mb-10 lg:mb-0">
                      <div key={index} className="p-2">
                        <div className="flex flex-col gap-y-3">
                          <h1 className="text-[#FFA800] font-bold font-inter text-[17px]">
                            {item.title}
                          </h1>
                          <p className="font-medium text-[14px] text-justify font-inter leading-[20.58px]">
                            {item.description}
                          </p>
                        </div>
                        <hr className="mt-2 border-[1px] border-[#DEDEDE]" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="border-2 border-[#0096F1] h-[342px] w-[300px] lg:w-1/3">
            <div className="bg-[#0096f1] text-white text-[17px] px-3 py-2">
              <h1>Latest News</h1>
            </div>
            <div className="mt-5">
              <ul className="flex flex-col items-start ml-8 justify-around gap-y-3 list-disc text-[#ffA800]">
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
                <li>Lorem ipsum dolor.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-2 border-[#0096F1] lg:h-[100px] h-fit">
          <div className="bg-[#0096f1] text-white text-[17px] px-3 py-2">
            <h1>Upcoming Events</h1>
          </div>
          <div className="my-5 lg:my-0 lg:mt-4">
            <Swiper
              slidesPerView={window.innerWidth > 640 ? 6 : 1}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              // centeredSlides={true}
              modules={[Autoplay]}
              className="ml-5"
            >
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
              <SwiperSlide>
                <li className="list-disc text-[#ffA800]">Lorem ipsum dolor.</li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
