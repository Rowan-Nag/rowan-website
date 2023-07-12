'use client'
import { animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
// var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup') // ES5 with npm
import { TransitionGroup, CSSTransition } from 'react-transition-group' // ES6

export default function HomeTest(){

    const numStars = 8
    const starSize = "1"
    const starTailSize =300

    const [stars, updateStars] = useState([])
    const starContainer = useRef(null)


    let random = (min, max)=>{
        return min+ Math.floor(Math.random()*((max-min)+1))
    }

    let createTemporaryStar = (x, y)=>{
        let xPos = x-starContainer.current.offsetLeft
        let yPos = y-starContainer.current.offsetTop
        let speed = 2+Math.random()*6
        console.log(xPos, yPos)
        let star = 
        <CSSTransition 
        key = {stars.length}
        timeout={speed*1000}
        unmountOnExit
        classNames="stars">
            <div style={{transformOrigin: 'left',transform: `translateX(${xPos}px) translateY(${yPos}px) rotate(-80deg)`}}>
            <div 
                key = {stars.length}
                className= "bottom-0 opacity-0 bg-gradient-to-r from-white to-transparent absolute"
                style={{
                    width: starTailSize +"px",
                    height: starSize + "px",
                    animation: `star ${speed}s linear`
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
            let offsetY = random(30, 60)
            let offsetX = random(-50, 50)
    
            stars.push(
            <CSSTransition 
                key = {stars.length}
                
                classNames="stars">
                <div style={{
                    transformOrigin: 'left',
                    transform: `translateX(${offsetX}vw) translateY(${-offsetY}vh) rotate(-80deg)`}}>

                    <div 
                        key = {stars.length}
                        className={`bottom-0 opacity-0 bg-gradient-to-r from-white to-transparent absolute`}
                        style={{
                            width: starTailSize +"px",
                            height: starSize + "px",
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
        id="home"
        className="w-full h-screen bg-neutral-900 flex flex-col justify-around items-center text-neutral-300 "
        onMouseDown={e=>{
            createTemporaryStar(e.clientX,e.clientY)
            console.log(e.clientX, e.clientY)
        }}
        >
            <div className="self-center z-0 fixed" ref={starContainer}>

                <TransitionGroup>
                    {stars}
                </TransitionGroup>
                <div className="animate-star"></div>
            </div>
            <div className="relative m-[10%] select-none z-10 bg-neutral-900 bg-opacity-90 text-center p-4 border-neutral-500 border-4 rounded-md">
                <div className="text-6xl font-merriweather md:text-4xl">ROWAN NAG</div>
                <div className="text-4xl font-merriweather md:text-2xl">Planetary Scientist</div>
            </div>

            {/* <div className="bg-neutral-800 z-10 border-4 border-neutral-700 rounded-md text-neutral-400 text-lg p-4 flex-grow-0 w-1/4">
                "The theorem of everything is not one to pe forgotten lorem ipsum et al dues conflict signalis"    
            </div>  */}

        </div>
    )
}