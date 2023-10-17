import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Summary from "./components/Summary";

function App() {
  const [step, setStep] = useState(0)
  const conditionalComponent = () => {
    switch (step) {
      case 0 :
        return <Step1 setStep={setStep} step={step} />;
      case 1 :
        return <Step2 setStep={setStep} step={step}/>;
      case 2 :
        return <Step3 setStep={setStep} step={step}/>;
      case 3 :
        return <Summary setStep={setStep} step={step}/>;
      default:
        return <Step1 setStep={setStep} step={step}/>
    }
  }
  return (

   <div className="App bg-magnolia flex justify-center items-center min-h-[100vh] font-[Ubuntu]">
      <section className="p-5 bg-lol-white rounded-xl flex  overflow-hidden">
        <Sidebar step={step}/>
        <form className="px-20 pt-11">
         {conditionalComponent()}
        </form>
      </section>
    </div>
  );
}

export default App;
