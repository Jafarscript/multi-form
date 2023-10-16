import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App bg-magnolia h-[100vh] flex justify-center align-middle">
      <form className='bg-lol-white flex align-middle justify-center'>
        <Sidebar />
      </form>
    </div>
  );
}

export default App;
