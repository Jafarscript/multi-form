import React from "react";
import success from "../assets/images/icon-thank-you.svg";

const Final = () => {
  return (
    <div className="h-[100%] flex flex-row items-center justify-center">
      <main className="bg-lol-white p-6 lg:p-0 rounded-xl translate-y-[-15%] lg:rounded-none sm:translate-y-[-20%] md:translate-y-[-35%] lg:translate-y-0 lg:pb-0 pb-10 lg:pt-0 pt-8 lg:m-0 m-5 flex flex-col items-center justify-center gap-4">
        <p
          className="h-20 w-20"
          style={{ backgroundImage: `url(${success})` }}
        ></p>
        <h1 className="text-marine-blue text-2xl font-bold">Thank you!</h1>
        <h3 className="text-cool-gray text-center font-thin">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</h3>
      </main>
    </div>
  );
};

export default Final;
