import React from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

const MiniCard = ({cardDetails}) => {
  const {icon, title, amount, percent, positive} = cardDetails;
  return (
    <div>
      <div className="bg-white py-3 px-1 rounded-lg shadow-md flex items-center justify-around gap-4">
        <div className=""><img src={icon}/></div>
        <div>
          <div className="text-xs text-gray-600">{title}</div>
          <div className="text-lg font-semibold">${amount}</div>
          <div className={`flex gap-0.5 text-xs ${positive ? 'text-green-600' : 'text-red-600'} font-semibold`}>
           {positive ? <BsArrowUpShort size={18}/> : <BsArrowDownShort size={18} />} {`${percent} this month`}</div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
