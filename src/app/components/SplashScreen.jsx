"use client";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Welcome", "To", "My Website"];

const SplashScreen = ({ onComplete }) => {
  const [index, setIndex] = useState(-1);
  const [showOverlay, setShowOverlay] = useState(true);
  const [finalOverlay, setFinalOverlay] = useState(false);

  useEffect(() => {
    const sequence = setTimeout(() => {
      setShowOverlay(false);
      setIndex(0);
    }, 1000);

    return () => clearTimeout(sequence);
  }, []);

  useEffect(() => {
    if (index >= 0 && index < words.length) {
      const interval = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(interval);
    } else if (index === words.length) {
      setFinalOverlay(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 flex justify-center items-center text-gray-400 z-50 bg-black"
    >
      <AnimatePresence mode="wait">
        {showOverlay && (
          <motion.div
            key="initial-overlay"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            // exit={{ x: "100%" }}
            transition={{ duration: 1, ease: easeInOut }}
            className="absolute w-96 h-40 bg-gray-500"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!showOverlay && !finalOverlay && (
          <motion.h1
            key={words[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            className="text-7xl font-extrabold"
          >
            {words[index]}
          </motion.h1>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {finalOverlay && (
          <motion.div
            key="final-overlay"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
            className="absolute w-96 h-40 bg-gray-500"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SplashScreen;
