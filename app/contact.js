'use client'
import { useRef } from "react";

import Image from "next/image"
import mars from "./res/marsSurface.webp"

import { fontawesome }from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useOnScreen from "./Components/useOnScreen";


export default function Contact(){

    const ref = useRef(null)
    const activated = useOnScreen(ref)

    return(
        <div className="relative backdrop-invert bg-neutral-400 bg-opacity-60">
            {/* <div className="absolute h-4 w-full -top-2 "></div> */}
            <div className="h-90vh w-full flex">
                <div className="border-2 border-neutral-300 rounded-lg self-center mx-auto bg-neutral-500 bg-opacity-70 p-6 text-center text-neutral-100 delay-100 transition-opacity duration-700"
                style={{opacity: (activated ? 1 : 0)}}>
                    <div className="text-6xl text-shadow-sm md:text-4xl mb-4">Contact Me</div>
                    <div className="flex flex-wrap flex-col w-full">
                        <a className="p-2 px-4 w-fit mx-auto transition-colors hover:text-neutral-300" target="_blank" href="https://github.com/Rowan-Nag">
                            Github<p/>
                            <FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faGithub}/>
                        </a>

                        <a className="p-2 px-4 w-fit mx-auto transition-colors hover:text-neutral-300" target="_blank" href="https://www.instagram.com/rowan.nag/">
                            Instagram<p/>
                            <FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faInstagram}/>
                        </a>

                        <a className="p-2 px-4 w-fit mx-auto transition-colors hover:text-neutral-300" target="_blank" href="https://www.linkedin.com/in/rowan-nag-25221121a/">
                            LinkedIn<p/>
                            <FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faLinkedinIn}/>
                        </a>

                        <a className="p-2 px-4 w-fit mx-auto transition-colors hover:text-neutral-300" target="_blank" href="mailto: nag5@purdue.edu">
                            nag5@purdue.edu<p/>
                            <FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faEnvelope}/>
                        </a>

                    </div>
                </div>
            </div>
            <div className="relative overflow-x-hidden " ref={ref}>
                <Image 
                src={mars}
                className="relative  min-w-[1000px] transition-opacity duration-1500"
                width={3712}
                height={590} 
                style={{
                    filter:"grayscale(85%) drop-shadow(0px -5px 5px rgba(30,0,0,.7))",
                    objectFit:"contain",
                    opacity: (activated ? 1 : 0)
                }} placeholder="empty" id="contact"
                alt="drawing of a planetary surface with comets raining down"/>
                {/* <div className="absolute w-full h-12 -top-4 bg-gradient-to-b from-transparent to-black -z-10"></div> */}
            </div>
        </div>
    )
}