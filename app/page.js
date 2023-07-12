
import Astrophotography from './photography'
import About from './about'
// import Home from './home'
import HomeTest from './homeTest'
import Contact from './contact'

export default function Page() {
  const  shadow =  {textShadow: '0px 0px 0 lightgray, 1px 0px 0 lightgray, -1px 0px 0 lightgray, 0px 1px 0 lightgray'}

  return (
    <main className="flex flex-col min-h-screen justify-center text-neutral-300 font-rubik bg-neutral-900 max-w-full">        
    <header className='fixed text-neutral-300 top-0 flex flex-row justify-between bg-neutral-900 bg-opacity-90 w-full z-20 border-2 border-neutral-700 rounded-sm select-none sm:hidden'>

        <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#home">Home</a>
        <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#about">About</a>
        <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#photography">Astrophotography</a>
        <a className='w-full p-3 m-2 mx-8 text-center hover:bg-neutral-800 hover:text-neutral-200 rounded-md cursor-pointer transition-colors' href="#contact">Contact</a>

    </header>
    {/* <StickyHeader/> */}
    {/* <Home/> */}


      <HomeTest/>
      <About/>
      <Astrophotography/>
      <Contact/> 




   
    
    </main>
  )

  // return (
  //   <main className="bg-white flex min-h-screen flex-col items-center justify-between text-black">
  //     <header className="w-screen h-20 bg-slate-200 text-center p-24">
  //       <div className='text-4xl'>
  //         Rowan Nag
  //       </div>
  //     </header>
  //     <div className='flex flex-row justify-between sticky top-0 w-screen h-14 bg-slate-100 text-center border-4'>
  //       {['About Me', 'Projects', 'Photography', 'Contact'].map(_=>(
  //       <div className='w-full h-full px-10 hover:bg-slate-300'>
  //         <div className='my-3'>{_}</div>
  //         </div>
  //       ))}
  //       </div>
  //     <div className='w-screen h-screen bg-slate-900'></div>
  //     <div className='w-4 h-screen bg-black'>

  //     </div>
  //   </main>
  // )
}
