export default function StickyHeader(){

    return (
        <header
            className='font-jb text-md font-normal z-50 w-screen h-10vh bg-transparent text-neutral-700 flex flex-row justify-evenly sticky top-0
            md:hidden'>
            {['Home','About', 'Projects', 'Astrophotography', 'Contact'].map(_=>(
            <div
            className="text-wrap flex backdrop-blur-sm backdrop-grayscale justify-center min-w-[15%] h-[80%] p-2 m-auto  border-solid border-neutral-500 border-2">
                <span 
                className='self-center text-neutral-500 mix-blend-difference'>{_}</span>
            </div>
            ))}
        </header>
        )
}