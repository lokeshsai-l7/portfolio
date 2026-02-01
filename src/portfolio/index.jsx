import { useState } from "react";
import {
  Navbar,
  Footer,
  ContactMe,
  Hero,
  Skills,
  Projects,
  Experience,
} from "./sections";
import "./index.css";

const sections = [
  { id: "home", component: Hero },
  { id: "skills", component: Skills },
  { id: "projects", component: Projects },
  { id: "experience", component: Experience },
  { id: "contact", component: ContactMe },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentSection = sections[currentIndex].component;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div className="main-container">
      <Navbar
        sections={sections}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
      <CurrentSection />
      <Footer
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default Portfolio;
