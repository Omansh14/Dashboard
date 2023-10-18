import React from "react";
import { GoKey } from "react-icons/go";
import { PiCube } from "react-icons/pi";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import {
  TbUserSquareRounded,
  TbDiscount2,
  TbHexagonLetterO,
  TbUserCircle,
} from "react-icons/tb";
import { CiWallet } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";

const SidePanel = () => {
  const panelItems = [
    {
      title: "Dashboard",
      icon: GoKey,
    },
    { title: "Product", icon: PiCube },
    { title: "Customers", icon: TbUserSquareRounded },
    { title: "Income", icon: CiWallet },
    { title: "Promote", icon: TbDiscount2 },
    { title: "Help", icon: MdOutlineLiveHelp },
  ];
  return (
    <div className="lg:w-1/6 bg-blue-950 p-4 h-full relative">
      <div className="py-2 flex items-center gap-1">
        <TbHexagonLetterO color="white" size={28} />
        <h2 className="text-white text-2xl font-semibold my-4 font-serif">
          Dashboard
        </h2>
      </div>

      <ul className="flex flex-col gap-3">
        {panelItems.map(({ title, icon: Icon }, index) => (
          <div
            key={index}
            className={`text-white p-2 rounded-md ${
              index === 0 && "bg-blue-600"
            }  z-1 flex justify-between`}
          >
            <div className="flex items-center gap-2">
              <Icon size={18} />
              {title}
            </div>
            <BiChevronRight size={18} />
          </div>
        ))}
      </ul>
      <div className={`absolute bottom-5 right-2 left-2 text-white font-semibold text-lg p-2 rounded-md bg-white/20 z-1 justify-between items-center hidden lg:flex`}>
        <div>
          <div className="flex gap-2 items-center">
            <TbUserCircle size={32} />
            <div>
              Evana
              <h3 className="text-xs">Project Manager</h3>
            </div>
          </div>
        </div>
        <BiChevronDown size={18} />
      </div>
    </div>
  );
};

export default SidePanel;
