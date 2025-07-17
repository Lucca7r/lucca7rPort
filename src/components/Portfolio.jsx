import React from "react";
import "../assets/css/portfolio.css";

function Portfolio({ portfolio }) {
  if (!portfolio || portfolio.length === 0) {
    return <p> Nenhum portfolio encontrado</p>;
  }

  return (
    <ul className="portfolio">
      {portfolio.map((project) => (
        <li key={project.name}>
          <h3 className={project.github ? "github" : ""}> {project.name}</h3>
          <a href={project.url} target="_black" rel="noopener noreferrer">
            {project.url}
          </a>
          <p className={project.description}>{project.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Portfolio;
