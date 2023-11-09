import React from "react";
// import sidebarBG from "../assets/images/bg-sidebar-desktop.svg";

const Sidebar = ({ step }) => {
  return (
    <div
      className="pt-10  w-full lg:w-[36vh] h-[20vh] lg:h-auto bg-no-repeat bg-cover bg-bottom lg:bg-left-bottom rounded-none sidebar"
    >
      <ul className="text-lol-white flex gap-5 lg:flex-col justify-center lg:justify-stretch lg:pl-10">
        <li className="flex gap-5 items-center">
          <span
            className={`border rounded-[50%] border-solid border-white py-1 px-3 ${
              step === 0 ? "bg-light-blue text-black" : ""
            }`}
          >
            1
          </span>
          <span className="lg:block hidden">
            <h6 className="text-light-gray font-[100] text-sm uppercase">
              Step 1
            </h6>
            <h3>YOUR INFO</h3>
          </span>
        </li>
        <li className="flex gap-5 items-center">
          <span
            className={`border rounded-[50%] border-solid border-white py-1 px-3 ${
              step === 1 ? "bg-light-blue text-black" : ""
            }`}
          >
            2
          </span>
          <span className="lg:block hidden">
            <h6 className="text-light-gray font-[100] text-sm uppercase">
              Step 2
            </h6>
            <h3>SELECT PLAN</h3>
          </span>
        </li>
        <li className="flex gap-5 items-center">
          <span
            className={`border rounded-[50%] border-solid border-white py-1 px-3 ${
              step === 2 ? "bg-light-blue text-black " : ""
            }`}
          >
            3
          </span>

          <span className="lg:block hidden">
            <h6 className="text-light-gray font-[100] text-sm uppercase">
              Step 3
            </h6>
            <h3>ADD-ONS</h3>
          </span>
        </li>
        <li className="flex gap-5 items-center">
          <span
            className={`border rounded-[50%] border-solid border-white py-1 px-3 ${
              step === 3 ? "bg-light-blue text-black" : ""
            }`}
          >
            4
          </span>
          <span className="lg:block hidden">
            <h6 className="text-light-gray font-[100] text-sm uppercase">
              Step 4
            </h6>
            <h3>SUMMARY</h3>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
