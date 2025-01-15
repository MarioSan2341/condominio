import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Registro from "./registro";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para el login */}
        <Route path="/" element={<Login />} />
        {/* Ruta para el registro */}
        <Route path="/registro" element={<Registro />} />
        {/* Ruta para el Home */}
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
