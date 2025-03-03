"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen"; // Adjust path if needed
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleSplashComplete = () => {
    setLoading(false);
    document.body.style.overflow = "auto";
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {loading ? (
          <SplashScreen onComplete={handleSplashComplete} />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
