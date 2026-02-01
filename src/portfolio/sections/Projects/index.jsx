import { useState } from "react";
import { GiEvilBook } from "react-icons/gi";
import { SiSidequest } from "react-icons/si";
import { MissionCard } from "../../../components";
import "./index.css";

const projects = {
  work: [
    {
      id: 1,
      title: "Internal Q&A Bot",
      description: "AI-powered internal support bot for company teams.",
      tech: ["React", "Node", "PostgreSQL", "RAG"],
      role: "Full Stack Developer",
      impact: "Reduced support tickets by 40%",
    },
    {
      id: 2,
      title: "Energy Monitoring System",
      description: "Smart energy tracking platform with analytics dashboard.",
      tech: ["React", "Node", "MongoDB", "IoT"],
      role: "Full Stack Developer",
      impact: "Real-time monitoring & alerts",
    },
    {
      id: 3,
      title: "Energy Monitoring System",
      description: "Smart energy tracking platform with analytics dashboard.",
      tech: ["React", "Node", "MongoDB", "IoT"],
      role: "Full Stack Developer",
      impact: "Real-time monitoring & alerts",
    },
  ],

  personal: [
    {
      id: 6,
      title: "Game Portfolio",
      description: "Game-style interactive developer portfolio.",
      tech: ["React", "Framer Motion"],
      github: "https://github.com/yourname/game-portfolio",
      live: "https://yourportfolio.com",
    },
    {
      id: 4,
      title: "Q&A Support Bot",
      description: "RAG-based AI chatbot for websites.",
      tech: ["Node", "LangChain", "Postgres", "AI"],
      github: "https://github.com/yourname/qna-bot",
      // no live
    },
    {
      id: 5,
      title: "Energy Monitoring System",
      description: "Smart energy tracking platform with analytics dashboard.",
      tech: ["React", "Node", "MongoDB", "IoT"],
      role: "Full Stack Developer",
      impact: "Real-time monitoring & alerts",
    },
  ],
};

const Projects = () => {
  const [tab, setTab] = useState("work");
  return (
    <div className="projects-container">
      <h1>Main Missions & Side Quests </h1>
      <section className="projects-section">
        <div className="tabs">
          <button
            className={tab === "work" ? "active" : ""}
            onClick={() => setTab("work")}
          >
            <GiEvilBook /> Main Story
          </button>
          <button
            className={tab === "personal" ? "active" : ""}
            onClick={() => setTab("personal")}
          >
            <SiSidequest /> Side Quests
          </button>
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
