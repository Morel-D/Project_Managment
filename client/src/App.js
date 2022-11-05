import Navbar from "./components/navbar";
import Dasboard from "./pages/Dasboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
          <Routes>
            <Route path="/" element ={<Dasboard />} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
