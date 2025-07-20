import React from "react";
import "../assets/css/experience.css";

function Experience({ experience }) {
  if (!experience || experience.length === 0) {
    return <p> Nenhum experience encontrado</p>;
  }

  return (
    <ul className="experience">
      {experience.map((xp) => (
        <li key={xp.name}>
          <h3>{xp.name}</h3>
          <p className="period">{xp.period}</p>
          <p>{xp.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Experience;
