"use client";
import { useEffect } from "react";
import Card from "./components/Card";
// import homeCards from "./data";
import { projects } from "../config/index";
import "../style.css";

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
