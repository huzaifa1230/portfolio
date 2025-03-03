"use client";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "Default Title";
  const description = searchParams.get("desc") || "Default Description";
  const bgImg = searchParams.get("bgImg") || "/bg1.jpg";
  const bgColor = searchParams.get("bgColor") || "#000000";

  const [isVisible, setIsVisible] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const handleScroll = (event) => {
      event.preventDefault();

      const currentScroll = window.scrollY || 0;

      if (!hasScrolled) {
        setHasScrolled(true); // Mark first scroll
        setIsVisible(true); // Show content after first scroll
      } else if (event.deltaY > 0) {
        setIsVisible(false); // Scrolling down → Hide content
      } else if (event.deltaY < 0) {
        setIsVisible(true); // Scrolling up → Show content
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [hasScrolled]);

  return (
    <div className="relative w-screen h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      {/* Content Animates on Scroll */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="p-5 rounded-lg" style={{ backgroundColor: bgColor }}>
          <h1 className="text-5xl font-bold mb-4">{name}</h1>
          <p className="text-lg max-w-2xl">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}
