import React from "react";
// import Inquiry from "../Homepage/Inquiry";
// import Slider from "../Slider/Slider";
import Hero from "../Homepage/Hero";
import Placement from "../Homepage/Placement";
import PlacedStudent from "./PlacedStudent";

const PlacementPartner = () => {
  return (
    <div>
      <div className="lg:px-12 pt-10 px-5 py-5">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Placement
        </h1>
      </div>
      <Hero />
      <div className="mt-5">
        <p className="text-[16px] font-inter px-14 text-justify  not-italic font-medium leading-[202.523%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque
          aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id
          sapien. Vestibulum malesuada orci sit amet pretium facilisis. In
          lobortis congue augue, a commodo libero tincidunt scelerisque. Donec
          tempus congue lacinia. Phasellus lacinia felis est, placerat commodo
          odio tincidunt iaculis. Sed felis magna, iaculis a metus id,
          ullamcorper suscipit nulla. Fusce facilisis, nunc ultricies posuere
          porttitor, nisl lacus tincidunt diam, vel feugiat nisi elit id massa.
          Proin nulla augue, dapibus non justo in, laoreet commodo nunc.
          Maecenas faucibus neque in nulla mollis interdum. Quisque quis
          pellentesque enim, vitae pulvinar purus. Quisque vitae suscipit risus.
          Curabitur scelerisque magna a interdum pretium. Integer sodales metus
          ut placerat viverra. Curabitur accumsan, odio quis vehicula imperdiet,
          tellus ex venenatis nisl, a dignissim lectus augue tincidunt arcu.
        </p>
      </div>
      <div className="flex  px-14 py-7">
        <div className=" flex flex-col md:flex-col lg:flex-row md:gap-x-10">
          <div className="lg:w-[35%]  ">
            <img src="/img/Placementp1.png" className="" alt="" />
          </div>
          <div className="flex flex-col py-10 lg:w-[65%]">
            <h1 className="text-[#0096F1] text-[20px] lg:text-[32px]  underline font-bold leading-[46.34px] relative font-libre">
              Ajay Singh
            </h1>
            <h2 className=" text-[14px]  lg:text-[16px] text-[color:var(--02,#FFA800)] font-[inter] not-italic font-semibold leading-[normal] tracking-[0.21px] ">
              Placement Director
            </h2>
            <p className="text-[16px]  font-inter  text-justify  pt-5 not-italic font-medium leading-[202.523%] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis
              scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit
              mauris ipsum id sapien. Vestibulum malesuada orci sit amet pretium
              facilisis. In lobortis congue augue, a commodo libero tincidunt
              scelerisque. Donec tempus congue lacinia. Phasellus lacinia felis
              est, placerat commodo odio tincidunt iaculis. Sed felis magna,
              iaculis a metus id, ullamcorper suscipit nulla. Fusce facilisis,
              nunc ultricies posuere porttitor, nisl lacus tincidunt diam, vel
              feugiat nisi elit id massa. Proin nulla augue, dapibus non justo
              in, laoreet commodo nunc. Maecenas faucibus neque in nulla mollis
              interdum. Quisque{" "}
            </p>
          </div>
        </div>
      </div>
      <Placement />
      <div className="lg:px-12 pt-10 px-5 py-5">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Placed Student
        </h1>
      </div>
      <PlacedStudent />
    </div>
  );
};

export default PlacementPartner;
