import React, { useState } from "react";

const Step3 = ({ step, setStep }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [addon, setAddon] = useState([
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
  ]);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id] || false,
    }));
  };
  // console.log(addon)

  return (
    <div className="h-[100%] flex flex-col justify-between">
      <main>
        <h1 className="font-extrabold text-marine-blue text-3xl">
          Pick add-ons
        </h1>
        <h3 className="font-thin text-cool-gray">
          Add-ons helps enhance your gaming experience
        </h3>
        <section className="flex flex-col gap-6 w-[56vh] mt-10">
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
              <div className="flex items-center gap-7">
                <input
                  type="checkbox"
                  id={`checkbox_${add.id}`}
                  className="accent-purplish-blue"
                  onChange={() => handleCheckboxChange(add.id)}
                  checked={checkedItems[add.id]}
                />
                <div>
                  <h4 className="text-marine-blue font-medium">{add.name}</h4>
                  <h6 className="text-cool-gray font-thin text-sm">
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

      <div className="flex w-full flex-row  mb-5 justify-between self-end">
        <button
          className="text-cool-gray hover:text-marine-blue cursor-pointer"
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </button>
        <button
          className=" px-8 py-3 bg-marine-blue text-lol-white rounded-lg cursor-pointer"
          onClick={() => setStep(step + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
