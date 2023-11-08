import React from "react";

const Summary = ({ step, setStep }) => {
  return (
    <div className="h-[100%] flex flex-col justify-between">
      <main>
        <h1 className="font-extrabold text-marine-blue text-3xl">
          Finishing Up
        </h1>
        <h3 className="font-thin text-cool-gray">
          Double-check everything looks OK before confirming.
        </h3>
        <section className="flex flex-col  w-[56vh] mt-10">
          <div className="bg-gray-100 p-5 gap-4 flex flex-col rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="flex flex-col items-start text-marine-blue text-sm font-bold">
                Arcade (Monthly){" "}
                <button
                  type="button"
                  className="text-sm cursor-pointer font-thin hover:text-purplish-blue hover:underline"
                  onClick={() => setStep(1)}
                >
                  Change
                </button>
              </h4>
              <h4 className="text-marine-blue text-sm font-bold">
                $9/mo
              </h4>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <h4 className="text-xs text-cool-gray">Online Service</h4>
              <p className="text-sm">+$1/mo</p>
            </div>
            <div className="flex justify-between items-center text-sm">
            <h4 className="text-xs text-cool-gray">Larger Storage</h4>
            <p className="text-sm">+$2/mo</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-5">
            <h3 className="text-sm text-cool-gray">Total (per month)</h3>
            <p className="text-purplish-blue font-bold">+$12/mo</p>
          </div>
        </section>
      </main>
      <div className="flex w-full flex-row  pb-5 self-end justify-between">
        <button
          className="px-8 py-3  text-cool-gray rounded-lg hover:text-marine-blue cursor-pointer"
          onClick={() => setStep(step - 1)}
          type="button"
        >
          Go Back
        </button>
        <button
          className=" px-8 py-3 bg-purplish-blue text-lol-white rounded-lg cursor-pointer hover:opacity-70"
          type="button"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
