import React from "react";
import { BiChevronDown } from "react-icons/bi";

const BarGraph = () => {
  const monthsData = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="bg-white py-3 px-2 rounded-lg shadow-md flex flex-col justify-between gap-5 w-full sm:w-2/3 overflow-x-auto">
      <div className="flex justify-between items-center p-2 w-full">
        <div>
          <h2 className="text-lg font-bold text-black">Overview</h2>
          <h3 className="text-xs text-gray-600">Monthly earning</h3>
        </div>
        <div>
          <div className="bg-gray-200 rounded-md flex gap-1 text-gray-600 items-center px-2 py-1 font-semibold">
            <span>Quaterly</span> <BiChevronDown />
          </div>
        </div>
      </div>
      <div className="flex items-end gap-5 px-3 h-fit">
        {monthsData.map((item, index) => (
          <div
            className="flex flex-col gap-4 justify-end items-center"
            key={index}
          >
            <div
              className={`w-11 ${index % 2 === 0 ? "h-28" : "h-36"} ${
                index === 7 ? "bg-purple-400" : "bg-gray-300"
              }  rounded-md`}
            ></div>
            <div className="text-sm text-gray-500">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarGraph;
