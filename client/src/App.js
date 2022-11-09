import Navbar from "./components/navbar";
import Dasboard from "./pages/Dasboard";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Sigup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
          <Routes>
            <Route path="/" element={<Dasboard />} />
            
            <Route path="/Signup" element={<Sigup />} />
            <Route path="/Login" element={<Login />} />

          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
