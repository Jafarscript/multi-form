import React from 'react'

const Summary = ({step, setStep}) => {
  return (
    <div className="h-[100%] flex flex-col justify-between">
      <main>
      <h1 className="font-extrabold text-marine-blue text-3xl">
          Finishing Up
        </h1>
        <h3 className="font-thin text-cool-gray">
          Double-check everything looks OK before confirming.
        </h3>
      </main>
        <div className="flex w-full flex-row  pb-5 self-end justify-between">
        <button
          className="px-8 py-3  text-cool-gray rounded-lg hover:text-marine-blue cursor-pointer"
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </button>
        <button
          className=" px-8 py-3 bg-purplish-blue text-lol-white rounded-lg cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default Summary