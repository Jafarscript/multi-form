import React, { useState } from "react";

const Step2 = ({ setStep, step, data, setData }) => {
  const [planError, setPlanError] = useState("");

  const tooglePlan = () => {
    if (data.prefer === "monthly") {
      setData({ ...data, prefer: "yearly" });
    } else {
      setData({ ...data, prefer: "monthly" });
    }
  };

  const nextPage = () => {
    if (!data.selected) {
      setPlanError("Please select a plan");
    } else {
      setStep(step + 1);
    }
  };

  // console.log(data)

  return (
    <div className="h-[100%] flex flex-col justify-between">
      <main className="bg-lol-white p-6 lg:p-0 rounded-xl  translate-y-[-10%] lg:rounded-none sm:translate-y-[-20%] md:translate-y-[-35%] lg:translate-y-0 lg:pb-0 pb-10 lg:pt-0 pt-8 lg:m-0 m-5">
        <h1 className="font-extrabold text-marine-blue lg:text-3xl text-2xl">
          Select your plan
        </h1>
        <h3 className="font-thin text-cool-gray">
          You have the option of monthly or yearly billing
        </h3>
        {planError && <p className="text-red-600 font-medium">{planError}</p>}
        <section className="flex flex-col mt-10 gap-10">
          <div className="flex gap-5 flex-col lg:flex-row">
            {data.plan.map((plan) => (
              <div
                className={`flex flex-row gap-4 lg:flex-col  flex-1 p-3 border-2  rounded-md hover:border-pastel-blue ${
                  data.selected && data.selected.id === plan.id
                    ? "border-pastel-blue"
                    : ""
                }`}
                key={plan.id}
                onClick={() =>
                  setData({
                    ...data,
                    selected: plan,
                  })
                }
              >
                <p
                  className="w-10 h-10"
                  style={{ backgroundImage: `url(${plan.icon})` }}
                ></p>
                <div>
                  <h5 className="lg:mt-11 text-marine-blue capitalize">
                    {plan.planName}
                  </h5>
                  <h6 className="text-cool-gray mb-1">
                    $
                    {data.prefer === "monthly"
                      ? plan.monthly + `${"/mo"}`
                      : plan.yearly + `${"/yr"}`}
                  </h6>
                  {data.prefer === "monthly" ? (
                    ""
                  ) : (
                    <h6 className="text-marine-blue text-[12px]">
                      2 months free
                    </h6>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 w-full flex justify-center gap-3 py-3 rounded-lg items-center">
            Monthly
            <div
              className={`w-9 h-5 px-[2px] bg-marine-blue rounded-xl flex items-center cursor-pointer ${
                data.prefer === "monthly" ? "only:justify-start" : "justify-end"
              } transition-all`}
              onClick={() => tooglePlan()}
            >
              <p className="w-4 h-4 bg-lol-white rounded-lg transition-all"></p>
            </div>
            Yearly
          </div>
        </section>
      </main>
      <div className="flex w-full justify-between flex-row lg:p-0 p-5 bg-lol-white lg:bg-none">
        <button
          type="button"
          className="  text-cool-gray rounded-lg hover:text-marine-blue cursor-pointer"
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </button>
        <button
          type="button"
          className=" py-3 px-5 md:px-8 md:py-3 bg-marine-blue text-lol-white rounded-md cursor-pointer"
          onClick={nextPage}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;

// ${change === 'monthly' ? 'only:justify-self-start' : 'only:justify-self-end'}
