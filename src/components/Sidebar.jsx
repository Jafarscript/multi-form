import React from "react";
import sidebarBG from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = () => {
  return (
    <div
      className="pt-10 bg-no-repeat bg-cover bg-left-bottom min-h-[80vh] rounded-xl"
      style={{ backgroundImage: `url(${sidebarBG})` }}
    >
      <ul className="text-lol-white flex gap-5 flex-col pl-10 pr-32">
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-1 px-3">
            1
          </span>
          <p>
            <h6 className="text-light-gray font-[100] text-sm capitalize">
              Step 1
            </h6>
            <h3>YOUR INFO</h3>
          </p>
        </li>
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-1 px-3">
            2
          </span>
          <p>
            <h6 className="text-light-gray font-[100] text-sm capitalize">
              Step 2
            </h6>
            <h3>SELECT PLAN</h3>
          </p>
        </li>
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-1 px-3">
            3
          </span>

          <p>
            <h6 className="text-light-gray font-[100] text-sm capitalize">
              Step 3
            </h6>
            <h3>ADD-ONS</h3>
          </p>
        </li>
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-1 px-3">
            4
          </span>
          <p>
            <h6 className="text-light-gray font-[100] text-sm capitalize">
              Step 4
            </h6>
            <h3>SUMMARY</h3>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
