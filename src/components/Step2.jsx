import React, { useState } from "react";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";


const Step2 = ({ setStep, step }) => {
  const [change, setChange] = useState(true);

  const handleClick = () => {
    setChange(!change)
   
    // if(change === 'monthly'){
    //   setChange('yearly')
    //   console.log(change)
    // }else{
    //   setChange('monthly')
    //   console.log(change)
    // }

  }
  return (
    <div>
      <h1 className="font-extrabold text-marine-blue text-3xl">
        Select your plan
      </h1>
      <h3 className="font-thin text-cool-gray">
        You have the option of monthly or yearly billing
      </h3>
      <section className="flex flex-col mt-14 gap-10">
        <div className="flex gap-5 w-[56vh]">
          <div className="flex flex-col  flex-1 p-3 border  rounded-md">
            <p className="w-10 h-10" style={{backgroundImage: `url(${arcade})`}}></p>
            <h5 className="mt-11 text-marine-blue">Arcade</h5>
            <h6 className="text-cool-gray mb-1">{change ? '$9/mo' : '$90/yr'}</h6>
            {change ? "" : <h6 className="text-marine-blue text-[12px]">2 months free</h6>}
          </div>
          <div className="flex flex-col  flex-1 p-3 border  rounded-md" >
            <p className="w-10 h-10" style={{backgroundImage: `url(${advanced})`}}></p>
            <h5 className="mt-11 text-marine-blue">Advanced</h5>
            <h6 className="text-cool-gray mb-1">{change ? '$12/mo' : '$120/yr'}</h6>
            {change ? "" : <h6 className="text-marine-blue text-[12px]">2 months free</h6>}
          </div>
          <div className="flex flex-col  flex-1 p-3 border  rounded-md">
            <p className="w-10 h-10" style={{backgroundImage: `url(${pro})`}}></p>
            <h5 className="mt-11 text-marine-blue">Pro</h5>
            <h6 className="text-cool-gray mb-1">{change ? '$15/mo' : '$150/yr'}</h6>
            {change ? "" : <h6 className="text-marine-blue text-[12px]">2 months free</h6>}
          </div>
        </div>
        <div className="bg-light-gray w-full flex justify-center gap-3 py-3 rounded-lg items-center">
          Monthly
          <div className={`w-9 h-5 px-[2px] bg-marine-blue rounded-xl flex items-center cursor-pointer ${change ? 'only:justify-start' : 'justify-end'} transition-all`} onClick={() => handleClick()}><p className="w-4 h-4 bg-lol-white rounded-lg transition-all"></p></div>
          Yearly
        </div>
      </section>
      <div className="flex w-full justify-between flex-row pt-28 pb-5">
        <button
          className="px-8 py-3  text-cool-gray rounded-lg cursor-pointer"
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

export default Step2;

// ${change === 'monthly' ? 'only:justify-self-start' : 'only:justify-self-end'}