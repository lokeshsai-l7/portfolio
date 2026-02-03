import { motion } from "motion/react";
import { ExperienceLevelCard } from "../../../components";
import laughingLuffy from "../../../assets/images/laughingluffy.gif";
import "./index.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>Boss Battles I’ve Survived</h1>
      <div className="experience-sub-container">
        <div>
          <motion.img
            className="laughing-luffy"
            src={laughingLuffy}
            alt="laughing-luffy"
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </div>
        <ExperienceLevelCard />
      </div>
    </div>
  );
};

export default Experience;
