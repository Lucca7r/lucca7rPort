import React, { useState } from "react";
import "../assets/css/acordeon.css";

// A prop DEVE se chamar "children" (minúsculo)
function Acordeon({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAcordeon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`acordeon ${isOpen ? "open" : ""}`}>
      <button className="trigger" type="button" onClick={toggleAcordeon}>
        <h2>{title}</h2>
      </button>
      <div className="content">
        {/* Renderiza a prop "children" aqui */}
        {children}
      </div>
    </div>
  );
}

export default Acordeon;