import React from 'react'

const Summary = ({step, setStep}) => {
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
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Summary