"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Card({ num, name, bgColor, img }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[29rem] min-h-screen border-r-2 border-gray-300 bg-white text-black flex flex-col gap-10 justify-center items-start pl-[2%] pr-[5%] cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? bgColor : "#ffffff",
        color: isHovered ? "#ffffff" : "#000000",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col gap-3 relative z-10"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -40 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <h1 className="text-3xl font-normal">{num}</h1>
        <h1 className="text-3xl font-semibold">{name}</h1>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          quality={100}
          //   className="w-[100px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
}
