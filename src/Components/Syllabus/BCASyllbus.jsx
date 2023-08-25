import React from "react";

const BCASyllbus = () => {
  const SyllbusData = [
    {
      title: `Semester -I`,
      Link1: `Download Syllabus of Semester - I`,
      Link2: `Download Syllabus of Semester - I`,
    },

    {
      title: `Semester -II`,
      Link1: `Download Syllabus of Semester - II`,
      Link2: `Download Structure of Semester - II`,
    },
    {
      title: `Semester -III`,
      Link1: `Download Syllabus of Semester - III`,
      Link2: `Download Structure of Semester - III`,
    },
    {
      title: `Semester -IV`,
      Link1: `Download Syllabus of Semester - IV`,
      Link2: `Download Structure of Semester - IV`,
    },
    {
      title: `Semester -V`,
      Link1: `Download Syllabus of Semester - V`,
      Link2: `Download Structure of Semester - V`,
    },
    {
      title: `Semester -VI`,
      Link1: `Download Syllabus of Semester - VI`,
      Link2: `Download Structure of Semester - VI`,
    },
  ];
  return (
    <>
      {SyllbusData.map((data, index) => {
        return (
          <div className=" flex items-center justify-center  py-10 px-6 md:px-10 lg:px-20">
            <div className="border    border-[#FFA800]  w-[100%] ">
              <div className="relative ">
                <div className=" bg-[#FFA800]     bottom-[10px] md:bottom-[6px]  px-5 w-[100%] py-2    ">
                  <h1 className="text-[20px] md:text-[24px]  not-italic font-bold text-white leading-normal ">
                    {data.title}
                  </h1>
                </div>
              </div>

              <div className="flex items-start justify-start py-2   px-5 bg-[#ECECEC] ">
                <a className="text-[18px] md:text-[20px] text-[#0096F1] not-italic font-semibold leading-normal underline cursor-pointer ">
                  {" "}
                  {data.Link1}
                </a>
              </div>

              <div className="flex py-2 items-start justify-start px-5 ">
                <a className="text-[18px] md:text-[20px]  text-[#0096F1] not-italic font-semibold leading-normal underline cursor-pointer">
                  {data.Link2}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BCASyllbus;
