import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="px-[200px]">
      <Header />
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
    </div>
  );
}

export default App;
