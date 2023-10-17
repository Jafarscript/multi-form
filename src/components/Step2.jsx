import React from "react";

const Step2 = ({ setStep, step }) => {
  return (
    <div>
      <div className="flex w-full flex-row pt-28 pb-5">
        <button
          className="px-8 py-3  text-cool-gray rounded-lg"
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </button>
        <button
          className=" px-8 py-3 bg-marine-blue text-lol-white rounded-lg"
          onClick={() => setStep(step + 1)}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
