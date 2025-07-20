import React from "react";
import "../assets/css/languages.css";

function Languages({ languages }) {
    if (!languages || languages.length === 0) {
        return <p>Nenhum idioma encontrado</p>;
    }

    return (
        <ul className="languages">
            {languages.map((language) => (
            <li key={language}>{language}</li>
            ))}
        </ul>
    );
}

export default Languages;