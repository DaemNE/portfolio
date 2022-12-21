import React, { useState } from "react";
import DisplayCv from "./DisplayCv";

function Content() {
  const [name] = useState("Nikolaas Daem");
  const [title] = useState("Front-end web developer");
  const [adress] = useState("Hollywood Lane 234, 0001 Earth");
  const [phoneNumber] = useState("(32) 471 03 89 10");
  const [email] = useState("NikolaasDaem@example.com");
  const [skills] = useState([
    "Javascript",
    "React.js",
    "Npm",
    "Html",
    "React Hooks",
    "Agile Development",
    "CSS",
    "React Router",
    "Api design knowledge",
    "Bootstrap CSS",
    "TDD (RTL & Jest",
    "Git",
  ]);
  const [experiences] = useState([
    {
      company: "Dialog Group",
      location: "Mechelen",
      title: "Doc1 / EngageOne Specialist",
      startDuration: "June 2022",
      endDuration: "Current",
      taskOne:
        "Implementing Doc1 and EngageOne templates for our customer Fluvius.",
      taskTwo: "Working Agile with daily standups discussing current projects.",
      taskThree:
        "Creating scripts with powershell to help with workflow in our team.",
    },
    {
      company: "Environnement Brussels",
      location: "Brussels",
      title: "Events Assistant",
      startDuration: "Februari 2020",
      endDuration: "Februari 2021",
      taskOne: "In charge of communication with partners.",
      taskTwo: "Managing room calendar in outlook.",
      taskThree:
        "Preparing events for internal colleagues and external partners.",
    },
  ]);
  const [educations] = useState([
    {
      school: "Intec Brussels",
      location: "Brussels",
      title: "Java Developer, I.O.T.",
      startDuration: "April 2021",
      endDuration: "April 2022",
      courseOne:
        "Coding bootcamp where the fundamentals of java and web development are taught.",
      courseTwo: "Ended successfully.",
    },
    {
      school: "Self Taught Web Developer",
      location: "",
      title: "The Odin Project",
      startDuration: "August 2022",
      endDuration: "Current",
      courseOne:
        "An online curriculum starting from the basics of html, css and javascript with a goal to become a full stack developer with react as Front-end framework and express.js as backend.",
    },
  ]);
  const [languages] = useState([
    {
      language: "Dutch",
      languageLevel: "Native",
    },
    {
      language: "English",
      languageLevel: "Fluent",
    },
    {
      language: "French",
      languageLevel: "Proficient",
    },
  ]);
  const [extracurriculars] = useState([
    {
      company: "Chiro Schaarbeek",
      location: "Brussels",
      title: "Leader / Managing Leader",
      startDuration: "September 2015",
      endDuration: "August 2022",
      taskOne: "Organizing events.",
      taskTwo: "Setting up meetings to discuss course of events",
      taskThree: "Managing finances",
    },
    {
      company: "Chiro",
      location: "Brussels",
      title: "Verbond Brussel",
      startDuration: "September 2022",
      endDuration: "Current",
      taskOne: "Organizing events for regional entities of Chiro",
      taskTwo: "Managing Finances",
    },
    {
      company: "Chiro",
      location: "National",
      title: "Thema Groep Samenwerking",
      startDuration: "September 2022",
      endDuration: "Current",
      taskTwo:
        "Developing informative content for topics around continuity, management and organizing events for local entities of Chiro",
    },
  ]);

  return (
    <div className="content">
      <DisplayCv
        name={name}
        title={title}
        adress={adress}
        phoneNumber={phoneNumber}
        email={email}
        skills={skills}
        experiences={experiences}
        educations={educations}
        languages={languages}
        extracurriculars={extracurriculars}
      />
    </div>
  );
}

export default Content;
