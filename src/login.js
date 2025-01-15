import React from "react";
import { useNavigate } from "react-router-dom"; // Para la navegación
import fondo from "./fondouwu.jpg";
import logo from "./logo01.png";
import logo02 from "./logo02.png";

const Login = () => {
  const navigate = useNavigate(); // Hook para redirigir

  return (
    <div style={styles.background}>
      {/* Imagen a la derecha */}
      <img src={logo02} alt="Logo Secundario" style={styles.logoRight} />

      {/* Contenedor del formulario */}
      <div style={styles.container}> 
        {/* Imagen del logo principal */}
        <img src={logo} alt="Logo" style={styles.logo} />

        <h2 style={styles.title}>Número Telefónico</h2>
        <input
          type="text"
          placeholder="Ingresa tu número telefónico"
          style={styles.input}
        />

        <h2 style={styles.title}>Contraseña</h2>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          style={styles.input}
        />

        <p style={styles.recoveryText}>
          ¿Desea recuperar contraseña?{" "}
          <span style={styles.link}>Presione Aqui</span>
        </p>

         {/* Botón para iniciar sesión */}
         <button
          style={styles.loginButton}
          onClick={() => navigate("/home")} // Redirige a Home.js al hacer clic
        >
          Iniciar Sesión
        </button>

        <div style={styles.separator}>
          <hr style={styles.line} />
          <span style={styles.separatorText}>o</span>
          <hr style={styles.line} />
        </div>

        {/* Botón para ir al registro */}
        <p
          style={styles.registerText}
          onClick={() => navigate("/registro")} // Redirige a /registro
        >
          Registrarse
        </p>
      </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  container: {
    maxWidth: "300px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  logo: {
    width: "100px",
    height: "auto",
    marginBottom: "20px",
  },
  logoRight: {
    position: "absolute",
    top: "30%",
    right: "10%",
    transform: "translateY(-50%)",
    width: "150px",
    height: "auto",
  },
  title: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "25px",
    backgroundColor: "#f8f8f8",
    fontSize: "14px",
  },
  recoveryText: {
    fontSize: "12px",
    marginBottom: "20px",
    textAlign: "left",
  },
  link: {
    color: "blue",
    cursor: "pointer",
    textDecoration: "underline",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ffa726",
    border: "none",
    borderRadius: "25px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "20px",
  },
  separator: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#ddd",
    margin: "0 10px",
  },
  separatorText: {
    fontSize: "12px",
    color: "#aaa",
  },
  registerText: {
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#000",
    textDecoration: "underline",
  },
};

export default Login;
