import { useState } from "react";
import { GiEvilBook } from "react-icons/gi";
import { SiSidequest } from "react-icons/si";
import { MissionCard } from "../../../components";
import { projects } from "./data/projects";
import pikachuBoxing from "../../../assets/images/pikachu-boxing.gif";
import pikachuNodding from "../../../assets/images/pikachu-nodding.gif";
import "./index.css";

const Projects = () => {
  const [tab, setTab] = useState("work");
  return (
    <div className="projects-container">
      <h1>Main Missions & Side Quests </h1>
      <section className="projects-section">
        <div className="tabs">
          <img
            src={pikachuNodding}
            alt="pikachu-nodding"
            className="pikachu-gif"
          />
          <button
            className={tab === "work" ? "active" : ""}
            onClick={() => setTab("work")}
          >
            <GiEvilBook /> Main Missions
          </button>
          <button
            className={tab === "personal" ? "active" : ""}
            onClick={() => setTab("personal")}
          >
            <SiSidequest /> Side Quests
          </button>
          <img
            src={pikachuBoxing}
            alt="pikachu-boxing"
            className="pikachu-gif"
          />
        </div>

        <div className="missions-grid">
          {projects[tab].map((project) => (
            <MissionCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
