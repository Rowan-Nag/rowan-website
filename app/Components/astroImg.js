export default function Astroimg({src, url}){


    return (
        <div className="border-4 m-2 border-neutral-800 h-40vh max-h-60">
            <img src = {src} className="w-full h-full"/>
        </div>
    )
}