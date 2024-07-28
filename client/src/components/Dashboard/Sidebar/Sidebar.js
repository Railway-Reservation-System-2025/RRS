import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarConstant } from "./Sidebar-constant";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="hidden md:flex flex-col justify-around w-[20%] mt-16 border bg-white border-b-neutral-200 fixed top-0 left-0 h-[95%] z-10 transition-all duration-500">
      <div className="px-6 -mt-7 flex flex-col gap-4">
        {sidebarConstant.map((element) => (
          <div
            key={element.name}
            onClick={() => handleItemClick(element.path)}
            className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer ${
              location.pathname === element.path ? "bg-gray-100" : ""
            } text-black hover:bg-gray-100 transition-all duration-500`}
          >
            <element.icon size={20} />
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
