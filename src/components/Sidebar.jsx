import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-purplish-blue pt-10">
      <ul className="text-lol-white flex gap-5 flex-col ml-10">
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-2 px-4">
            1
          </span>
          <p>
            <h6>Step 1</h6>
            <h3>YOUR INFO</h3>
          </p>
        </li>
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-2 px-4">
            2
          </span>
          <p>
            <h6>Step 2</h6>
            <h3>SELECT PLAN</h3>
          </p>
        </li>
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-2 px-4">
            3
          </span>

          <p>
            <h6>Step 3</h6>
            <h3>ADD-ONS</h3>
          </p>
        </li>
        <li className="flex gap-5 items-center">
          <span className="border rounded-[50%] border-solid border-white py-2 px-4">
            4
          </span>
          <p>
            <h6>Step 4</h6>
            <h3>SUMMARY</h3>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
