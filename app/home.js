'use client'

import andromedaImg from "./andromeda_lowres.webp"
import { useEffect, useRef, useState } from "react"
import useOnScreen from "./Components/useOnScreen"

export default function Home(){

    const ref = useRef(null)
    let [activated, activate] = useState(false)
    useEffect(()=>{activate(true)})
    // const activated= true
    return(
    <div className='flex flex-row relative z-0 h-screen w-screen bg-fixed overflow-hidden min-h-fit'>

        <div
        className='transition-all duration-1000 self-center opacity-0 w-[40%] md:w-[80%]
         min-w-[20em] min-h-[16em] overflow-hidden fixed z-30 p-10 md:p-5 md:text-center pr-4 
         mb-40 md:mb-0 ml-24 md:ml-[10%] h-2/6 flex flex-col justify-evenly text-white font-oxanium
          border-neutral-500 border-solid border-4 '
        style={{opacity: (activated ? 1 : 0 )}}
        transition={{
            duration:1
        }}
        >
            <div className='absolute left-0 bottom-0  w-full h-[80%] backdrop-blur-sm bg-gradient-to-t
             from-[rgba(161,167,203,0.37)] to-transparent 
             md:to-[rgba(0,0,0,.7)] md:h-full md:backdrop-blur-none md:from-[rgba(20,20,20,.7)]
             '></div>
            
            <div className='transition-all duration-300 delay-600 relative w-[100%] overflow-hidden font-bs font-bold text-6xl'
                style={

                ...activated ? {
                    top:'0px',
                    opacity:1
                } :{
                    top:'90px',
                    opacity:0
                }}
            ><span className="bg-gradient-to-t from-neutral-400 to-white bg-clip-text text-transparent">ROWAN NAG</span></div>
            {["Student", "Scientist", "Astronomer"].map((_, i)=>(
                <div 
                key={i}
                className='text-neutral-300 transition-all relative left-10 md:left-0 text-3xl overflow-hidden' 
                style={{
                    transitionDelay: `${400+i*150}ms`,
                    ...activated ? {
                        top:'0px',
                        opacity:1
                    } :{
                        top:'120px',
                        opacity:0
                    }}}
                    >{_}</div>
            ))}
        </div>
                        {/* ANDROMEDA START */}
        <div    
            ref={ref}
            className= 'transition-opacity opacity-0 fixed z-10 top-24 right-0 md:right-[15vw] sm:left-0 sm:right-auto w-[80vh] h-80vh bg-contain bg-no-repeat bg-origin-content bg-right' 
            style={{
            backgroundImage: `url(${andromedaImg.src})`,
            transitionDuration:'4000ms',
            opacity: (activated ? 1 : 0)
            }}
            
            >
        <div className=' absolute w-2/6 h-full bg-gradient-to-r from-black to-transparent'></div>
        <div className=' absolute bottom-0 w-full h-30vh bg-gradient-to-t from-black to-transparent'></div>
        <div className=' absolute top-0 w-full h-30vh bg-gradient-to-b from-black to-transparent'></div>
        <div className=' absolute right-0 w-2/6 h-full bg-gradient-to-l from-black to-transparent'></div>
        </div>
                        {/* ANDROMEDA END */}

        <div className="absolute bottom-24 flex w-full flex-row justify-center animate-pulse ">
            <div className="bg-neutral-600 mx-8 w-3 h-6 rotate-90 " style={{clipPath: "polygon(45% 0, 100% 50%, 45% 100%, 0 100%, 55% 50%, 0 0)"}}></div>
            <div className="bg-neutral-600 mx-8 w-3 h-6 rotate-90 " style={{clipPath: "polygon(45% 0, 100% 50%, 45% 100%, 0 100%, 55% 50%, 0 0)"}}></div>
            <div className="bg-neutral-600 mx-8 w-3 h-6 rotate-90 " style={{clipPath: "polygon(45% 0, 100% 50%, 45% 100%, 0 100%, 55% 50%, 0 0)"}}></div>
        </div>
        
            
        
        
        
        

    </div>
    )
}