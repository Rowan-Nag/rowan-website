export default function StickyHeader(){

    return (
        <header className='fixed text-neutral-300 top-0 flex flex-row justify-between bg-neutral-900 bg-opacity-90 w-full z-20 border-2 border-neutral-700 rounded-sm select-none sm:hidden font-[quicksand]'>
            
            <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#home">Home</a>
            <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#about">About</a>
            <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#photography">Astrophotography</a>
            <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#contact">Contact</a>

        </header>
        )
}