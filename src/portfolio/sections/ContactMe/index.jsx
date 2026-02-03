import { motion } from "motion/react";
import { ContactNPC } from "../../../components";
import thumbsUpLuffy from "../../../assets/images/thumbs-up-luffy.gif";
import "./index.css";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <h1>Reach Out (Promise I’ll Reply) 😅</h1>
      <div className="npc-container">
        <ContactNPC />
        <motion.img
          src={thumbsUpLuffy}
          alt="thumbs-up-luffy"
          className="thumbs-up-luffy"
        />
      </div>
    </div>
  );
};

export default ContactMe;
