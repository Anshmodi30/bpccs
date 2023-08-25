import React from "react";

const Navbar1 = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-[18px] not-italic font-bold leading-normal">
          કર ભલા હોગા ભલા.
        </h1>
      </div>
      {/*===================main header ==========*/}
      <div className="flex flex-row gap-x-10 items-center justify-around">
        <div className="flex flex-row items-center gap-x-10">
          <a href="/" className="flex flex-row items-center ">
            <img src="/img/logo.svg" className="w-[90px] h-[90px]" alt="logo" />
          </a>
          <div className="">
            <h4 className="text-[14px] not-italic font-semibold leading-normal text-[#000000]">
              Sarva Vidyalaya Kelavani Mandal’s
            </h4>
            <h3 className="text-[18px] not-italic font-bold leading-normal text-[#0096F1]">
              Bholabhai Patel Collage of Computer studies
            </h3>
            <h3 className="text-[14px] not-italic font-semibold leading-normal">
              A Constituent College of KSV
              <span className="text-[14px] not-italic font-semibold leading-normal text-[#000000]">
                (NAAC Acredited with B+ Grade)
              </span>
            </h3>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal tracking-[0.24px] text-[#0096F1]">
                Who We Are?
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal tracking-[0.12px] text-[#FFA800]">
                Administration
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal tracking-[0.24px] text-[#0096F1]">
                Courses
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal tracking-[0.24px] text-[#0096F1]">
                Syllabus
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal tracking-[0.12px] text-[#FFA800]">
                Curriculum
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal tracking-[0.24px] text-[#0096F1]">
                Placements
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="45"
              viewBox="0 0 2 51"
              fill="none"
              className="ml-2 "
            >
              <path d="M1 0.75V50.75" stroke="black" stroke-opacity="0.4" />
            </svg>

            <div className="flex flex-col px-4">
              <h1 className="text-[16px] not-italic font-semibold  leading-normal tracking-[0.24px] text-[#0096F1]">
                Activities
              </h1>
              <h3 className="text-[12px] not-italic font-medium  leading-normal tracking-[0.12px] text-[#FFA800]">
                Know More
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
