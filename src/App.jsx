// src/App.jsx

import React, { useState } from "react";
import profileData from "./data/profile.json";

import "./assets/css/global.css";

import Acordeon from "./components/Acordeon";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Languages from './components/Languages';
import Description from './components/Description';
import DataPortfolio from './components/DataPortfolio';


function App() {
  const [profile] = useState(profileData);

  if (!profile) {
    return (
      <main className="main">
        <h1>Erro ao carregar os dados.</h1>
        <p>
          Por favor, verifique se o arquivo `src/data/profile.json` existe e não
          contém erros de sintaxe.
        </p>
      </main>
    );
  }

  return (
    <main className="main">
      <Header
        name={profile.name}
        photo={profile.photo}
        job={profile.job}
        location={profile.location}
        email={profile.email}
      />

      <Description summary={profile.Description[0].summary} />


      <Acordeon title="Skills">
        {profile.skills ? (
          <Skills skills={profile.skills} />
        ) : (
          <p>Seção de Skills não encontrada nos dados.</p>
        )}
      </Acordeon>

      <Acordeon title="Idiomas">
           <Languages languages={profile.languages} />    
      </Acordeon>

      <Acordeon title="Code & Research">
        <Portfolio portfolio={profile.portfolio} />
      </Acordeon>

      <Acordeon title="Data Portfolio">
        <DataPortfolio dataPortfolio={profile.dataPortfolio} />
      </Acordeon>

      <Acordeon title="Experience">
      <Experience experience={profile.professionalExperience}/>
        

      </Acordeon>

      <footer className="footer">
        <p>©Lucca7r</p>
      </footer>
    </main>
  );
}

export default App;
