import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Registro from "./registro";
import Home from "./Home";
import Pagos from "./Pagos";
import Multas from "./Multas";
import Portones from "./Portones";

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
        {/* Ruta para el Pagos */}
        <Route path="/pagos" element={<Pagos />} />
        {/* Ruta para el Multas */}
        <Route path="/Multas" element={<Multas />} />
        {/* Ruta para el Portones */}
        <Route path="/Portones" element={<Portones />} />
      </Routes>
    </Router>
  );
};

export default App;