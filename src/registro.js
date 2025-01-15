import React from "react";
import logo from "./logo02.png"; // Logo del Condominio

const Registro = () => {
  return (
    <div style={styles.container}>
      {/* Contenedor del formulario */}
      <div style={styles.formContainer}>
        <h1 style={styles.title}>REGISTROS DE USUARIOS</h1>
        <p style={styles.subtitle}>
          Completa el siguiente formulario con tus datos
        </p>
        <form>
          <input
            type="text"
            placeholder="Nombre Completo"
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Número Telefónico"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            style={styles.input}
          />
        </form>
      </div>

      {/* Contenedor del logo y botón */}
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo Condominio" style={styles.logo} />
        <button style={styles.button}>Registrarse</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  formContainer: {
    width: "50%",
    padding: "20px",
  },
  title: {
    fontSize: "32px", // Más grande
    fontWeight: "bold",
    color: "#3d2e1e",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "18px", // Más grande
    color: "#7a7a7a",
    marginBottom: "30px",
  },
  input: {
    width: "100%",
    padding: "15px", // Más grande
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f8f8f8",
    fontSize: "16px", // Más grande
  },
  logoContainer: {
    width: "50%",
    textAlign: "center",
  },
  logo: {
    width: "180px", // Más grande
    height: "auto",
    marginBottom: "30px", // Separación del botón
  },
  button: {
    padding: "15px 30px", // Más grande
    backgroundColor: "#ffa726",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    fontSize: "20px", // Más grande
    cursor: "pointer",
  },
};

export default Registro;
