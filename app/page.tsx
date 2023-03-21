"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

import { Inter } from "next/font/google";

import {
  generateRandomNumber,
  getRandomIndex,
  higherGuessMessages,
  lowerGuessMessages,
} from "@/lib/utils";

import styles from "@/app/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [randomNumber, setRandomNumber] = useState<number>(
    generateRandomNumber()
  );
  const [userGuess, setUserGuess] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [hasWon, setHasWon] = useState<boolean>(false);

  useEffect(() => {
    console.log("Number to Guess: ", randomNumber);
  }, [randomNumber]);

  useEffect(() => {
    if (hasWon) {
      setMessage("🎉 You win! 🎉");
    }
  }, [hasWon]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const guess = parseInt(userGuess, 10);
    setMessage("");

    if (guess === randomNumber) {
      setHasWon(true);
    } else {
      setMessage(
        guess < randomNumber
          ? higherGuessMessages[getRandomIndex()]
          : lowerGuessMessages[getRandomIndex()]
      );
    }
  };

  const resetGame = (): void => {
    const newChallenge = generateRandomNumber();
    setRandomNumber(newChallenge);
    setUserGuess("");
    setMessage("");
    setHasWon(false);
  };

  return (
    <div
      className={`min-h-screen  bg-gray-100 bg-opacity-40 flex flex-col py-8 md:py-16 justify-start items-center ${
        hasWon ? "bg-green-500" : message !== "" ? "bg-red-700" : ""
      } ${inter.className}`}
    >
      <div className={`mb-6 text-center w-5/6`}>
        <h1 className={`text-4xl font-bold text-blue-700`}>TransPerfect</h1>
        <h3 className={`text-base font-semibold italic`}>
          Numbers&lsquo; Game
        </h3>
      </div>
      <div className="bg-white shadow-xl shadow-black p-8 rounded-lg w-4/5 max-w-sm h-3/5">
        {!hasWon && (
          <div>
            <h4 className="text-lg italic text-center mb-6 text-gray-500">
              Can you guess the number that i&apos;m thinking of 💭?
            </h4>
          </div>
        )}
        {!hasWon ? (
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={userGuess}
              onChange={handleInputChange}
              min={1}
              max={100}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            {message && (
              <>
                <p className="text-center mb-6 font-medium text-red-600">
                  {message}
                </p>
              </>
            )}
            <button
              disabled={userGuess === ""}
              type="submit"
              className={`w-full cursor-pointer font-semibold py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none ${
                userGuess === "" ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Submit
            </button>
          </form>
        ) : (
          <>
            {message && (
              <p
                className={`mb-4 text-center font-semibold text-xl text-green-500 ${styles.bounce}`}
              >
                {message}
              </p>
            )}
            <button
              onClick={resetGame}
              className="w-full py-2 cursor-pointer font-bold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
            >
              Play again ?
            </button>
          </>
        )}
      </div>
    </div>
  );
}
