import React from 'react'
import "./HangmanWord.css"

const HangmanWord = ({guessedLetters,wordToGuess,reveal}) => {
  return (
    <div className='hangmanWord-container'>
        {wordToGuess.split("").map((letter,index)=>(
            <span style={{borderBottom:".1em solid black"}} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter)||reveal?"visible":"hidden",color:!guessedLetters.includes(letter)&& reveal ? "red":"black"}}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
  )
}

export default HangmanWord