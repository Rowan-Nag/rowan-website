
import Astrophotography from './photography'
import About from './about'
import Header from "./header"
import HomeTest from './homeTest'
import Contact from './contact'

export default function Page() {
  const  shadow =  {textShadow: '0px 0px 0 lightgray, 1px 0px 0 lightgray, -1px 0px 0 lightgray, 0px 1px 0 lightgray'}

  return (
    <main className="flex flex-col min-h-screen justify-center text-neutral-300 font-rubik bg-neutral-900 max-w-full">        
    
    {/* <StickyHeader/> */}
    {/* <Home/> */}

      <Header/>
      <HomeTest/>
      <About/>
      <Astrophotography/>
      <Contact/> 



   
    
    </main>
  )

}
