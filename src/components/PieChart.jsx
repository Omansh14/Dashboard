import React from "react";
import piechart from "../assets/piechart.png";

const PieChart = () => {
  return (
    <div className="self-start bg-white p-3 rounded-lg shadow-md flex flex-col gap-5 w-full sm:w-1/3">
      <div className="p-2 w-full mb-5">
        <h2 className="text-lg font-bold text-black">Customers</h2>
        <h3 className="text-xs text-gray-600">Customers that buy products</h3>
      </div>
      <div className="flex justify-center rounded-full">
      <img src={piechart} alt="pie-chart"/>
      </div>
      
    </div>
  );
};

export default PieChart;
