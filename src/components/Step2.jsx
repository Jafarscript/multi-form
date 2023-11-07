import React, { useEffect, useState } from "react";

const Step2 = ({ setStep, step, data, setData }) => {
  const [change, setChange] = useState("monthly");
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // Update the "prefer" field in the selected state based on the "change" value
    setSelected((prevSelected) => ({
      ...prevSelected,
      prefer: change === "monthly" ? prevSelected.monthly : prevSelected.yearly,
    }));
  }, [change, setSelected]);

  // console.log(selected);

  const tooglePlan = () => {
    if (change === "monthly") {
      setChange("yearly");
    } else {
      setChange("monthly");
    }
  };

  const nextPage = () => {
    setStep(step + 1)
    // setData({...data, select: selected})
    // if(data.select){
    //   console.log(data)
    //   // setStep(step++)
    // }else{
    //   console.log('wrong')
    // }
  }

  return (
    <div className="h-[100%] flex flex-col justify-between">
      <main>
      <h1 className="font-extrabold text-marine-blue text-3xl">
        Select your plan
      </h1>
      <h3 className="font-thin text-cool-gray">
        You have the option of monthly or yearly billing
      </h3>
      <section className="flex flex-col mt-10 gap-10">
        <div className="flex gap-5 w-[56vh]">
          {data.plan.map((plan) => (
            <div
              className={`flex flex-col  flex-1 p-3 border-2  rounded-md hover:border-pastel-blue ${
                selected && selected.id === plan.id ? "border-pastel-blue" : ""
              }`}
              key={plan.id}
              onClick={() =>
                  setSelected({
                    ...plan,
                    prefer: change === "monthly" ? plan.monthly : plan.yearly,
                  })
              }
            >
              <p
                className="w-10 h-10"
                style={{ backgroundImage: `url(${plan.icon})` }}
              ></p>
              <h5 className="mt-11 text-marine-blue capitalize">
                {plan.planName}
              </h5>
              <h6 className="text-cool-gray mb-1">
                ${change ? plan.monthly + `${"/mo"}` : plan.yearly + `${"/yr"}`}
              </h6>
              {change ? (
                ""
              ) : (
                <h6 className="text-marine-blue text-[12px]">2 months free</h6>
              )}
            </div>
          ))}
        </div>
        <div className="bg-light-gray w-full flex justify-center gap-3 py-3 rounded-lg items-center">
          Monthly
          <div
            className={`w-9 h-5 px-[2px] bg-marine-blue rounded-xl flex items-center cursor-pointer ${
              change === "monthly" ? "only:justify-start" : "justify-end"
            } transition-all`}
            onClick={() => tooglePlan()}
          >
            <p className="w-4 h-4 bg-lol-white rounded-lg transition-all"></p>
          </div>
          Yearly
        </div>
      </section>
      </main>
      <div className="flex w-full justify-between flex-row mb-5">
        <button
          type="button"
          className="  text-cool-gray rounded-lg cursor-pointer"
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </button>
        <button
          type="button"
          className=" px-8 py-3 bg-marine-blue text-lol-white rounded-lg cursor-pointer"
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
