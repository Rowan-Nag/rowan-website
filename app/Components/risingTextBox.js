'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function RisingTextBox({ amount, text }){
    


    // let transitionStyle = {
    //     "transition":"all",
    //     "transition-delay": `${delay}ms`,
    //     "transition-duration": `${duration}ms`,
    //     // "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    //     "height": "100%",
    //     "transform":`scaleX(${scale})`,
    // }
    // let transitionStyleNegative = transitionStyle["transform"] = `scaleX(${2-scale})`
    return (
        // <span className="transition-all duration-1000 delay-200 w-full relative" style={{'top':`${offset}px`}}>{text}</span>
        <motion.span className="w-full relative block" initial={{y:amount, opacity:-10}} animate={{y:0, opacity:[0, .05, 0.1, 0.15, 1]}} transition={{duration:.3}}>{text} </motion.span>
    )
}