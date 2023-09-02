import React, { useState } from "react";
import { FaSchool } from "react-icons/fa";
import { MdGolfCourse } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";

const Inquiry = () => {
  const [data, setData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    city: "",
    state: "",
    courseName: "",
    lastschoolName: "",
    writeInquiry: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData("");
    console.log(data);
  };

  const onClear = () => {
    setData("");
  };

  return (
    <>
      {/*==================================================desktop view ===================== */}

      <div className="hidden lg:block px-10 lg:px-20">
        <div className="flex items-center justify-start">
          <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
            Inquiry
          </h1>
        </div>
        {/*=======================================Inquiry form */}
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row items-center justify-center gap-x-20">
              <div className="flex flex-col w-1/3">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  tabIndex={1}
                  className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={data.state}
                  onChange={handleChange}
                  placeholder="State"
                  tabIndex={5}
                  className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-20">
              <div className="flex flex-col w-1/3">
                <input
                  type="text"
                  name="mobileNo"
                  id="mobileNo"
                  value={data.mobileNo}
                  onChange={handleChange}
                  placeholder="Mobile No."
                  tabIndex={2}
                  className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <input
                  type="text"
                  name="courseName"
                  id="courseName"
                  value={data.courseName}
                  onChange={handleChange}
                  placeholder="Course Name"
                  tabIndex={6}
                  className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-20">
              <div className="flex flex-col w-1/3">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  tabIndex={3}
                  placeholder="Email"
                  className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <input
                  type="text"
                  name="lastschoolName"
                  id="lastschoolName"
                  value={data.lastschoolName}
                  onChange={handleChange}
                  tabIndex={7}
                  placeholder="Last School Name"
                  className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-20">
              <div className="flex flex-col w-1/3">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={data.city}
                  placeholder="City"
                  onChange={handleChange}
                  tabIndex={4}
                  className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
              <div className="flex flex-col w-1/3">
                <textarea
                  type="text"
                  name="writeInquiry"
                  id="writeInquiry"
                  value={data.writeInquiry}
                  placeholder="Write Inquiry"
                  onChange={handleChange}
                  tabIndex={8}
                  className="font-Poppins resize-none text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border h-[45px] px-5 py-2 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
                />
              </div>
            </div>
          </div>
          {/*==================================submit and cancel button==================== */}

          <div className="flex items-center justify-center gap-x-5 pb-5 mt-10">
            <button
              type="reset"
              onClick={onClear}
              className=" font-Poppins text-[14px] not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#FFA800] text-[#FFA800] px-8 py-2.5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-[16px] font-Poppins not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#0096F1] text-[#FFF] bg-[#0096F1] px-8 py-2.5"
            >
              Submit
            </button>
          </div>
        </form>

        {/*==================================submit and cancel button==================== */}
      </div>

      {/*===================================================desktop end ======================= */}

      {/*====================================================Mobile view ========================== */}
      <div className=" block lg:hidden px-10 lg:px-20 ">
        <div className="flex items-center justify-start">
          <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
            Inquiry
          </h1>
        </div>

        {/*=======================================Inquiry form=============== */}
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col justify-around items-stretch my-5 gap-y-5">
            <div className="flex flex-col">
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={data.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                tabIndex={1}
                className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="mobileNo"
                id="mobileNo"
                value={data.mobileNo}
                onChange={handleChange}
                placeholder="Mobile No."
                tabIndex={2}
                className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                tabIndex={3}
                placeholder="Email"
                className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="city"
                id="city"
                value={data.city}
                placeholder="City"
                onChange={handleChange}
                tabIndex={4}
                className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="state"
                id="state"
                value={data.state}
                onChange={handleChange}
                placeholder="State"
                tabIndex={5}
                className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="courseName"
                id="courseName"
                value={data.courseName}
                onChange={handleChange}
                placeholder="Course Name"
                tabIndex={6}
                className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                name="lastschoolName"
                id="lastschoolName"
                value={data.lastschoolName}
                onChange={handleChange}
                tabIndex={7}
                placeholder="Last School Name"
                className="font-Poppins text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border p-2 px-5 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                type="text"
                name="writeInquiry"
                id="writeInquiry"
                value={data.writeInquiry}
                placeholder="Write Inquiry"
                onChange={handleChange}
                tabIndex={8}
                className="font-Poppins resize-none text-[16px] not-italic font-normal leading-[157.833%] tracking-[0.48px] border h-[45px] px-5 py-2 justify-center bg-[#FFF] rounded-[5px] border-[#B7B7B7]"
              />
            </div>
          </div>

          {/*==================================submit and cancel button==================== */}

          <div className="flex items-center justify-center space-x-5 pb-5">
            <button
              type="reset"
              onClick={onClear}
              className=" font-Poppins text-[14px] not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#FFA800] text-[#FFA800] px-8 py-2.5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-[16px] font-Poppins not-italic font-semibold leading-[93.833%] rounded-[4px] border border-[#0096F1] text-[#FFF] bg-[#0096F1] px-8 py-2.5"
            >
              Submit
            </button>
          </div>
        </form>

        {/*==================================submit and cancel button==================== */}
      </div>

      {/*====================================================Mobile view end======================== */}
    </>
  );
};

export default Inquiry;
