import React from "react";

const Portones = () => {
  const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>REGISTROS DE PORTONES</h1>
      <div style={styles.content}>
        {/* Tags vinculados */}
        <div style={styles.tagsContainer}>
          <h2 style={styles.subtitle}>Tags Vinculados</h2>
          <div style={styles.tagList}>
            {tags.map((tag, index) => (
              <div key={index} style={styles.tagRow}>
                <span style={styles.tagName}>{tag}</span>
                <button style={styles.button}>Eliminar</button>
                <button style={styles.button}>Editar</button>
              </div>
            ))}
          </div>
        </div>

        {/* Solicitar Tag */}
        <div style={styles.requestContainer}>
          <h2 style={styles.subtitle}>Solicitar Tag</h2>
          <form style={styles.form}>
            <input
              type="text"
              placeholder="Domicilio"
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Placas del carro vinculado"
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Modelo de carro"
              style={styles.input}
            />
            <button type="submit" style={styles.acceptButton}>
              Aceptar
            </button>
          </form>
          <div style={styles.extraButtons}>
            <button style={styles.extraButton}>Pagar en línea</button>
            <button style={styles.extraButton}>Imprimir solicitud de tag</button>
          </div>
        </div>
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
  content: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  tagsContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  tagList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  tagRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  tagName: {
    flex: 1,
    fontSize: "16px",
    color: "#333",
  },
  button: {
    backgroundColor: "#ffa726",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px",
    marginLeft: "10px",
    transition: "background-color 0.2s ease-in-out",
  },
  requestContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "14px",
  },
  acceptButton: {
    backgroundColor: "#ffa726",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.2s ease-in-out",
  },
  extraButtons: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  extraButton: {
    backgroundColor: "#ffcc80",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default Portones;
