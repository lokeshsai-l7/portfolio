import { useState, useEffect } from "react";

import { TypingText } from "../components/lightswind/TypingText";
import ProfileCard from "../components/profileCard/ProfileCard";
import profileImage from "../assets/profile-pictures/portfolio-img.jpeg";
import { FaGithub } from "react-icons/fa";
import { MdSimCardDownload } from "react-icons/md";

export default function Hero({ id }) {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 8000); // 3 seconds or the total duration of your TypingText
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id={id}
      className=" text-white flex flex-col gap-3 items-center justify-center h-[90vh]"
    >
      <div className="flex flex-col items-center gap-4">
        <div>
          <TypingText
            delay={0.5}
            duration={2}
            fontSize="text-lg md:text-3xl"
            fontWeight="font-extrabold"
            color="text-white-500 "
            letterSpacing="tracking-wider"
            align="center"
          >
            Hi, I'm
          </TypingText>
        </div>
        <div>
          <TypingText
            delay={3}
            duration={2}
            fontSize="text-2xl md:text-6xl"
            fontWeight="font-extrabold"
            color="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
            letterSpacing="tracking-wider"
            align="center"
          >
            LOKESH SAI POLISHETTY
          </TypingText>
        </div>
        <div>
          <TypingText
            delay={5}
            duration={2}
            fontSize="text-lg md;text-3xl"
            fontWeight="font-extrabold"
            color="text-white-500"
            letterSpacing="tracking-wider"
            align="center"
          >
            Full Stack Developer
          </TypingText>
        </div>
        <div
          className={`flex gap-6 mt-4 transition-opacity duration-800 ease-in-out ${
            showButtons
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <a
            href="https://github.com/lokeshsai_l7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black text-sm md:text-lg font-medium py-2 md:py-3 px-4 md:px-7 rounded-xl"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="/assets/resume/resumeFSD.pdf"
            download
            className="flex items-center gap-2 bg-black border border-white text-white text-sm md:text-lg font-medium py-2 md:py-3 px-4 md:px-7 rounded-xl"
          >
            <MdSimCardDownload />
            Resume
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <ProfileCard
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl={profileImage}
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </section>
  );
}
