"use client";
import { useEffect } from "react";
import Card from "./components/Card";
import homeCards from "./data";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center">
      <div className="w-screen overflow-x-scroll hide-scrollbar smooth-scroll flex items-center ">
        <div className="flex flex-nowrap ">
          {homeCards.map((item) => (
            <Card
              key={item.num}
              num={item.num}
              name={item.name}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
