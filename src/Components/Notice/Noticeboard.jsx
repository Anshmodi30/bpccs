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
  ];
  return (
    <div className="px-10 lg:px-20 py-5 mb-4">
      <div className="">
        <h1 className="text-[#0096F1] text-[20px] lg:text-[32px] pl-5 font-bold leading-[46.34px] relative font-libre before:absolute before:bg-[#0096F1] before:w-1 before:h-12 before:top-0 before:left-0">
          Notice Board
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row lg:p-5 gap-5 py-5">
        <div className="overflow-x-auto md:w-[75%]">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-white bg-[#0096F1]">
              <tr>
                <th class="p-5 whitespace-nowrap">
                  <div class="font-semibold text-left">Date</div>
                </th>
                <th class="p-5 whitespace-nowrap">
                  <div class="font-semibold text-left">Occasion</div>
                </th>
                <th class="text-center p-5 whitespace-nowrap">
                  <div class="font-semibold">Preview</div>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-gray-100 bg-[#F5F5F5]">
              {TableData.map((item, index) => (
                <tr key={index}>
                  <td class="p-5 whitespace-nowrap">
                    <div class="">
                      <div class="font-medium text-[#0096F1]">{item.date}</div>
                    </div>
                  </td>
                  <td class="p-5 whitespace-nowrap">
                    <div class="text-left">{item.title}</div>
                  </td>
                  <td class="p-5 whitespace-nowrap">
                    <div class="font-medium text-[#ffa800] bg-[#ffa800]/20 cursor-pointer p-2 rounded-lg text-center hover:bg-[#ffa800] hover:text-[#fff] transition-all duration-300 ">
                      View More
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="">
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
