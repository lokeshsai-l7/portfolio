import { useRef, useEffect, useState } from "react";
import BlurText from "../components/BlurText/BlurText";

export default function About({ id }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false); // 👈 track if heading animation is done

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

  const handleAnimationComplete = () => {
    // 👇 trigger detail text once "About Me" animation is done
    setShowDetails(true);
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-opacity duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-white flex flex-col items-center h-[80vh]">
        <div>
          <BlurText
            text="About Me"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl font-bold mb-8"
          />
        </div>

        {/* 👉 Only show details after heading animation finishes */}
        {showDetails && (
          <div className="max-w-4xl text-center border-white border-2 p-6 rounded-xl">
            <BlurText
              text="      Hello! I'm Lokesh Sai, a passionate Full Stack Developer with a focus on building scalable, responsive, and user-centric web applications. With experience in both frontend and backend development, I enjoy turning ideas into real-world products using modern technologies. I specialize in the MERN stack — MongoDB, Express.js, React, and Node.js — and have hands-on experience creating RESTful APIs, building interactive UIs, and deploying applications using services like AWS, Vercel, and Netlify. Beyond coding, I’m a strong believer in writing clean, maintainable code, following best practices, and continuously learning new tools and frameworks to stay up to date in the fast-evolving tech space. Whether it's collaborating with a cross-functional team or independently bringing a feature to life, I take pride in delivering high-quality solutions that solve real-world problems. When I'm not coding, you’ll find me exploring new technologies, writing about what I learn, or working on side projects to sharpen my skills."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-xl font-normal max-w-4xl text-center"
            />
          </div>
        )}
      </div>
    </section>
  );
}
