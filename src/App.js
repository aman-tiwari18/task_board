import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" w-full h-full bg-background">
      <Navbar />
      <div className="px-10 ">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
