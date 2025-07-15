import React from "react";
import "../assets/css/skills.css"; // Importa o CSS de skills

// Recebe o objeto "skills" como propriedade
function Skills({ skills }) {
  return (
    <div className="skills">
      <section className="tools">
        <h3>Ferramentas:</h3>
        <ul>
          {/* Mapeia o array hardSkills para criar a lista de imagens */}
          {skills.hardSkills.map((skill) => (
            <li key={skill.name}>
              <img src={skill.logo} alt={skill.name} title={skill.name} />
            </li>
          ))}
        </ul>
      </section>

      <section className="personal">
        <h3>Pessoal:</h3>
        <ul>
          {skills.softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Skills;
