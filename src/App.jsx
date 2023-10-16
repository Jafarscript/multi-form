import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App bg-magnolia flex justify-center items-center min-h-[80vh]">
      <section>
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
