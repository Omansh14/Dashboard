import React from "react";
import MiniCard from "./MiniCard";
import Dollar from "../assets/Dollar.png"
import basket from "../assets/basket.png"
import note from "../assets/note.png"
import wallet from "../assets/wallet.png"
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import Table from "./Table";

const MainComponent = () => {
  const miniCardItems = [
    {
      icon: Dollar,
      title: "Earning",
      amount: "198k",
      percent: "37.8%",
      positive: true,
    },
    {
      icon: note,
      title: "Orders",
      amount: "2.4k",
      percent: "2%",
      positive: false,
    },
    {
      icon: wallet,
      title: "Balance",
      amount: "2.4k",
      percent: "2%",
      positive: false,
    },
    {
      icon: basket,
      title: "Total Sales",
      amount: "89k",
      percent: "11%",
      positive: true,
    },
  ];
  return (
    <div className="lg:w-5/6 p-6 bg-gray-100 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold mb-4">Hello Shahrukh,</h2>
        <input type="text" placeholder="Search..." className="p-2 rounded-md" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-5">
        {miniCardItems.map((item, idx) => (
            <MiniCard key={idx} cardDetails={item} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <BarGraph/>
            <PieChart/>
      </div>
      <div className="w-full">
            <Table/>
      </div>
    </div>
  );
};

export default MainComponent;
