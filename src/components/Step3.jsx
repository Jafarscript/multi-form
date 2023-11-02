import React from "react";

const Step3 = ({ step, setStep }) => {
  return (
    <div>
      <h1 className="font-extrabold text-marine-blue text-3xl">Pick add-ons</h1>
      <h3 className="font-thin text-cool-gray">
        Add-ons helps enhance your gaming experience
      </h3>

      <div className="flex w-full flex-row pt-28 pb-5">
        <button
          className="px-8 py-3  text-cool-gray rounded-lg"
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </button>
        <button
          className=" px-8 py-3 bg-purplish-blue text-lol-white rounded-lg"
          onClick={() => setStep(step + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
