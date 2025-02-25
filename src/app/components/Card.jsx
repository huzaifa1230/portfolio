"use client";
import { motion } from "framer-motion";

export default function Card({ num, name, bgColor }) {
  return (
    <motion.div
      className="w-[460px] min-h-screen border-r-2 border-gray-300 bg-white text-black flex flex-col gap-10 justify-center items-start pl-[2%] pr-[5%]  cursor-pointer"
      whileHover={{ backgroundColor: bgColor, color: "white" }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-3xl font-normal">{num}</h1>
      <h1 className="text-3xl font-semibold">{name}</h1>
    </motion.div>
  );
}
