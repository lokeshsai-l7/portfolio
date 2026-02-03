import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import "./index.css";

const ExperienceLevelCard = () => {
  const xp = 75;

  return (
    <motion.div
      className="level-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* LEVEL HEADER */}
      <div className="level-header">
        <span className="level-badge">LEVEL 2</span>
        <h3>Full Stack Developer</h3>
      </div>

      <p className="company">
        Tata Consultancy Services(TCS) <span>• 2022 – Present</span>
      </p>

      {/* MISSIONS */}
      <div className="section">
        <h4>MISSIONS COMPLETED</h4>
        <ul className="missions">
          {[
            "Built full-stack systems using React, Node.js, and databases for real-world applications",
            "Designed APIs and UI flows for complex data-driven workflows",
            "Optimized performance and reliability across frontend and backend",
            "Implemented secure, role-based application features",
            "Completed missions with cross-team collaboration and clean code practices",
          ].map((mission, index) => (
            <li key={index}>
              <FaCheckCircle /> {mission}
            </li>
          ))}
        </ul>
      </div>

      {/* SKILLS */}
      <div className="section">
        <h4>SKILLS UNLOCKED</h4>
        <div className="skills">
          {[
            "React.js",
            "Node.js",
            "Next.js",
            "MS-SqL",
            "Docker",
            "Prisma",
            "MANTINE-UI",
            "WebPack",
            "Redux",
            "AWS",
            "Jenkins",
            "Argo-cd",
          ].map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* XP BAR */}
      <div className="xp-section">
        <span className="xp-label">XP</span>
        <div className="xp-bar">
          <motion.div
            className="xp-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${xp}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
        <span className="xp-percent">{xp}%</span>
      </div>
    </motion.div>
  );
};

export default ExperienceLevelCard;
