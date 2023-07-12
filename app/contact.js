import Image from "next/image"
import mars from "./res/marsSurface.webp"
import { fontawesome }from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){

    return(
        <div className="relative backdrop-invert bg-neutral-400 bg-opacity-60">
            {/* <div className="absolute h-4 w-full -top-2 "></div> */}
            <div className="h-90vh w-full flex">
                <div className="border-2 border-neutral-300 self-center mx-auto bg-neutral-500 bg-opacity-70 p-4 text-center text-neutral-100">
                    <div className="text-6xl text-shadow-sm">Contact Me</div>
                    <div className="flex flex-wrap flex-col w-full">
                        <a href="https://github.com/Rowan-Nag" className="p-2 px-4 w-fit mx-auto">Github<FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faGithub}/></a>
                        <a href="" className="p-2 px-4 w-fit mx-auto">Instagram<FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faInstagram}/></a>
                        <a href="mailto: nag5@purdue.edu" className="p-2 px-4 w-fit mx-auto">LinkedIn<FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faLinkedinIn}/></a>
                        <a href="https://www.linkedin.com/in/rowan-nag-25221121a/" className="p-2 px-4 w-fit mx-auto">nag5@purdue.edu<FontAwesomeIcon className="w-8 h-8 mx-auto" icon={faEnvelope}/></a>
                    </div>
                </div>
            </div>
            <div className="relative overflow-x-hidden">
                <Image src={mars} className="relative  min-w-[1000px]" width={3712} height={590} 
                style={{
                    filter:"grayscale(85%) drop-shadow(0px -5px 5px rgba(30,0,0,.7))",
                    objectFit:"contain"
                }} placeholder="empty" id="contact"/>
                {/* <div className="absolute w-full h-12 -top-4 bg-gradient-to-b from-transparent to-black -z-10"></div> */}
            </div>
        </div>
    )
}