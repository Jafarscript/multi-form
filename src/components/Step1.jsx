import React, {useState} from "react";

const Step1 = ({step, setStep,data,setData}) => {
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const nextPage = () => {
    let isDataValid = true;

    if (!data.name) {
      setNameError('Please fill in the Name field.');
      isDataValid = false;
    } else if (!/^[A-Za-z\s-]+$/.test(data.name)) {
      setNameError('Name should only contain letters and spaces.');
      isDataValid = false;
    } else {
      setNameError('');
    }
  
    if (!data.phone) {
      setPhoneError('Please fill in the Phone field.');
      isDataValid = false;
    } else if (!/^[0-9+\s]+$/.test(data.phone)) {
      setPhoneError('Invalid phone number');
      isDataValid = false;
    } else {
      setPhoneError('');
    }
  
    if (!data.email) {
      setEmailError('Please fill in the Email field.');
      isDataValid = false;
    } else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
      setEmailError('Please enter a valid email address.');
      isDataValid = false;
    } else {
      setEmailError('');
    }
  
    if (isDataValid) {
      setStep(step + 1);
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
            className={`border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue ${nameError && 'border-red-600' }`}
            onChange={(e) => setData({...data, name: e.target.value})}
          />
        </label>
        <label>
          <div className="flex justify-between items-center">
          <h6 className="text-marine-blue text-sm mb-1">Email Address</h6>
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          </div>
          <input
            type="email"
            placeholder="e.g.taoheedisbald@baldee.com"
            className={`border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue ${emailError && 'border-red-600' }`}
            onChange={(e) => setData({...data, email: e.target.value})}
          />
        </label>
        <label>
          <div className="flex justify-between">
          <h6 className="text-marine-blue text-sm mb-1">Phone Number</h6>
          {phoneError && <p className="text-red-600 font-medium">{phoneError}</p>}
          </div>
          <input
            type="tel"
            placeholder="e.g+ 1 234 4567 890"
            className={`border-cool-gray border-solid w-full p-3 border rounded-lg focus:outline-none focus:border-purplish-blue ${phoneError && 'border-red-600' }`}
            onChange={(e) => setData({...data, phone: e.target.value})}
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
