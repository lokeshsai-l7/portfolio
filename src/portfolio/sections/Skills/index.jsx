import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaGitSquare,
  FaJenkins,
  FaDocker,
  FaNpm,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiPrisma,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import gear5 from "../../../assets/images/gear5.gif";
import "./index.css";

const frontend = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Javascript", icon: IoLogoJavascript },
  { name: "Typescript", icon: SiTypescript },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "ReactJS", icon: RiReactjsLine },
  { name: "NextJS", icon: SiNextdotjs },
  { name: "TailwindCSS", icon: RiTailwindCssFill },
];

const backend = [
  { name: "NodeJS", icon: FaNodeJs },
  { name: "ExpressJS", icon: SiExpress },
  { name: "NPM", icon: FaNpm },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: AiOutlineConsoleSql },
  { name: "Postgresql", icon: BiLogoPostgresql },
  { name: "MySql", icon: SiMysql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Python", icon: FaPython },
];

const tools = [
  { name: "Git", icon: FaGitSquare },
  { name: "Docker", icon: FaDocker },
  { name: "Jenkins", icon: FaJenkins },
  { name: "AWS", icon: FaAws },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  },
};

const Skills = () => {
  return (
    <motion.div
      className="skills-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="mobile-view-heading">Power-Ups I’ve Collected</h1>
      <motion.img
        src={gear5}
        alt="gear5"
        className="gear5"
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <div className="skills-sub-container">
        <h1 className="web-view-heading">Power-Ups I’ve Collected</h1>
        <div className="skills-holding-container retro-border">
          <div>
            <p>Screen Pixels :-</p>
            <motion.div
              className="skills-box"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {frontend.map(({ icon: Icon, name }) => (
                <motion.div
                  className="skill"
                  key={name}
                  title={name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: -3,
                    boxShadow: "0 0 15px #00ffcc",
                  }}
                >
                  <Icon />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div>
            <p>Behind the Scenes :-</p>
            <motion.div
              className="skills-box"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {backend.map(({ icon: Icon, name }) => (
                <motion.div
                  className="skill"
                  key={name}
                  title={name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: -3,
                    boxShadow: "0 0 15px #00ffcc",
                  }}
                >
                  <Icon />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div>
            <p>Cheat Codes :-</p>
            <motion.div
              className="tools-box"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {tools.map(({ icon: Icon, name }) => (
                <motion.div
                  className="skill"
                  key={name}
                  title={name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: -3,
                    boxShadow: "0 0 15px #00ffcc",
                  }}
                >
                  <Icon />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
