import React, { useState, useEffect } from "react";
import axios from "axios";

const Multas = () => {
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]);
  const [monto, setMonto] = useState("");
  const [motivo, setMotivo] = useState("");
  const [estado] = useState("Pendiente");
  const [multasData, setMultasData] = useState([]);

  // Cargar multas al montar el componente
  useEffect(() => {
    const fetchMultas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/multas");
        setMultasData(response.data); // Actualiza el estado con los datos de la base
      } catch (error) {
        console.error("Error al cargar las multas:", error);
        alert("Error al cargar las multas");
      }
    };

    fetchMultas();
  }, []);

  // Función para manejar el envío de la multa al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/multas", {
        fecha,
        monto,
        motivo,
        estado,
      });
      alert("Multa creada exitosamente");
      setMultasData([...multasData, response.data]); // Agregar la nueva multa al estado
    } catch (error) {
      console.error("Error al crear la multa:", error);
      alert("Hubo un error al crear la multa");
    }

    // Limpiar el formulario
    setMonto("");
    setMotivo("");
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

        <button type="submit" style={styles.button}>
          Registrar Multa
        </button>
      </form>

      {/* Tabla de multas registradas */}
      <h2 style={styles.tableTitle}>Multas Registradas</h2>
      <div style={styles.tableContainer}>
        <div style={styles.row}>
          <div style={styles.cellHeader}>ID Multa</div>
          <div style={styles.cellHeader}>Fecha</div>
          <div style={styles.cellHeader}>Monto</div>
          <div style={styles.cellHeader}>Motivo</div>
          <div style={styles.cellHeader}>Estado</div>
        </div>

        {multasData.map((multa) => (
          <div key={multa.id_multa} style={styles.row}>
            <div style={styles.cell}>{multa.id_multa}</div>
            <div style={styles.cell}>{multa.fecha}</div>
            <div style={styles.cell}>${multa.monto}</div>
            <div style={styles.cell}>{multa.motivo}</div>
            <div style={styles.cell}>{multa.estado}</div>
            <button style={styles.button}>Imprimir multa</button>
          </div>
        ))}
      </div>
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
