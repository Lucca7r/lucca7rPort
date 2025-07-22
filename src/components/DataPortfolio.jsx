import React from 'react';
import '../assets/css/dataPortfolio.css'; // Vamos criar este CSS a seguir

function DataPortfolio({ dataPortfolio }) {
  if (!dataPortfolio || dataPortfolio.length === 0) {
    return <p>Nenhum projeto de BI encontrado.</p>;
  }

  return (
    <ul className="data-portfolio-list">
      {dataPortfolio.map((project) => (
        <li key={project.name} className="data-portfolio-item">
          <h3 className={project.github ? 'github' : ''}>{project.name}</h3>
          <img src={project.foto} alt={`Imagem do projeto ${project.name}`} />
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DataPortfolio;