import React from "react";
import "../assets/css/description.css";

function Description({ summary }) {
  return (
    <fieldset className="description-box">
      <legend>Quem sou?</legend>
      <p>{summary}</p>
    </fieldset>
  );
}

export default Description;
