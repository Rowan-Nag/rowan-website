import { useEffect, useState, useMemo } from "react"


export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
    let observer = null
    // const observer = useMemo(() => { console.log("O B S E R V E D"); return IntersectionObserver(
    //   ([entry]) => setIntersecting(entry.isIntersecting)
    // )}, [ref])
  
  
    useEffect(() => {
      observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      
      )
      observer.observe(ref.current)
      return () => observer.disconnect()
    }, [])
  
    return isIntersecting
  }
/*
Code from GuCier on Github
https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
 - modified from typeScript to vanilla js (sorry)

*/