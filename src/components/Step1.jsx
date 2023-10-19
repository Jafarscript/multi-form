import React from "react";

const Step1 = ({step, setStep}) => {
  return (
    <div>
      <h1 className="font-extrabold text-marine-blue text-3xl">
        Personal Info
      </h1>
      <h3 className="font-thin text-cool-gray">
        Please provide your name, email address and phone number.
      </h3>
      <section className="flex flex-col mt-14 gap-10">
        <label>
          <h6 className="text-marine-blue text-sm mb-1">Name</h6>
          <input
            type="text"
            placeholder="e.g.Taoheed Bald"
            className="border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue"
          />
        </label>
        <label>
          <h6 className="text-marine-blue text-sm mb-1">Email Address</h6>
          <input
            type="email"
            placeholder="e.g.taoheedisbald@baldee.com"
            className="border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue"
          />
        </label>
        <label>
          <h6 className="text-marine-blue text-sm mb-1">Phone Number</h6>
          <input
            type="tel"
            placeholder="e.g+ 1 234 4567 890"
            className="border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue"
          />
        </label>
      </section>
      <div className="flex w-full flex-col pt-28 pb-5">
        <button className="self-end px-8 py-3 bg-marine-blue text-lol-white rounded-lg" onClick={() => setStep(step + 1)}>
            Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1;
