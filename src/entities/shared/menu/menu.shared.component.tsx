import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { TbNotes, TbList } from "react-icons/tb";
import { HiRectangleStack } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import MenuItem from "./menu.item.component";
import { RootState, AppDispatch } from "../../../store";
import { hideMenu } from "../../global-actions/application/action";

const Menu: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { MenuIsVisible } = useSelector((state: RootState) => state.global);

  const handleHideMenu = () => {
    dispatch(hideMenu());
  };

  return (
    <aside
      className={`fixed ${
        MenuIsVisible ? "" : "hidden"
      } lg:inline-block lg:relative w-full lg:w-[200px] h-full top-0 bg-black/50 z-10 lg:ml-7`}
    >
      <button
        onClick={handleHideMenu}
        className="text-white text-2xl absolute top-3 right-14 z-20 lg:hidden"
      >
        <AiOutlineCloseCircle />
      </button>
      <div className="w-[250px] lg:w-[200px] h-full z-10 bg-blue-800 relative">
        <div className="gap-4 pl-3 h-16 items-center hidden lg:flex">
          <HiRectangleStack className="text-2xl text-white" />
          <p className="text-white font-Roboto text-lg">INotes</p>
        </div>
        <nav>
          <ul className="grid gap-1">
            <li>
              <MenuItem isActive={location?.pathname === "/"} path="/">
                <TbList className=" text-2xl" />
                View Notes
              </MenuItem>
            </li>
            <li>
              <MenuItem isActive={location?.pathname === "/new"} path="/new">
                <TbNotes className=" text-2xl" />
                Create Note
              </MenuItem>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Menu;
