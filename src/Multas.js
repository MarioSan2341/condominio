import React, { useState } from "react";
import axios from "axios";

// Elimina el estado de la multa del formulario, ya no es necesario capturarlo.

const Multas = () => {
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [monto, setMonto] = useState("");
  const [motivo, setMotivo] = useState("");
  const [idDepartamento, setIdDepartamento] = useState(""); // Cambié 'idUsuario' por 'idDepartamento'
  const [multasData, setMultasData] = useState([]);

  // Función para manejar el envío de la multa al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!idDepartamento || idDepartamento <= 0) {
      alert("El ID del departamento es obligatorio y debe ser válido.");
      return;
    }

    // Convierte el monto a número si es necesario
    const montoNumerico = parseFloat(monto);

    if (isNaN(montoNumerico)) {
      alert("El monto debe ser un número válido.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/multas", {
        fecha,
        monto: montoNumerico,  // Asegúrate de enviar un número
        motivo,
        id_departamento: parseInt(idDepartamento), // Cambié 'id_usuario' por 'id_departamento'
      });

      alert("Multa creada exitosamente");
      setMultasData([...multasData, response.data]); // Añadir la nueva multa al estado
    } catch (error) {
      console.error("Error al crear la multa:", error);
      alert("Hubo un error al crear la multa. " + error.response?.data?.error || "Intenta de nuevo.");
    }

    // Limpiar el formulario
    setMonto("");
    setMotivo("");
    setIdDepartamento(""); // Limpiar el campo idDepartamento
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>REGISTROS DE MULTAS</h1>

      {/* Formulario para registrar una nueva multa */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="fecha">Fecha:</label>
        <input
          type="date"
          id="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          style={styles.input}
        />

        <label htmlFor="monto">Monto (en pesos):</label>
        <input
          type="number"
          id="monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="$"
          style={styles.input}
        />

        <label htmlFor="motivo">Motivo de la Multa:</label>
        <textarea
          id="motivo"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          placeholder="Motivo de la multa"
          style={styles.textarea}
        />
        
        <label htmlFor="idDepartamento">ID del Departamento:</label>
        <input
         type="number"
         id="idDepartamento"
         value={idDepartamento}
         onChange={(e) => setIdDepartamento(e.target.value)}
         placeholder="ID del Departamento"
         style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Registrar Multa
        </button>
      </form>
      
    </div>
  );
};


const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fffaf0",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#ffa726",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.2s ease-in-out",
  },
  tableTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cell: {
    flex: 1,
    textAlign: "left",
    fontSize: "16px",
    color: "#333",
    padding: "0 10px",
  },
  cellHeader: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    fontSize: "16px",
    color: "#333",
    padding: "0 10px",
    backgroundColor: "#f4f4f4",
    borderBottom: "2px solid #ddd",
  },
};

export default Multas;
