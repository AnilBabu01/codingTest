import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Addproduct from "./components/product/Addproduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={<Addproduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
