import React from "react";
import "./Mensaje.css"; // Estilos para el mensaje

const Mensaje = ({ mensaje, tipo }) => {
  if (!mensaje) return null; // No mostrar nada si no hay mensaje

  return (
    <div className={`mensaje ${tipo === "exito" ? "exito" : "error"}`}>
      {tipo === "exito" ? (
        <>
          ✅ <span>ÉXITO</span>
        </>
      ) : (
        <>
          ❌ <span>{mensaje}</span>
        </>
      )}
    </div>
  );
};

export default Mensaje;
