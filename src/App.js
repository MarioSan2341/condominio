import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Registro from "./registro";
import Home from "./Home";
import Pagos from "./Pagos";
import Multas from "./Multas";
import Portones from "./Portones";
import Notificaciones from "./Notificaciones";
import Admin from "./Admin";
import Pago from "./Pago";

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
        <Route path="/Admin" element={<Admin />} />
        {/* Ruta para el Pagos */}
        <Route path="/pagos" element={<Pagos />} />
        {/* Ruta para el Multas */}
        <Route path="/Multas" element={<Multas />} />
        {/* Ruta para el Portones */}
        <Route path="/Portones" element={<Portones />} />

        <Route path="/Notificaciones" element={<Notificaciones />} />
        <Route path="/Pago" element={<Pago />} />
      </Routes>
    </Router>
  );
};

export default App;