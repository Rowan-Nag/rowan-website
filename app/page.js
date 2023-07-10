import Image from 'next/image'
import RisingTextBox from './Components/risingTextBox'

import andromedaImg from './andromeda_lowres.webp'

// import Home from './home'
// import About from './about'
import Astrophotography from './photography'

import About from './about'
import Home from './home'
import StickyHeader from './header'
import HomeTest from './homeTest'

export default function Page() {
  const  shadow =  {textShadow: '0px 0px 0 lightgray, 1px 0px 0 lightgray, -1px 0px 0 lightgray, 0px 1px 0 lightgray'}

  return (
    <main className="flex flex-col min-h-screen justify-center text-black font-rubik">

        
    
    <StickyHeader/>
    {/* <Home/> */}
    <HomeTest/>

    <About/>


    {/* <div className='h-screen w-full bg-neutral-800 flex flex-col justify-around z-0'>
      <div className='text-8xl text-neutral-500 text-center w-ful self-center font-light font-rubik md:text-2xl'>WORK IN PROGRESS <br/> <a className="text-2xl text-blue-500 underline underline-offset-8 md:text-lg" href="https://www.instagram.com/rowan.nag/">See my astrophotography here</a></div>
    </div> */}
    <Astrophotography/>
   
    


   
    
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
