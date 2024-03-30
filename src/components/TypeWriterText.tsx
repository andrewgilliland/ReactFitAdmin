"use client";
import { sleep } from "@/lib/utils";
import { FC, useEffect, useState } from "react";

type TypeWriterTextProps = {
  /** The array of words or word to be typed out */
  words: string[];
};

/**
 * A component that types out a word or array of words in a typewriter fashion
 * @param words The array of words or word to be typed out
 * @returns A typewriter effect of the words passed in
 */
const TypeWriterText: FC<TypeWriterTextProps> = ({ words }) => {
  const [currentText, setCurrentText] = useState("");

  const sleepTime = 100;

  const typeWords = async () => {
    let currentPhraseIndex = 0;

    while (true) {
      const word = words[currentPhraseIndex];

      for (let i = 0; i < word.length; i++) {
        setCurrentText(word.slice(0, i + 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 20);

      for (let i = word.length; i > 0; i--) {
        setCurrentText(word.slice(0, i - 1));
        await sleep(sleepTime);
      }

      currentPhraseIndex = currentPhraseIndex === words.length - 1 ? 0 : +1;
    }
  };

  useEffect(() => {
    typeWords();
  }, []);

  return (
    <span>
      <span className="text-pink-400">{currentText}</span>
      <span className="font-bold text-cyan-400 animate-blink">|</span>
    </span>
  );
};

export default TypeWriterText;
