import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./index.css";

const socials = {
  linkedin: "https://linkedin.com/in/your-linkedin",
  instagram: "https://instagram.com/your-instagram",
  twitter: null, // ❌ not available
};

const ContactNPC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [popup, setPopup] = useState("");

  const handleSocialClick = (platform) => {
    const link = socials[platform];
    if (link) {
      window.open(link, "_blank");
    } else {
      setPopup(`${platform} skill not unlocked yet 😄`);
      setTimeout(() => setPopup(""), 2500);
    }
  };

  return (
    <section className="npc-section">
      <motion.div
        className="npc-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* NPC Dialogue */}
        <div className="npc-text">
          <p className="npc-name">Lokesh:</p>
          <p className="npc-dialogue">“Hey! Want to work together?”</p>
        </div>

        {/* Buttons */}
        <div className="npc-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              (window.location.href = "mailto:youremail@example.com")
            }
          >
            Yes
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowOptions(true)}
          >
            Definitely Yes
          </motion.button>
        </div>

        {/* Social Options */}
        <AnimatePresence>
          {showOptions && (
            <motion.div
              className="social-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <button onClick={() => handleSocialClick("linkedin")}>
                <FaLinkedin /> LinkedIn
              </button>
              <button onClick={() => handleSocialClick("instagram")}>
                <FaInstagram /> Instagram
              </button>
              <button onClick={() => handleSocialClick("twitter")}>
                <FaTwitter /> Twitter
              </button>
              <button
                onClick={() =>
                  (window.location.href = "mailto:youremail@example.com")
                }
              >
                <FaEnvelope /> Email
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="npc-popup"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {popup}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactNPC;
