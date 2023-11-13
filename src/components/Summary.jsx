import React, {useState} from "react";

const Summary = ({ step, setStep, data }) => {

  const calculateTotal = () => {
    const planPrice = data.prefer === "monthly" ? data.selected.monthly : data.selected.yearly;
    const addonsTotal = data.selectedAddOns.reduce((total, addon) => total + addon.price, 0);
    const grandTotal = planPrice + addonsTotal;
    console.log(grandTotal)
    return grandTotal

  };

  return (
    <div className="h-[100%] flex flex-col justify-between">
      <main className="bg-lol-white p-6 lg:p-0 rounded-xl lg:rounded-none translate-y-[-12%] sm:translate-y-[-20%] md:translate-y-[-35%] lg:translate-y-0 lg:pb-0 pb-10 lg:pt-0 pt-8 lg:m-0 m-5">
        <h1 className="font-extrabold text-marine-blue lg:text-3xl text-2xl">
          Finishing Up
        </h1>
        <h3 className="font-thin text-cool-gray">
          Double-check everything looks OK before confirming.
        </h3>
        <section className="flex flex-col  mt-10">
          <div className="bg-gray-100 p-5 gap-4 flex flex-col rounded-lg">
            <div className="flex items-center justify-between">
              <h4 className="flex flex-col items-start text-marine-blue text-sm font-bold capitalize">
                {data.selected.planName} ({data.prefer}){" "}
                <button
                  type="button"
                  className="text-sm cursor-pointer font-thin hover:text-purplish-blue hover:underline"
                  onClick={() => setStep(1)}
                >
                  Change
                </button>
              </h4>
              <h4 className="text-marine-blue text-sm font-bold">
                $
                {data.prefer === "monthly"
                  ? data.selected.monthly + `${"/mo"}`
                  : data.selected.yearly + `${"/yr"}`}
              </h4>
            </div>
            <hr />

            {data.selectedAddOns.map((addon) => (
              <div className="flex justify-between items-center" key={addon.name}>
              <h4 className="text-xs text-cool-gray">{addon.name}</h4>
              <p className="text-sm">+${data.prefer === 'monthly' ? addon.price + `${"/mo"}` : addon.price + `${"/yr"}`}</p>
            </div>
            ))}
          </div>
          <div className="flex justify-between items-center p-5">
            <h3 className="text-sm text-cool-gray">Total (per month)</h3>
            <p className="text-purplish-blue font-bold">+${calculateTotal()}</p>
          </div>
        </section>
      </main>
      <div className="flex w-full flex-row  self-end justify-between lg:p-0 p-5 bg-lol-white lg:bg-none">
        <button
          className=" text-cool-gray rounded-lg hover:text-marine-blue cursor-pointer"
          onClick={() => setStep(step - 1)}
          type="button"
        >
          Go Back
        </button>
        <button
          className=" py-3 px-5 md:px-8 md:py-3 bg-purplish-blue text-lol-white rounded-md bg-purplish-bluecursor-pointer hover:opacity-70"
          type="button"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
