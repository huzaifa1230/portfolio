"use client";
import { useEffect } from "react";
import Card from "./components/Card";
// import homeCards from "./data";
import { motion } from "framer-motion";
import { projects } from "../config/index";
import "../style.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const handleAboutClick = () => {
    router.push("/about");
  };

  return (
    <div className="h-screen w-screen flex items-center">
      <motion.button
        className="absolute top-8 right-8 z-50 bg-black text-white px-6 py-3 rounded-full font-medium text-base hover:bg-gray-800 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/10"
        onClick={handleAboutClick}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        About Me
      </motion.button>
      <div className="w-screen overflow-x-scroll hide-scrollbar smooth-scroll flex items-center ">
        <div className="flex flex-nowrap ">
          {projects.map((item, index) => (
            <Card
              key={index}
              num={(index + 1).toString().padStart(2, "0")}
              title={item.title}
              desc={item.desc}
              bgColor={item.bgColor}
              index={index}
              img={item.cover}
              // bgImg={item.bgImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
