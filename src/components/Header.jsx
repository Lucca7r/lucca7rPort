import React from 'react';
import '../assets/css/header.css'; // Importa o CSS específico do header

// O componente recebe os dados (props) do App.jsx
function Header({ name, photo, job, location, email }) {
  return (
    <header className="header">
      <img src={photo} alt="Foto de Perfil" className="photo" />

      <h1 className="title">
        Olá, <br />
        eu sou <span>{name}</span>
      </h1>

      <div className="information">
        <p className="job">{job}</p>
        <p className="location">{location}</p>
        <p className="email">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </header>
  );
}

export default Header;