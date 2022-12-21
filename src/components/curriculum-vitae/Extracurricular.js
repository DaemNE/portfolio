import React from "react";

function Extracurricular({ extracurriculars }) {
  const listExperiences = extracurriculars.map((extracurricular, id) => {
    return (
      <div key={id}>
        <div className="experience-item reveal">
          <span className="company-item">{extracurricular.company},</span>{" "}
          <span className="location-item">{extracurricular.location}</span> --{" "}
          <span className="title-item">{extracurricular.title}</span>
        </div>
        <div className="experience-item duration-item reveal">
          {extracurricular.startDuration} - {extracurricular.endDuration}
        </div>
        <div className="experience-item task-item reveal">
          <div>{extracurricular.taskOne}</div>
          <div>{extracurricular.taskTwo}</div>
          <div>{extracurricular.taskThree}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="preview-component reveal">
      <div className="cv-display-title">Extracurricular</div>
      <div>{listExperiences}</div>
    </div>
  );
}

export default Extracurricular;
