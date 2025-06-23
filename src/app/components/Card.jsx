"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Card({ num, title, desc, bgColor, img, index, bgImg }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/details/${index + 1}`);
  };

  return (
    <motion.div
      className="relative w-[40rem] min-h-screen border-r-2 border-gray-300 bg-white text-black flex flex-col gap-10 justify-center items-start pl-[2%] pr-[5%] cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      animate={{
        backgroundColor: isHovered ? bgColor : "#ffffff",
        color: isHovered ? "#ffffff" : "#000000",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col gap-3 relative z-10"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -60 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <h1 className="text-3xl font-normal">{num}</h1>
        <h1 className="text-3xl font-semibold">{title}</h1>
      </motion.div>

      {/* Project screenshot - positioned and sized for laptop screenshots */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 40,
          scale: isHovered ? 1 : 0.9,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: isHovered ? 0.1 : 0,
        }}
      >
        <div className="relative">
          {/* Optional: Add a subtle shadow/glow effect */}
          <div className="absolute inset-0 bg-black/10 blur-lg scale-105 rounded-lg" />

          <Image
            src={img}
            alt={title}
            width={420}
            height={260}
            quality={95}
            className="relative w-auto h-[200px] max-w-[420px] object-contain rounded-lg shadow-2xl border border-white/20"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
            }}
          />
        </div>
      </motion.div>

      {/* Optional: Add a subtle description that appears on hover */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isHovered ? 0.8 : 0,
          y: isHovered ? 0 : 20,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          delay: isHovered ? 0.2 : 0,
        }}
      >
        <p className="text-sm font-light max-w-[300px] line-clamp-2">{desc}</p>
      </motion.div>
    </motion.div>
  );
}
