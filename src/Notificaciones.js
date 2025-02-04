import React, { useState, useEffect } from "react";
import axios from "axios";

const Notificaciones = ({ usuario }) => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Cargar notificaciones al cargar el componente
  useEffect(() => {
    const fetchNotificaciones = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/notificaciones/${usuario}`);
        if (response.data.message) {
          setMensaje(response.data.message); // Si no hay multas, mostrar mensaje
        } else {
          setNotificaciones(response.data);
        }
      } catch (err) {
        console.error("Error al obtener notificaciones:", err);
        setMensaje("Error al cargar las notificaciones.");
      }
    };

    fetchNotificaciones();
  }, [usuario]);

  // Marcar multas como vistas
  const marcarComoVistas = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/notificaciones/${usuario}/vistas`);
      setMensaje(response.data.message);
      setNotificaciones([]); // Limpiar la lista de notificaciones
    } catch (err) {
      console.error("Error al marcar multas como vistas:", err);
      setMensaje("Error al marcar las notificaciones como vistas.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Notificaciones</h2>
      {mensaje && <p style={styles.message}>{mensaje}</p>}

      {notificaciones.length > 0 ? (
        <ul style={styles.list}>
          {notificaciones.map((multa) => (
            <li key={multa.id_multa} style={styles.notification}>
              <p><strong>Motivo:</strong> {multa.motivo}</p>
              <p><strong>Monto:</strong> ${multa.monto}</p>
              <p><strong>Estado:</strong> {multa.estado}</p>
              <p><strong>Fecha:</strong> {new Date(multa.fecha).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        !mensaje && <p style={styles.message}>No tienes notificaciones pendientes.</p>
      )}

      {notificaciones.length > 0 && (
        <button style={styles.button} onClick={marcarComoVistas}>
          Marcar como vistas
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  message: {
    color: "#555",
    fontSize: "16px",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  notification: {
    marginBottom: "15px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ffa726",
    border: "none",
    borderRadius: "25px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default Notificaciones;
