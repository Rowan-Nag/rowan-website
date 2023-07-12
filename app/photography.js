'use client'

import { useRef } from "react"
import Astroimg from "./Components/astroImg"
import useOnScreen from "./Components/useOnScreen"
import andromeda from "./res/andromedagalaxy.webp"
import heart from "./res/heartnebula.webp"
import na from "./res/nanebula.webp"
import orion from "./res/orionnebula.webp"
import pleiades from "./res/pleiades.webp"
import ring from "./res/ringnebula.webp"
import rosette from "./res/rosettenebula.webp"
import veil from "./res/veilnebula.webp"

import Image from "next/image"

export default function Astrophotography(){

    const ref = useRef(null)
    const activated = useOnScreen(ref)

    return(
        <div className='relative min-h-screen w-full z-0 flex flex-col justify-around items-center pb-8' style={{boxShadow:"0px 10px black"}}id="photography">
            <div className='w-full top-0 h-4 bg-black bg-gradient-to-t to-neutral-950 from-neutral-900'></div>
            <div className="self-center m-5">
                <div className="bg-neutral-900 bg-opacity-90 relative w-full h-full text-neutral-400 text-md font-rubik text-center border-4 border-neutral-700 p-4">
                    All photos taken by me. <br/>
                    I've done astrophotography since I first got my telescope - sophomore year of highschool. <br/><br/>
                    I shot them using a refractor telescope & a motorized equatorial mount. <br/><br/>
                    Shot & Tracked using N.I.N.A, PHD2, ASTAP Platesolving, Platesolve2, and others.<br/><br/>
                    Stacked & Edited using Deepskystacker & Adobe Photoshop.
                    
                    
                    
                    </div>
                <div className=""></div>
            </div>
            <div className="flex flex-row flex-wrap mx-auto justify-center" ref={ref}>
                <Astroimg src={andromeda} alt="Photograph of andromeda galaxy" url="https://www.instagram.com/p/CXXic_OLN2b/?img_index=1"/>
                <Astroimg src={heart}     alt="Photograph of heart nebula" url="https://www.instagram.com/p/CVMOFoZp9jD/?img_index=1"/>
                <Astroimg src={na}        alt="Photograph of north american nebula" url="https://www.instagram.com/p/ClwzPEApaog/?img_index=1"/>
                <Astroimg src={orion}     alt="Photograph of orion nebula" url="https://www.instagram.com/p/CZdWSQhlUR0/?img_index=1"/>
                <Astroimg src={pleiades}  alt="Photograph of the pleiaddes stars" url="https://www.instagram.com/p/CZqyZlrL41m/?img_index=1"/>
                <Astroimg src={ring}      alt="Photograph of ring nebula" url="https://www.instagram.com/p/CuYOLovrmVS/?img_index=1"/>
                <Astroimg src={rosette}   alt="Photograph of rosette nebula" url="https://www.instagram.com/p/Cm-NyMzP7N4/?img_index=1"/>
                <Astroimg src={veil}      alt="Photograph of veil nebula" url="https://www.instagram.com/p/Cga6iairULs/?img_index=1"/>


            </div>
        </div>
    )
}