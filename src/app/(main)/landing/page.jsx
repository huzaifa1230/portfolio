"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="flex justify-center items-center pt-10 min-h-screen relative">
      <div className="max-w-5xl h-96 w-full bg-slate-500 p-10 rounded-lg flex items-center justify-center">
        <p className="text-white text-2xl font-bold">CHAAAA 😀😀😀</p>
      </div>

      <motion.div
        className="max-w-5xl h-96 w-full bg-white absolute top-0 flex items-center justify-center rounded-lg"
        initial={{ y: 150 }}
        whileHover={{ y: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="text-black text-xl font-semibold">HELLO HELLO TESTING</p>
      </motion.div>
    </div>
  );
}
