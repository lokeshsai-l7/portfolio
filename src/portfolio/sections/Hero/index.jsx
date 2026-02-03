import { useState } from "react";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { FaRegFileAlt, FaGithub } from "react-icons/fa";
import profile from "../../../assets/images/profile.png";
import pikachu from "../../../assets/images/pikachu.gif";
import "./index.css";

const Hero = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Lokesh_Sai_Resume.pdf";
    link.click();
  };

  const openGitHub = () => {
    window.open(
      "https://github.com/lokeshsai-l7",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="hero-container">
      <div className="hero-info">
        {startTyping && (
          <Typewriter
            options={{
              delay: 60,
              cursor: "",
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `Hi! <img src="${pikachu}" alt="hi pikachu" class="pikachu-gif" />`,
                )
                .typeString(
                  "<br/><span class='my-name'>I'M     LOKESH    SAI</span>",
                )
                .typeString(
                  "<br/> I   build   things   for   the   web,<br/> Sometimes   they   even    work.😄",
                )
                .pauseFor(1000)
                .callFunction(() => {
                  setShowBtn(true);
                })
                .start();
            }}
          />
        )}
        {showBtn && (
          <motion.div
            className="btn-container"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <button className="pixel-btn mono" onClick={openGitHub}>
              <FaGithub />
              Github
            </button>
            <button className="pixel-btn mono" onClick={downloadResume}>
              <FaRegFileAlt />
              Resume
            </button>
          </motion.div>
        )}
      </div>
      <div>
        <motion.img
          src={profile}
          alt="Lokesh_Sai_Polishetty"
          className="profile-img floating"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onAnimationComplete={() => setStartTyping(true)}
        />
      </div>
    </div>
  );
};

export default Hero;
