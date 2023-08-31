import React from "react";

const Noticeboard = () => {
  return (
    <div>
      <div className="lg:px-12   pt-7 px-5 py-5">
      <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
            Notice Board
          </h1>
      </div>
     <div className=" flex flex-col md:flex-row">
      <div className="md:w-[75%]  lg:px-10  ">
        <div className="p-5   ">
          <div className=" rounded-lg shadow ">
            <table className="w-full">
              <thead className="bg-[#0096F1] px-3 text-[#fff] border-b-2 border-[#0096F1]">
                <tr>
                  <th className="w-24 p-2 text-[15px] md:text-[17px] not-italic font-inter font-medium leading-normal text-[#FFFFFF]  md:p-3 px-[1.1rem] md:px-5 text-md  tracking-wide text-left">
                    Date
                  </th>
                  <th className="w-24 p-2 text-[15px] md:text-[17px] not-italic font-inter font-medium leading-normal text-[#FFFFFF]   md:p-3 px-[1.1rem] md:px-0 text-md  tracking-wide text-left">
                    Occassion
                  </th>
                  <th className="w-32 p-2 text-[15px] md:text-[17px] not-italic font-inter font-medium leading-normal text-[#FFFFFF]   md:p-3 px-[1.1rem] md:px-0 text-md  tracking-wide text-left">
                    Preview
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="md:p-3 px-[1.1rem] md:px-4 text-[13px] md:text-[14px] text-gray-700 md:whitespace-nowrap">
                    <a href="#" className="font-bold text-[#0096F1] hover:underline">
                      21.08.2023
                    </a>
                  </td>
                  <td className="md:p-3 px-[1.1rem] md:px-0 text-[13px] md:text-[16px] font-inter text-black  md:whitespace-nowrap">
                    Reopen of Online Admission Portal
                  </td>
                  <td className="md:p-3 px-[0rem] md:px-0  text-[14px] text-gray-700 cursor-pointer whitespace-nowrap">
                    <span className="p-1.5 text-[13px] md:text-[12px] font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Click To View
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="md:p-3 px-[1.1rem] md:px-4 text-[13px] md:text-[14px] text-gray-700 md:whitespace-nowrap">
                    <a href="#" className="font-bold text-[#0096F1] hover:underline">
                      11.08.2023
                    </a>
                  </td>
                  <td className="md:p-3 px-[1.1rem] md:px-0 text-[13px] md:text-[16px] font-inter text-black md:whitespace-nowrap">
                  B.A. 3rd and 5th Semester Admission Notice
                  </td>
                  <td className="md:p-3 px-[0rem] md:px-0  text-[14px] text-gray-700 cursor-pointer whitespace-nowrap">
                    <span className="p-1.5 text-[13px] md:text-[12px] font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Click To View
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="md:p-3 px-[1.1rem] md:px-4 text-[13px] md:text-[14px] text-gray-700 md:whitespace-nowrap">
                    <a href="#" className="font-bold text-[#0096F1] hover:underline">
                      08.08.2023
                    </a>
                  </td>
                  <td className="md:p-3 px-[1.1rem] md:px-0 text-[13px] md:text-[16px] font-inter text-black md:whitespace-nowrap">
                    Reopening of Online Admission Portal
                  </td>
                  <td className="md:p-3 px-[0rem] md:px-0  text-[14px] text-gray-700 cursor-pointer whitespace-nowrap">
                    <span className="p-1.5 text-[13px] md:text-[12px] font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Click To View
                    </span>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="md:p-3 px-[1.1rem] md:px-4 text-[13px] md:text-[14px] text-gray-700 md:whitespace-nowrap">
                    <a href="#" className="font-bold text-[#0096F1] hover:underline">
                      03.08.2023
                    </a>
                  </td>
                  <td className="md:p-3 px-[1.1rem] md:px-0 text-[13px] md:text-[16px] font-inter text-black md:whitespace-nowrap">
                    Review Mark sheet distribution Notice
                  </td>
                  <td className="md:p-3 px-[0rem] md:px-0  text-[14px] text-gray-700 cursor-pointer whitespace-nowrap">
                    <span className="p-1.5 text-[13px] md:text-[12px] font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Click To View
                    </span>
                  </td>
                </tr>
                 <tr className="bg-white">
                  <td className="md:p-3 px-[1.1rem] md:px-4 text-[13px] md:text-[14px] text-gray-700 md:whitespace-nowrap">
                    <a href="#" className="font-bold text-[#0096F1] hover:underline">
                      31.07.2023
                    </a>
                  </td>
                  <td className="md:p-3 px-[1.1rem] md:px-0 text-[13px] md:text-[16px] font-inter text-black md:whitespace-nowrap">
Verification of Documents of 1st Semester                 
                  </td>
                  <td className="md:p-3 px-[0rem] md:px-0  text-[14px] text-gray-700 cursor-pointer whitespace-nowrap">
                    <span className="p-1.5 text-[13px] md:text-[12px] font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Click To View
                    </span>
                  </td>
                </tr>
                 <tr className="bg-white">
                  <td className="md:p-3 px-[1.1rem] md:px-4 text-[13px] md:text-[14px] text-gray-700 md:whitespace-nowrap">
                    <a href="#" className="font-bold text-[#0096F1] hover:underline">
                      28.07.2023
                    </a>
                  </td>
                  <td className="md:p-3 px-[1.1rem] md:px-0 text-[13px] md:text-[16px] font-inter text-black md:whitespace-nowrap">
                    MDC COURSE FOR 1ST SEMESTER
                  </td>
                  <td className="md:p-3 px-[0rem] md:px-0  text-[14px] text-gray-700 cursor-pointer whitespace-nowrap">
                    <span className="p-1.5 text-[13px] md:text-[12px] font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Click To View
                    </span>
                  </td>
                </tr>
                <tr className="bg-white ">
                  <td className="md:p-3 px-[1.1rem] md:px-4 text-[13px] md:text-[14px] text-gray-700 md:whitespace-nowrap">
                    <a href="#" className="font-bold text-[#0096F1] hover:underline">
                      21.07.2023
                    </a>
                  </td>
                  <td className="md:p-3 px-[1.1rem] md:px-0 text-[13px] md:text-[16px] font-inter text-black md:whitespace-nowrap">
                    Notice for 1st Phase E-Counselling
                  </td>
                  <td className="md:p-3 px-[0rem] md:px-0  text-[14px] text-gray-700 cursor-pointer whitespace-nowrap">
                    <span className="p-1.5 text-[13px] md:text-[12px] font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                      Click To View
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-0 ">
          <div className=" lg:w-72 md:w-48 w-72 rounded-lg shadow divide-y divide-gray-200  ">
                  <p className="bg-gray-100 font-inter p-2 md:p-3 px-[1.1rem] md:px-4 cursor-pointer text-md text-gray-700 md:whitespace-nowrap">
                    Governing Body
                  </p>
                  <p className="bg-gray-100 font-inter p-2 md:p-3 px-[1.1rem] md:px-4 cursor-pointer text-md text-gray-700 md:whitespace-nowrap">
                    Holiday List
                  </p>
                  <p className="bg-gray-100 font-inter p-2 md:p-3 px-[1.1rem] md:px-4 cursor-pointer text-md text-gray-700 md:whitespace-nowrap">
                    Faculty Profile
                  </p>
                  <p className="bg-gray-100 font-inter p-2 md:p-3 px-[1.1rem] md:px-4 cursor-pointer text-md text-gray-700 md:whitespace-nowrap">
                    College Activities
                  </p>
                  <p className="bg-gray-100 font-inter p-2 md:p-3 px-[1.1rem] md:px-4 cursor-pointer text-md text-gray-700 md:whitespace-nowrap">
                   General Notice Board
                  </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticeboard;
