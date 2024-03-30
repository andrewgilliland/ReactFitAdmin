"use client";
import { useEffect, useState } from "react";

const TypeWriterText = ({ text }: { text: string }) => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const phrases = ["fitter", "stronger", "healthier", "happier", "better"];

  useEffect(() => {
    if (index === text.length) {
      setIndex(0);
      setCurrentText("");
    }
    const interval = setInterval(() => {
      setCurrentText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 800);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <span>
      <span className="text-pink-400">{currentText}</span>
      <span className="font-bold text-cyan-400 animate-blink">|</span>
    </span>
  );
};

export default TypeWriterText;
