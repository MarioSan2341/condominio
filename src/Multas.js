import React from "react";

const Multas = () => {
  const multasData = [
    {
      fecha: "01/08/2025",
      costo: "$700.00",
      motivo: "Mostrar partes íntimas en el club",
    },
    {
      fecha: "01/08/2025",
      costo: "$700.00",
      motivo: "Mostrar partes íntimas en el club",
    },
    {
      fecha: "01/08/2025",
      costo: "$700.00",
      motivo: "Mostrar partes íntimas en el club",
    },
    {
      fecha: "01/08/2025",
      costo: "$700.00",
      motivo: "Mostrar partes íntimas en el club",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>REGISTROS DE MULTAS</h1>
      <div style={styles.tableContainer}>
        {multasData.map((multa, index) => (
          <div key={index} style={styles.row}>
            <div style={styles.cell}>{multa.fecha}</div>
            <div style={styles.cell}>{multa.costo}</div>
            <div style={styles.cell}>{multa.motivo}</div>
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
  buttonHover: {
    backgroundColor: "#ff9800",
  },
};

export default Multas;
