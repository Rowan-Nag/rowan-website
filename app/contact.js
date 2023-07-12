import Image from "next/image"
import mars from "./res/marsSurface.webp"

export default function Contact(){

    return(
        <div className="relative backdrop-invert bg-neutral-400 bg-opacity-60">
            {/* <div className="absolute h-4 w-full -top-2 "></div> */}
            <div className="h-90vh w-full flex">
                <div className="border-2 border-neutral-300 self-center mx-auto bg-neutral-400 p-4">
                    <div className="text-6xl text-shadow-sm text-white">Contact Me</div>
                    <div className="flex flex-wrap flex-row w-full">
                        <div className="p-4">Github</div>
                        <div className="p-4">Twitter</div>
                        <div className="p-4">Github</div>
                        <div className="p-4">Github</div>

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