import React from 'react'
import "./Keyboard.css"

const KEYS = [
    "а",
    "б",
    "в",
    "г",
    "д",
    "ѓ",
    "е",
    "ж",
    "з",
    "ѕ",
    "и",
    "ј",
    "к",
    "л",
    "љ",
    "м",
    "н",
    "њ",
    "о",
    "п",
    "р",
    "с",
    "т",
    "ќ",
    "у",
    "ф",
    "х",
    "ц",
    "ч",
    "џ",
    "ш",
]

const Keyboard = ({activeLetters,inactiveLetters,addGuessedLetter}) => {
  return (
    <div className='keyboard-container'>
        {KEYS.map(key=> {
            const isActive=activeLetters.includes(key)
            const isInActive=inactiveLetters.includes(key)
            return (
                <button style={{backgroundColor:isActive ? "hsl(40,100%,50%)":"",color:isActive?"white" : "",opacity:isInActive?".3":""}} onClick={()=>addGuessedLetter(key)} className="keyboard" key={key}
                disabled={isInActive || isActive}>{key}</button>
            )
        })}
    </div>
  )
}

export default Keyboard