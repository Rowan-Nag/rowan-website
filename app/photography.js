import Astroimg from "./Components/astroImg"
import andromeda from "./andromeda_lowres.webp"


export default function Astrophotography(){

    return(
        <div className='relative h-screen w-screen bg-neutral-900 z-0 flex flex-row'>
            <div className=' absolute -top-4 w-full h-8 backdrop-blur-sm'></div>
            <div className="w-2/6 ml-20 self-center" >
                <div className="relative w-full h-32 text-neutral-400 top-20 text-xl font-rubik text-center self-center">
                    All photos taken by me. <br/>
                    I've done astrophotography since I first got my telescope - sophomore year of highschool. <br/>
                    
                    
                    
                    
                    </div>
                <div className=""></div>
            </div>
            <div className="flex flex-row flex-wrap justify-around mr-20 self-center">
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>
                <Astroimg src={andromeda.src}/>

            </div>
        </div>
    )
}