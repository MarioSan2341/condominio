import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

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
          <div style={styles.profileIcon}>
            <span style={styles.profileText}>👤</span>
          </div>
        </div>
      </div>

      {/* Contenido central */}
      <div style={styles.content}>
        <div style={styles.card} onClick={() => navigate("/pagos")}>PAGOS</div>
        <div style={styles.card} onClick={() => navigate("/Multas")}>MULTAS</div>
        <div style={styles.card} onClick={() => navigate("/Portones")}>PORTONES</div>
      </div>
    </div>
  );
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
  },
  searchBar: {
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    marginRight: "15px",
    fontSize: "14px",
    outline: "none",
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
  },
  card: {
    backgroundColor: "#ffcc80",
    color: "#ffffff",
    width: "150px",
    height: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
  },
  cardHover: {
    transform: "scale(1.1)",
  },
};

export default Home;
