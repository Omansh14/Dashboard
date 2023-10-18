import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

const Table = () => {
  const tableItems = [
    {
      name: "Abstract 3D",
      description: "This is amazing product",
      stock: "32 in stock",
      price: "$ 45.99",
      totalSales: "20",
    },
    {
      name: "Sarphens Illustration",
      description: "This product is high in demand",
      stock: "32 in stock",
      price: "$ 45.99",
      totalSales: "20",
    },
  ];
  return (
    <div className="bg-white py-3 px-2 rounded-lg shadow-md flex flex-col justify-between gap-5 w-full overflow-x-auto">
      <div className="flex p-2">
        <div className="w-2/3">
          <h2 className="text-lg font-bold text-black">Product Sell</h2>
        </div>
        <div className="w-1/3 flex gap-3 items-center relative">
          <CiSearch className="absolute left-1 text-gray-500" />
          <input
            type="text"
            placeholder="   Search"
            className="w-1/2 bg-gray-100 px-3 py-1 rounded-md"
          />
          <div className="w-2/5 px-3 py-1 bg-gray-200 text-gray-600 rounded-md flex justify-between items-center">
            Last 30 days
            <BiChevronDown />
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray-500 text-sm flex px-3 py-2 items-center">
          <div className=" w-2/3">Product Name</div>
          <div className="w-1/3 flex justify-center gap-1">
            <div className="w-1/3">Stock</div>
            <div className="w-1/3">Price</div>
            <div className="w-1/3">Total Sales</div>
          </div>
        </div>
        <hr />
        <div>
          {tableItems.map((item, index) => (
            <div className="text-gray-500 text-sm flex px-3 py-2 items-center mb-2" key={index}>
              <div className=" w-2/3">
                <div className="font-bold text-gray-800">{item.name}</div>
              <div>{item.description}</div>
              </div>
              <div className="w-1/3 flex justify-center gap-1">
                <div className="w-1/3">{item.stock}</div>
                <div className="w-1/3">{item.price}</div>
                <div className="w-1/3 flex px-5">{item.totalSales}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
