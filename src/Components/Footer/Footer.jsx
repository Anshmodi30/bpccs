import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-5 pt-5 mb-3">
        <div className="flex flex-col items-start px-5 lg:px-0 lg:flex-row lg:justify-around lg:items-start gap-y-5 lg:gap-x-10">
          <div className="flex flex-col lg:gap-y-7">
            <h2 className="text-[#0096F1] text-[18px] lg:text-[25px] font-semibold  ">
              Reach us
            </h2>
            <p className="text-[16px] lg:text-[20px] w-80">
              Kadi School Campus, Near Gh 6, Gate No 2, Sector 23, Gandhinagar
              382028
            </p>
          </div>
          <div className="flex flex-col lg:gap-y-7">
            <h2 className="text-[#0096F1] text-[18px] lg:text-[25px] font-semibold  ">
              Contact us
            </h2>
            <p className="text-[16px] lg:text-[20px]">+91 7096309000</p>
            <p className="text-[16px] lg:text-[20px]">+91 7096309000</p>
          </div>
          <div className="shadow-[0px_4px_24px_0px_rgba(0, 0, 0, 0.25)] flex items-center justify-center">
            <iframe
              className="lg:w-[500px] lg:h-[300px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4644.651116773529!2d72.65258837610958!3d23.24031720816582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b9bc02e8803%3A0x48d245a8f0271504!2sBholabhai%20Patel%20College%20of%20Computer%20Studies!5e1!3m2!1sen!2sin!4v1691815697136!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="py-1 text-white bg-[#0096F1] flex flex-col lg:flex-row items-center justify-between px-10 lg:items-center lg:justify-between gap-y-2">
        <p className="tracking-wider font-[500] text-[10px] lg:text-[16px]">
          2023 ©All rights Reserved by NPCCM
        </p>
        <div className="flex items-center justify-between gap-x-5">
          <p className="tracking-wider font-[600] text-[8px] lg:text-[15px] cursor-pointer">
            Terms and Conditions
          </p>
          <p className="tracking-wider font-[600] text-[8px] lg:text-[15px] cursor-pointer">
            Privacy Policy
          </p>
          <p className="tracking-wider font-[600] text-[8px] lg:text-[15px] cursor-pointer">
            Site Map
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
