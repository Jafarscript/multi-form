import React, {useState} from "react";

const Step1 = ({step, setStep,data,setData}) => {
  const [valid, setValid] = useState(true);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    console.log(regex.test(email))
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
      setData({...data, email: inputEmail})
      setValid(validateEmail(inputEmail));
  };

  const nextPage = () =>{
    if (!data.name) {
      setNameError('Please fill in the Name field.');
    } else if (!/^[A-Za-z\s]+$/.test(data.name)) {
      setNameError('Name should only contain letters and spaces.');
    } else {
      setNameError('');
    }
    if (data.email && data.name && data.phone) {
      setStep(step + 1)
    }
  }
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
          <div className="flex justify-between items-center">
          <h6 className="text-marine-blue text-sm mb-1">Name</h6>
          {nameError && <p className="text-red-600 font-medium">{nameError}</p>}
          </div>
          <input
            type="text"
            placeholder="e.g.Taoheed Bald"
            className="border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue"
            onChange={(e) => setData({...data, name: e.target.value})}
          />
        </label>
        <label>
          <div className="flex justify-between items-center">
          <h6 className="text-marine-blue text-sm mb-1">Email Address</h6>
          {!valid && <h6 className="text-red-600 font-medium">Invalid Email</h6>}
          </div>
          <input
            type="email"
            placeholder="e.g.taoheedisbald@baldee.com"
            className="border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <div className="flex justify-between">
          <h6 className="text-marine-blue text-sm mb-1">Phone Number</h6>
          {/* {!valid && <h6>Invalid Email</h6>} */}
          </div>
          <input
            type="tel"
            placeholder="e.g+ 1 234 4567 890"
            className="border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue"
          />
        </label>
      </section>
      <div className="flex w-full flex-col mt-28 mb-5">
        <button type='button' className="self-end px-8 py-3 bg-marine-blue text-lol-white rounded-lg" onClick={nextPage}>
            Next Step
        </button>
      </div>
    </div>
  );
};

export default Step1;
