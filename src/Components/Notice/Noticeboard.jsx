import React from "react";

const Noticeboard = () => {
  const TableData = [
    {
      date: "21.08.2023",
      title: "Reopen of Online Admission Portal",
    },
    {
      date: "15.08.2023",
      title: "B.A. 3rd and 5th Semester Admission Notice",
    },
    {
      date: "10.08.2023",
      title: "Review Mark sheet distribution Notice",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
    {
      date: "1.08.2023",
      title: "Verification of Documents of 1st Semester",
    },
  ];
  return (
    <div className="px-10 lg:px-20 py-5 mb-4">
      <div className="">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Notice Board
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row lg:p-5 gap-5 py-5">
        <div className="w-full max-h-[450px] h-fit overflow-y-scroll">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
              <tr className="text-xs font-semibold uppercase text-white bg-[#0096F1] px-3 sticky top-0 z-20 max-h-[70px] h-[70px]">
                <th className="p-5 whitespace-nowrap">
                  <p className="font-semibold text-left">Date</p>
                </th>
                <th className="p-5 whitespace-nowrap">
                  <p className="font-semibold text-left">Occasion</p>
                </th>
                <th className="text-center p-5 whitespace-nowrap">
                  <p className="font-semibold">Preview</p>
                </th>
              </tr>
            </thead>
            <tbody id="contain">
              {TableData.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#F5F5F5] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="p-5 whitespace-nowrap">
                    <div className="">
                      <div className="font-medium text-[#0096F1]">
                        {item.date}
                      </div>
                    </div>
                  </td>
                  <td className="p-5 whitespace-nowrap">
                    <div className="text-left">{item.title}</div>
                  </td>
                  <td className="p-5 whitespace-nowrap">
                    <div className="font-medium text-[#ffa800] bg-[#ffa800]/20 cursor-pointer p-2 rounded-lg text-center hover:bg-[#ffa800] hover:text-[#fff] transition-all duration-300 ">
                      View More
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="">
          <div className=" lg:w-72 md:w-48 w-72 rounded-lg shadow divide-y divide-gray-200">
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
