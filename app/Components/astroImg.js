import { useEffect, useState } from "react"
import Image from "next/image"

export default function Astroimg({src, url}){



    return (
        <div className="h-auto w-auto backdrop-grayscale">
            <Image src = {src} className="md:w-[80%] -z-10 m-5 md:m-2 p-0 border-2 border-neutral-400 cursor-pointer grayscale-[70%] brightness-90 hover:grayscale-0 hover:brightness-100" placeHolder='blur'/>
        </div>
    )
}