import { useRef, useEffect, useState } from "react";
import { ScrollTimeline } from "../components/lightswind/scroll-timeline";

const events = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description: "Description of the achievement.",
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone.",
  },
];

export default function Experience({ id }) {
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
      className={`bg-gray-900 py-16 px-4 flex justify-center items-center min-h-screen transition-opacity duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <ScrollTimeline
        events={events}
        title="My Journey"
        subtitle="Scroll to explore the timeline"
        progressIndicator={true}
        cardAlignment="alternating"
        revealAnimation="fade"
      />
    </section>
  );
}
