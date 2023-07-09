import { useEffect, useState } from "react"
import Image from "next/image"

export default function Astroimg({src, url}){
    let skeleton = <div className="w-full h-full animate-pulse bg-slate-400 roudned-lg"></div>

    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        setLoaded(true)
    },[])

    return (
        <div className="h-auto w-auto">

            {(loaded ? null : skeleton)}
            <Image src = {src} className="w-full h-full" fill onLoad={()=>{setLoaded(true)}} style={loaded ? {} : {display:'none'}}/>
        </div>
    )
}