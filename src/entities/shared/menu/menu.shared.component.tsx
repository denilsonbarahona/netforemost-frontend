import React from "react";
import { TbNotes } from "react-icons/tb";
import { HiRectangleStack } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MenuItem from "./menu.item.component";

const Menu = () => {
  return (
    <aside className="fixed hidden lg:inline-block lg:relative w-full lg:w-[200px] h-full top-0 bg-black/50 z-0 lg:ml-7">
      <button className="text-white text-2xl absolute top-3 right-3 z-20 lg:hidden">
        <AiOutlineCloseCircle />
      </button>
      <div className="w-[270px] lg:w-[200px] h-full z-10 bg-blue-800 relative">
        <div className="gap-4 pl-3 h-16 items-center hidden lg:flex">
          <HiRectangleStack className="text-2xl text-white" />
          <p className="text-white font-Roboto text-lg">INotes</p>
        </div>
        <nav>
          <ul className="grid gap-1">
            <li>
              <MenuItem isActive path="/">
                <TbNotes className=" text-2xl" />
                Create Note
              </MenuItem>
            </li>
            <li>
              <MenuItem isActive={false} path="/">
                <TbNotes className=" text-2xl" />
                View Notes
              </MenuItem>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Menu;
