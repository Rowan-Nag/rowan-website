

import Image from "next/image"




export default function Astroimg({src, url, alt}){


    return (
        
            <div className="h-auto w-auto backdrop-grayscale flex">
                <a target="_blank" href={url}>
                    <Image 
                    width={400}
                    src = {src} 
                    alt={alt}
                    className="md:w-[90%] rounded-md -z-10 m-5 md:mx-auto md:my-2 p-0 border-2 border-neutral-400 cursor-pointer grayscale-[70%] md:grayscale-0 brightness-90 hover:grayscale-0 hover:brightness-100 transition-all"
                    placeholder='blur'/>
                </a>
            </div>
        
    )
}