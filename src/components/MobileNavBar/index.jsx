// components/MobileFooterNav.jsx
import {
  FaHome,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import "./index.css";

const tabs = [
  { id: "home", icon: <FaHome /> },
  { id: "skills", icon: <FaTools /> },
  { id: "projects", icon: <FaProjectDiagram /> },
  { id: "experience", icon: <FaBriefcase /> },
  { id: "contact", icon: <FaEnvelope /> },
];

const MobileNavBar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="mobile-footer">
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => scrollTo(tab.id)}>
          {tab.icon}
        </button>
      ))}
    </nav>
  );
};

export default MobileNavBar;
