import React from "react";

function Languages({ languages }) {
  const listItems = languages.map((language, id) => {
    return (
      <li key={id} className="no-list-item reveal">
        <li>Language: {language.language}</li>
        <li>Level: {language.languageLevel}</li>
      </li>
    );
  });

  return (
    <div className="preview-component reveal">
      <div className="cv-display-title">Languages</div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Languages;
