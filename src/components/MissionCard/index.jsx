import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./index.css";

const MissionCard = ({ project }) => {
  const { title, description, tech, github, live, role, impact } = project;

  return (
    <motion.div
      className="mission-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mission-header">
        <h3>{title}</h3>
      </div>

      <p className="desc">{description}</p>

      {role && <p className="meta">🧑‍💻 Role: {role}</p>}
      {impact && <p className="meta">📈 Impact: {impact}</p>}

      <div className="tech">
        {tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {(github || live) && (
        <div className="mission-actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <FaGithub /> GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      )}

      {!github && !live && (
        <p className="locked-text">🔒 Mission files confidential</p>
      )}
    </motion.div>
  );
};

export default MissionCard;
