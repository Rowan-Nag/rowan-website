import './globals.css'
import {Rubik, Big_Shoulders_Stencil_Display, Nova_Mono, JetBrains_Mono, Oxanium} from 'next/font/google'
import "@fontsource/merriweather"
import "@fontsource/rubik"


export const metadata = {
  title: 'Rowan Nag',
  description: 'Undergraduate Student @ Purdue University, EAPS Departrment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className="">{children}</body>
    </html>
  )
}
