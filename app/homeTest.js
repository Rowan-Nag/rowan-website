'use client'
import { animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm
import { TransitionGroup, CSSTransition } from 'react-transition-group' // ES6

export default function HomeTest(){

    const numStars = 8
    const [stars, updateStars] = useState([])
    const starContainer = useRef(null)


    let random = (min, max)=>{
        return min+ Math.floor(Math.random()*((max-min)+1))
    }

    let createTemporaryStar = (x, y)=>{
        let xPos = x-starContainer.current.offsetLeft
        let yPos = y-starContainer.current.offsetTop
        console.log(xPos, yPos)
        let star = 
        <CSSTransition 
        key = {stars.length}
        unmountOnExit
        classNames="stars">
            <div style={{transformOrigin: 'left',transform: `translateX(${xPos}px) translateY(${yPos}px) rotate(-80deg)`}}>
            <div 
                key = {stars.length}
                className="bottom-0 w-[200px] opacity-0 h-[0.5px] bg-gradient-to-r from-white to-transparent absolute"
                style={{
                    
                    animation: `star ${2+Math.random()*7}s linear`
                }}
            ></div>
            </div>
        </CSSTransition>

        updateStars([star, ...stars])
    }

    let generateStars = (numStars)=>{
        // speed = random(3, 8)
        // delay = random(0,4)  The rounding here causes them to sync up. ew.
        let stars = []

        for(let i = 0; i < numStars; i++){
            let speed = 3+Math.random()*8
            let delay = Math.random()*5
            let offsetY = random(10, 50)
            let offsetX = random(10, 95)
    
            stars.push(
            <CSSTransition 
                key = {stars.length}
                
                classNames="stars">
                <div style={{
                    transformOrigin: 'left',
                    transform: `translateX(${offsetX}vw) translateY(${-offsetY}vh) rotate(-80deg)`}}>

                    <div 
                        key = {stars.length}
                        className="bottom-0 w-[200px] opacity-0 h-[1px] bg-gradient-to-r from-white to-transparent absolute"
                        style={{
                            animation: `star ${speed}s linear infinite ${delay}s`
                        }}
                    ></div>
                </div>
            </CSSTransition>)
        }

        updateStars(stars)
        
    }


    

    useEffect(()=>{
        generateStars(numStars)
    },[])
    
   

    return(
        <div 
        className="w-screen h-screen bg-neutral-900 flex flex-col justify-around"
        onMouseDown={e=>{
            createTemporaryStar(e.clientX,e.clientY)
            console.log(e.clientX, e.clientY)
        }}
        >
            <div className="absolute self-start z-0" ref={starContainer}>

                <TransitionGroup>
                    {stars}
                </TransitionGroup>
                <div className="animate-star"></div>
            </div>
            <div className="z-10 bg-neutral-800 self-center text-center p-4 border-neutral-600 border-2 text-neutral-300">
                <div className="text-6xl font-serif md:text-4xl">ROWAN NAG</div>
                <div className="text-4xl font-serif md:text-2xl">Planetary Scientist</div>
            </div>

        </div>
    )
}