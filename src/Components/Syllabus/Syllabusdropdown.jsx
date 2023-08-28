import React, { useState } from "react";

const Syllabusdropdown = ({ selected, setSelected }) => {
  const [isActive, SetIsActive] = useState(false);
  const option = [" BCA ", "MCA"];
  return (
    <div className="relative z-30 ">
      <div
        className="text-white text-[18px] px-8 py-2 md:px-10 lg:px-14 lg:text-[22px] bg-[#FFA800] text-left dropdown-btn rounded-[3px] flex items-center justify-center gap-x-10"
        onClick={(e) => SetIsActive(!isActive)}
      >
        <p className="">{selected}</p>
        {/* ===========================icon====================== */}
        <div className="relative">
          <svg
            width="29"
            height="24"
            viewBox="0 0 29 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
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
