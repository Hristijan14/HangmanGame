import React from 'react'
import "./HangmanBody.css"

const HEAD = (
    <div className='hangmanHead' />
)
const BODY = (
    <div className='hangmanBody' />
)
const RIGHT_ARM = (
    <div className='hangmanRightArm' />
)
const LEFT_ARM = (
    <div className='hangmanLeftArm' />
)
const RIGHT_LEG = (
    <div className='hangmanRightLeg' />
)
const LEFT_LEG = (
    <div className='hangmanLeftLeg' />
)

const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG]

const HangmanBody = ({numberOfGuesses}) => {
  return (
    <div className='hangman-container'>
        {BODY_PARTS.slice(0,numberOfGuesses)}
        <div className='hangPlatform1' />
        <div className='hangPlatform2' />
        <div className='hangPlatform3' />
        <div className='hangPlatform4' />
    </div>
  )
}

export default HangmanBody