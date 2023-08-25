import React, { useState } from "react";
import Syllabusdropdown from "./Syllabusdropdown";
import BCASyllbus from "./BCASyllbus";

const Syllabus = () => {
  const [selected, setSelected] = useState("BCA ");
  return (
    <>
      <div class="flex justify-between py-10 px-6 md:px-10 lg:px-20 ">
        <div className="flex items-center justify-start">
          <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
            Syllabus
          </h1>
        </div>

        {/*=================drop down====== */}

        <Syllabusdropdown selected={selected} setSelected={setSelected} />
      </div>

      {/*============================ Main title ==================== */}

      <div className="flex items-center justify-center bg-[#0096F1] py-5">
        <h1 className="text-white text-[20px] font-bold italic-not">
          BCA Syllabus
        </h1>
      </div>

      {/*========================================BCA syllabus================= */}

      <BCASyllbus />
    </>
  );
};

export default Syllabus;
