import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Pago = () => {
  const location = useLocation();
  const [multas, setMultas] = useState(location.state?.multas || []);

  // Función para marcar una multa como pagada
  const handlePay = (id) => {
    const updatedMultas = multas.map(multa => 
      multa.id_multa === id ? { ...multa, estado: 'pagado' } : multa
    );
    setMultas(updatedMultas);
    console.log(`Multa ID ${id} marcada como pagada`);
  };

  return (
    <div style={styles.container}>
      <h2>Detalles de las Multas</h2>
      <div style={styles.multaList}>
        {multas.map((multa) => (
          <div key={multa.id_multa} style={styles.multaItem}>
            <h3>Multa ID: {multa.id_multa}</h3>
            <p><strong>Motivo:</strong> {multa.motivo}</p>
            <p><strong>Monto:</strong> {multa.monto}</p>
            <p><strong>Fecha:</strong> {new Date(multa.fecha).toLocaleDateString()}</p>
            <p><strong>Estado:</strong> {multa.estado}</p>
            {multa.estado === 'pendiente' && (
              <button style={styles.payButton} onClick={() => handlePay(multa.id_multa)}>
                Marcar como pagada
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#fffaf0",
  },
  multaList: {
    listStyleType: "none",
    padding: 0,
  },
  multaItem: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
    marginBottom: "10px",
  },
  payButton: {
    backgroundColor: "#ffa726",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
  },
};

export default Pago;
