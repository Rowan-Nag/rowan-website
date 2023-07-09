'use client'

import { useRef } from "react"
import Astroimg from "./Components/astroImg"
import useOnScreen from "./Components/useOnScreen"
import andromeda from "./andromeda_lowres.webp"
import Image from "next/image"

export default function Astrophotography(){

    const ref = useRef(null)
    const activated = useOnScreen(ref)

    return(
        <div className='relative min-h-screen w-screen bg-neutral-900 z-0 flex flex-col justify-around'>
            <div className=' absolute -top-4 w-full h-8 backdrop-blur-sm'></div>
            <div className="place-self-center ml-5">
                <div className="relative w-full h-full text-neutral-400 text-md font-rubik text-center self-centers border-4 border-neutral-700 p-4">
                    All photos taken by me. <br/>
                    I've done astrophotography since I first got my telescope - sophomore year of highschool. <br/><br/>
                    I shot them using a refractor telescope & a motorized equatorial mount. <br/><br/>
                    Shot & Tracked using N.I.N.A, PHD2, ASTAP Platesolving, Platesolve2, and others.<br/><br/>
                    Stacked & Edited using Deepskystacker & Adobe Photoshop.
                    
                    
                    
                    </div>
                <div className=""></div>
            </div>
            <div className="w-full h-full grid grid-cols-3 justify-around self-center p-5" ref={ref}>
                <Image src={andromeda}  placeHolder='blur'/>
                
                {/* <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/> */}


            </div>
        </div>
    )
}