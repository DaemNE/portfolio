import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/curriculum-vitae/Content";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Projects from "./components/Projects";
import CssProjects from "./components/projects/CssProjects";
import HtmlProjects from "./components/projects/HtmlProjects";
import JavascriptProjects from "./components/projects/JavascriptProjects";
import MostProudProjects from "./components/projects/MostProudProjects";
import Portfolio from "./components/projects/Portfolio";
import ReactProjects from "./components/projects/ReactProjects";

function App() {
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  reveal();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="projects" element={<Projects />}>
          <Route index element={<MostProudProjects />}></Route>
          <Route path={"mostproud"} element={<MostProudProjects />}></Route>
          <Route path={"html"} element={<HtmlProjects />}></Route>
          <Route path={"css"} element={<CssProjects />}></Route>
          <Route path={"javascript"} element={<JavascriptProjects />}></Route>
          <Route path={"react"} element={<ReactProjects />}></Route>
        </Route>
        <Route path="/cv" element={<Content />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
