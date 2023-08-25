import React from "react";
import Hero from "../Homepage/Hero";

const Ncc = () => {
  return (
    <div>
      <div className="lg:px-12 pt-10 px-5 py-5">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          NCC
        </h1>
      </div>
      <Hero />
      <div className="mt-5">
        <p className="text-[16px] text-justify font-inter not-italic font-medium leading-[202.523%] px-10 gap-y-3 ">
          NCC provides a suitable environment to motivate the youth to take up a
          career in the Armed Forces and Develop
          <br />
          Character,Comradeship,Discipline ,Leadership, Secular Outlook, Spirit
          of Adventure and Ideals of Selfless Service among the Youth of the
          Country.
          <br />
          BPCCS is having 50 seats of NCC which is running under 9 BT Gujarat
          Ahmedabad, NCC.
          <br />
          Cadets are having parade on every Monday.
          <br />
          Every year Cadets have celebrated Kargil Vijay Diwas, Republic Day and
          Independence Day and have given their services in every college events
          and programme
          <br />
          Cadets have attended Advance Leadership Camp, Basic Leadership Camp,
          National Integration Camp, CATC and NCC National Games.
        </p>
      </div>
    </div>
  );
};

export default Ncc;
