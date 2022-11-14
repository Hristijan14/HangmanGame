import "./App.css";
import { useCallback, useEffect, useState } from "react";
import words from "./words.json";
import HangmanBody from "./components/hangmanbody/HangmanBody";
import HangmanWord from "./components/hangmanWord/HangmanWord";
import Keyboard from "./components/keyboard/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordToGuess);

  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e = KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[а-ш]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="app-container">
      <div className="main-container">
        <div className="result-section">
          {isWinner && (
            <p
              onClick={() => {
                window.location.reload();
              }}
              className="finishedGame"
            >
              Winner! - Play Again.
            </p>
          )}
          {isLoser && (
            <p
              onClick={() => {
                window.location.reload();
              }}
              className="finishedGame"
            >
              Nice Try! - Play Again.
            </p>
          )}
        </div>
        <HangmanBody numberOfGuesses={incorrectLetters.length} />
        <HangmanWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
