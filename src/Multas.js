import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Mensaje from "./Mensaje";
import './Multas.css';

const Multas = () => {
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [monto, setMonto] = useState("");
  const [motivo, setMotivo] = useState("");
  const [idDepartamento, setIdDepartamento] = useState(""); 
  const [multasData, setMultasData] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState(""); // "exito" o "error"

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idDepartamento || idDepartamento <= 0) {
      alert("El ID del departamento es obligatorio y debe ser válido.");
      return;
    }

    const montoNumerico = parseFloat(monto);

    if (isNaN(montoNumerico)) {
      alert("El monto debe ser un número válido.");
      return;
    }

    setLoading(true);
    setMensaje("");

    try {
      const response = await axios.post("http://localhost:3000/api/multas", {
        fecha,
        monto: montoNumerico,
        motivo,
        id_departamento: parseInt(idDepartamento),
      });

      setMultasData([...multasData, response.data]);
      setMensaje("Multa registrada correctamente!");
      setTipoMensaje("exito"); // Muestra el mensaje con la palomita verde

      // Hacer desaparecer el mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setMensaje("");
      }, 3000); // 3000ms = 3 segundos
    } catch (error) {
      console.error("Error al crear la multa:", error);
      setMensaje("Hubo un error al registrar la multa.");
      setTipoMensaje("error");
      setTimeout(() => {
        setMensaje("");
      }, 3000); // 3000ms = 3 segundos
      
    } finally {
      setLoading(false);
    }

    setMonto("");
    setMotivo("");
    setIdDepartamento("");
  };

  return (
    <div className="container">
      <h1 className="title">REGISTROS DE MULTAS</h1>

      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="input"
        />

        <label htmlFor="monto">Monto (en pesos):</label>
        <input
          type="number"
          id="monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="$"
          className="input"
        />

        <label htmlFor="motivo">Motivo de la Multa:</label>
        <textarea
          id="motivo"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          placeholder="Motivo de la multa"
          className="textarea"
        />
        
        <label htmlFor="idDepartamento">ID del Departamento:</label>
        <input
          type="number"
          id="idDepartamento"
          value={idDepartamento}
          onChange={(e) => setIdDepartamento(e.target.value)}
          placeholder="ID del Departamento"
          className="input"
        />

        <button type="submit" className="button">
          Registrar Multa
        </button>
      </form>

      <Loading loading={loading} />
      
      {!loading && <Mensaje mensaje={mensaje} tipo={tipoMensaje} />}
    </div>
  );
};

export default Multas;
