'use client'
import { useRef, useState } from "react"
import useOnScreen from "./Components/useOnScreen"
import rowanphoto from "./res/rowanphoto.webp"
import Image from "next/image"

import stickyHeader from "./header"

export default function About(){
    
    
    const ref = useRef(null)
    const activated = useOnScreen(ref)
    // const activated = true

    let chevron = (side) => {return {
        clipPath: "polygon(45% 0, 100% 50%, 45% 100%, 0 100%, 55% 50%, 0 0)",
        opacity: (activated ? 1 : 0),
        ... activated ? null : (side=="left" ? {left:"0px"} : {right:"0px"})
    }}

    


    return (
    <div className='relative min-h-screen w-full backdrop-blur-sm z-10 flex flex-row justify-center font-rubik overflow-x-hidden' id="about">
        <div className="absolute w-full h-full"></div>
        <div className="absolute top-1/2 " ref={ref}></div>
        <div className=' absolute w-full h-4 bg-black bg-gradient-to-b to-neutral-950 from-neutral-900'></div>
    
        <div className="transition-all delay-100 duration-2000 absolute w-30vh h-50vh bg-neutral-500 self-center left-10 md:-left-12 sm:hidden" style={chevron("left")}></div>
        <div className="transition-all delay-300 duration-2000 absolute w-40vh h-70vh bg-neutral-400 self-center left-72 md:hidden   sm:hidden" style={chevron("left")}></div>
        <div className="transition-all delay-100 duration-2000 absolute w-30vh h-50vh bg-neutral-500 self-center right-10 -scale-x-100 md:-right-12 sm:hidden" style={chevron("right")}></div>
        <div className="transition-all delay-300 duration-2000 absolute w-40vh h-70vh bg-neutral-400 self-center right-72 -scale-x-100 md:hidden    sm:hidden" style={chevron("right")}></div>
        


            <div 
            className='self-center relative transition-opacity duration-700 delay-700 flex flex-col w-[60%] max-w-lg md:w-[80%] h-fit p-10 sm:py-0 sm:p-4 m-10 sm:m-0 justify-start border-4 border-neutral-400 bg-neutral-300'
            style = {activated ? {'borderOpacity':1} : {'borderColor':'rgba(0,0,0,0)', color:'rgba(0,0,0,.3)'}}
            >
                <Image src={rowanphoto} className="border-2 self-center drop-shadow-sm border-neutral-400 m-10 sm:mt-4" alt="photograph of rowan nag"/>
                <div className='text-lg text-neutral-700 text-center sm:text-base'>
                    
                    My name is Rowan Nag. I'm an undergraduate student at Purdue University. <br/><br/>
                    I'm studying for a double major in Planetary Science and Physics<br/><br/>
                    My hobbies include reading, games, and astrophotography - Check out that section <b>below!</b>
                    
                    </div>
                
            </div>
            <div>


        </div>


        <div className='absolute w-full bottom-0 h-4 bg-black bg-gradient-to-t to-neutral-neutral-950 from-neutral-900'></div>
    </div>
    )
}
