import "./App.css";
import Mainsection from "./Components/Mainsection";
import Slidebar from "./Components/Slidebar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="dashboard">
          <Slidebar />
          <Mainsection />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
