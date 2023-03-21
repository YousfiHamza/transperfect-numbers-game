export const generateRandomNumber = (): number =>
  Math.floor(Math.random() * 100) + 1;

export function getRandomIndex(): number {
  return Math.floor(Math.random() * 5);
}

export const lowerGuessMessages = [
  "👇 Go lower! 👇",
  "📉 Give me a lower guess. 📉",
  "⬇️ Try a lower number. ⬇️",
  "🔽 Guess a lower value. 🔽",
  "🔻 Decrease your guess. 🔻",
];

export const higherGuessMessages = [
  "👆 Go higher! 👆",
  "📈 Give me a higher guess. 📈",
  "⬆️ Try a higher number. ⬆️",
  "🔼 Guess a higher value. 🔼",
  "🔺 Increase your guess. 🔺",
];
