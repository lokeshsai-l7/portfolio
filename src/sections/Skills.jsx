import { useRef, useEffect, useState } from "react";

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
      className={`transition-opacity duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-white flex flex-col items-center h-[80vh]">
        <h2 className="text-5xl font-bold mb-8">Skills</h2>
        <p className="max-w-4xl text-center">
          I have a diverse skill set that includes both frontend and backend
          technologies. My expertise lies in the MERN stack, which allows me to
          build dynamic and responsive web applications. I am also proficient in
          RESTful API development, database management, and deploying
          applications on platforms like AWS, Vercel, and Netlify.
        </p>
      </div>
    </section>
  );
}
