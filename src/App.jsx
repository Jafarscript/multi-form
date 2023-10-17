import "./App.css";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";

function App() {
  return (

   <div className="App bg-magnolia flex justify-center items-center min-h-[100vh] font-[Ubuntu]">
      <section className="p-5 bg-lol-white rounded-xl flex  overflow-hidden">
        <Sidebar />
        <form className="px-20 pt-11">
          <Step1 />
        </form>
      </section>
    </div>
  );
}

export default App;
