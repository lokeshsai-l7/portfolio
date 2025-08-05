import { useRef, useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { SiFirebase, SiMongodb } from "react-icons/si";

export default function Skills({ id }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`bg-black py-16 px-4 flex justify-center items-center min-h-screen transition-opacity duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-[#121212] p-8 rounded-xl max-w-5xl w-full shadow-lg relative text-white">
        {/* Vertical label */}
        <div className="absolute left-[-30px] top-1/2 -translate-y-1/2 rotate-[-90deg]">
          <span className="bg-yellow-400 text-black px-2 py-1 text-sm font-semibold rounded">
            Skills
          </span>
        </div>

        {/* Title and description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400">What I do</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm">
            I am a Full Stack Developer specializing in building modern web
            applications. I work with both frontend and backend technologies to
            deliver scalable and efficient solutions.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 justify-items-center">
          <Skill icon={<FaHtml5 />} label="HTML" />
          <Skill icon={<FaCss3Alt />} label="CSS" />
          <Skill icon={<FaSass />} label="SASS" />
          <Skill icon={<FaJsSquare />} label="JavaScript" />
          <Skill icon={<FaReact />} label="React" />
          <Skill icon={<FaGithub />} label="GitHub" />
          <Skill icon={<FaNodeJs />} label="Node.js" />
          <Skill icon={<SiFirebase />} label="Firebase" />
          <Skill icon={<SiMongodb />} label="MongoDB" />
          <Skill icon={<FaDocker />} label="Docker" />
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-center text-white">
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm">{label}</p>
    </div>
  );
}
