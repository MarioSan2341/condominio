import React, { useState, useEffect, useCallback } from "react"; // Importamos useCallback
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [pendingMultas, setPendingMultas] = useState([]);
  const [userDepartmentId, setUserDepartmentId] = useState(null);
  const [hasFetchedMultas, setHasFetchedMultas] = useState(false);

  // useCallback para memoizar la función y evitar que cambie en cada render
  const fetchPendingMultas = useCallback(async (departmentId) => {
    if (!departmentId) {
      console.error("El ID del departamento es inválido.");
      return;
    }

    try {
      if (hasFetchedMultas) {
        console.log("Ya se han cargado las multas. No se realizará otra solicitud.");
        return;
      }

      const response = await fetch(`http://localhost:3000/api/multas/pendientes/${departmentId}`);
      const data = await response.json();

      if (data.multas) {
        console.log("Multas obtenidas del backend:", data.multas);
        setPendingMultas(data.multas);
        setHasFetchedMultas(true);
      }
    } catch (error) {
      console.error("Error al obtener las multas:", error);
    }
  }, [hasFetchedMultas]); // Dependencia para evitar cambios innecesarios

  const markAsRead = async (idMulta) => {
    try {
      const response = await fetch(`http://localhost:3000/api/multas/marcar-leido/${idMulta}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        setPendingMultas((prevMultas) => prevMultas.filter((multa) => multa.id_multa !== idMulta));
        console.log(`Multa ${idMulta} marcada como leída.`);
      } else {
        console.error("Error al marcar la multa como leída");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userDepartmentId = localStorage.getItem("userDepartmentId");
      if (userDepartmentId) {
        setUserDepartmentId(userDepartmentId);
        fetchPendingMultas(userDepartmentId); // Llamada aquí
      }
    };

    fetchUserData();
  }, [fetchPendingMultas]); // Ahora 'fetchPendingMultas' está en el array de dependencias

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.navLeft}>
          <h1 style={styles.navTitle}>Tulipanes #30</h1>
        </div>
        <div style={styles.navRight}>
          <input
            type="text"
            placeholder="Buscar..."
            style={styles.searchBar}
          />
          <div
            style={styles.notificationIcon}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span style={styles.notificationText}>🔔</span>
            {pendingMultas.length > 0 && (
              <div style={styles.notificationBadge}>
                {pendingMultas.length}
              </div>
            )}
          </div>
          <div style={styles.profileIcon}>
            <span style={styles.profileText}>👤</span>
          </div>
        </div>
      </div>

      {/* Contenido central */}
      <div style={styles.content}>
        <div style={styles.card} onClick={() => navigate("/pagos")}>
          <span style={styles.cardText}>PAGOS</span>
        </div>
        <div style={styles.card} onClick={() => navigate("/Portones")}>
          <span style={styles.cardText}>PORTONES</span>
        </div>
        <div style={styles.card} onClick={() => navigate("/Multas")}>
          <span style={styles.cardText}>REGISTRAR MULTAS</span>
        </div>
      </div>

      {/* Modal para mostrar multas y pagar */}
      {showNotifications && pendingMultas.length > 0 && (
        <div style={styles.modal}>
          <h2>Notificaciones de Multas</h2>
          <ul style={styles.multaList}>
  {pendingMultas.map((multa) => (
    <li key={multa.id_multa} style={styles.multaItem}>
      <strong>Multa ID:</strong> {multa.id_multa} <br />
      <strong>Motivo:</strong> {multa.motivo} <br />
      <strong>Monto:</strong> {multa.monto} <br />
      <strong>Fecha:</strong> {new Date(multa.fecha).toLocaleDateString()} <br />
      <button style={styles.markAsReadButton} onClick={() => markAsRead(multa.id_multa)}>
        Marcar como Leído
      </button>
    </li>
  ))}
</ul>

          <div style={styles.departmentId}>
            {userDepartmentId}
          </div>
          <button style={styles.payButton} onClick={payMultas}>
            Pagar todas las multas
          </button>
        </div>
      )}
    </div>
  );

  async function payMultas() {
    // Lógica de pago de multas
    console.log("Pagando todas las multas...");
  }
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fffaf0",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  navbar: {
    backgroundColor: "#ffa726",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
  },
  navTitle: {
    color: "#ffffff",
    fontSize: "24px",
    fontWeight: "bold",
    margin: 0,
  },
  navRight: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  searchBar: {
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    marginRight: "15px",
    fontSize: "14px",
    outline: "none",
  },
  notificationIcon: {
    position: "relative",
    cursor: "pointer",
    marginRight: "15px",
    fontSize: "20px",
  },
  notificationText: {
    fontSize: "20px",
    color: "#ffffff",
  },
  notificationBadge: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    backgroundColor: "#ff0000",
    color: "#ffffff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: "bold",
  },
  profileIcon: {
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  profileText: {
    fontSize: "20px",
    color: "#ffa726",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffcc80",
    color: "#ffffff",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    fontSize: "20px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    marginBottom: "20px",
  },
  cardText: {
    textAlign: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
    width: "90%",
    maxWidth: "400px",
  },
  multaList: {
    listStyleType: "none",
    padding: 0,
  },
  multaItem: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  payButton: {
    backgroundColor: "#ffa726",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    width: "100%",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Admin;




