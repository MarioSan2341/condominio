import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./Multas"; // Agrega estilos aquí

const Loading = ({ loading }) => {
  const loadingRef = useRef(null);

  return (
    <CSSTransition
      in={loading}
      timeout={300}
      classNames="fade"
      unmountOnExit
      nodeRef={loadingRef}
    >
      <div ref={loadingRef} className="loading-overlay">
        <div className="spinner"></div>
      </div>
    </CSSTransition>
  );
};

export default Loading;
