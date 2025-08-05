import { useRef, useEffect, useState } from "react";
import Carousel3D from "../components/lightswind/carousel-3d";

const items = [
  {
    id: 1,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description:
      "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat",
  },
  {
    id: 2,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description:
      "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat",
  },
  {
    id: 3,
    title: "6th SENSE Safety System",
    brand: "FireCat Group",
    description:
      "AI-driven smart uniform tech for law enforcement, military & firefighters.",
    tags: ["Safety", "Military", "AI Sensors", "Monitoring"],
    imageUrl: "/img/firecat.jpg",
    link: "/projects/firecat",
  },
];

export default function Projects({ id }) {
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
      className={`bg-gray-800 py-16 px-4 flex justify-center items-center min-h-screen transition-opacity duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Carousel3D
        items={items}
        autoRotate={true}
        rotateInterval={4000}
        cardHeight={500}
      />
    </section>
  );
}
