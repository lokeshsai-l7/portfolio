import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="px-[20px] md:px-[200px] w-screen flex flex-col items-center">
      <Header />
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
