import React, { useState } from "react";

const Step3 = ({ step, setStep }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const addon =[
    {
      id: 0,
      name: "Online Service",
      detail: "Access to multiplayer games",
      price: 1,
    },
    {
      id: 1,
      name: "Larger Storage",
      detail: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 2,
      name: "Customizable profile",
      detail: "Custom theme on your profile",
      price: 2,
    },
  ];

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id] || false,
    }));
  };
  // console.log(addon)

  return (
    <div className="h-[100%] flex flex-col justify-between">
      <main className="bg-lol-white p-6 lg:p-0 rounded-xl translate-y-[-12%] lg:rounded-none sm:translate-y-[-20%] md:translate-y-[-35%] lg:translate-y-0 lg:pb-0 pb-10 lg:pt-0 pt-8 lg:m-0 m-5">
        <h1 className="font-extrabold text-marine-blue lg:text-3xl text-2xl">
          Pick add-ons
        </h1>
        <h3 className="font-thin text-cool-gray">
          Add-ons helps enhance your gaming experience
        </h3>
        <section className="flex flex-col gap-4 mt-10">
          {addon.map((add) => (
            <label
              htmlFor={`checkbox_${add.id}`}
              key={add.id}
              className={`flex w-full justify-between items-center border-solid border px-5 py-4 rounded-lg peer-checked: ${
                checkedItems[add.id]
                  ? "border-purplish-blue"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center lg:gap-7 gap-3">
                <input
                  type="checkbox"
                  id={`checkbox_${add.id}`}
                  className="accent-purplish-blue"
                  onChange={() => handleCheckboxChange(add.id)}
                  checked={checkedItems[add.id]}
                />
                <div>
                  <h4 className="text-marine-blue text-sm font-medium">{add.name}</h4>
                  <h6 className="text-cool-gray font-thin text-[12.5px]">
                    {add.detail}
                  </h6>
                </div>
              </div>
              <span className="text-purplish-blue text-sm">
                +${add.price}/mo
              </span>
            </label>
          ))}
        </section>
      </main>

      <div className="flex w-full flex-row  justify-between self-end lg:p-0 p-5 bg-lol-white lg:bg-none">
        <button
          className="text-cool-gray hover:text-marine-blue cursor-pointer"
          onClick={() => setStep(step - 1)}
          type='button'
        >
          Go Back
        </button>
        <button
          className=" py-3 px-5 md:px-8 md:py-3 bg-marine-blue text-lol-white rounded-md cursor-pointer"
          onClick={() => setStep(step + 1)}
          type='button'
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
