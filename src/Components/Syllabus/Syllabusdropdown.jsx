import React, { useState } from "react";

const Syllabusdropdown = ({ selected, setSelected }) => {
  const [isActive, SetIsActive] = useState(false);
  const option = [" BCA ", "MCA"];
  return (
    <div className="dropdown w-[180px] h-[50px]  relative z-50">
      <div
        className="text-white text-[22px] px-8 md:px-10 lg:px-14  bg-[#FFA800] w-[180px] h-[50px]   text-left p-2  dropdown-btn rounded-[3px]"
        onClick={(e) => SetIsActive(!isActive)}
      >
        {selected}
        {/* ===========================icon====================== */}
        <div className="relative ">
          <svg
            width="29"
            height="24"
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-[3px]  lg:bottom-[3px]  left-20 lg:left-[4.5rem] md:left-20 "
          >
            <path
              d="M2 8L12.2401 16.3783C12.6822 16.7399 13.3178 16.7399 13.7599 16.3783L24 8"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>

        {/*====================================================== */}
      </div>

      {isActive && (
        <div className="absolute top[110px] p-[15px] my-2   bg-white shadow-stone-900 left-0 w-[100%] drop-shadow-md  dropdown-contain">
          {option.map((option) => (
            <div
              className="dropdown-item p-[10px] cursor-pointer "
              onClick={(e) => {
                setSelected(option);
                SetIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Syllabusdropdown;
