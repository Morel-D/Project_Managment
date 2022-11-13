import Navbar from "./components/navbar";
import Dasboard from "./pages/Dasboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import Sigup from "./pages/Signup";
import Login from "./pages/Login";
import { ueAuthContext, useAuthContext } from "../src/hooks/useAuthContext";

function App() {

  const { user } = useAuthContext();

  return (
    <BrowserRouter>
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="content">
          <Routes>
            <Route path="/" element={user ? <Dasboard /> : <Navigate to= "/Login" /> } />
            
            <Route path="/Signup" element={!user ? <Sigup /> : <Navigate to= "/" />} />
            <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" /> } />

          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
