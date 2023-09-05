import React from "react";
import { navLinks } from "./data/data";

const Navbar2 = () => {
  return (
    <>
      <nav className="py-2">
        <div className="flex gap-x-10 bg-[#0096F1] px-5 items-center justify-center h-[40px]">
          {navLinks.map((link, index) => {
            return (
              <ul>
                <a className="" href={link.path}>
                  <li
                    className="text-[16px] not-italic font-medium leading-normal text-[#FFFFFF]"
                    key={index}
                  >
                    {link.name}
                  </li>
                </a>
              </ul>
            );
          })}

          {/*=====================================search ==================== */}

          <div className="relative">
            <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M13.6349 9.75535C14.1383 8.29386 14.0778 6.70332 13.4647 5.2823C12.8515 3.86128 11.728 2.7075 10.3049 2.03756C8.88184 1.36762 7.25711 1.22758 5.73574 1.64373C4.21436 2.05989 2.90095 3.00362 2.04206 4.29777C1.18318 5.59191 0.837875 7.14748 1.07098 8.67245C1.30409 10.1974 2.09957 11.5869 3.3081 12.5801C4.51663 13.5733 6.0551 14.1019 7.63471 14.0667C9.21431 14.0315 10.7264 13.4348 11.8872 12.3888"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9459 12.4527L16 16.4088"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-[224px] h-[32px] p-2 pr-12 text-[15px] text-black not-italic font-medium border border-[#999999] bg-[#FFF] placeholder-[#00000066]/40 focus:outline-0"
              placeholder="Search Here"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
