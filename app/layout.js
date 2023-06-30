import './globals.css'
import {Rubik, Big_Shoulders_Stencil_Display, Nova_Mono, JetBrains_Mono, Oxanium} from 'next/font/google'

const a = Rubik({ 
  subsets: ['latin'],
  variable: '--font-rubik'
})
const b = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jb-mono'
})
const c = Oxanium({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-oxanium'
})
const d = Big_Shoulders_Stencil_Display({ 
  subsets: ['latin'],
  variable: '--font-big-shoulders'
})

export const metadata = {
  title: 'Rowan Nag',
  description: 'Undergraduate Student @ Purdue University, EAPS Departrment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${a.variable} ${b.variable} ${c.variable} ${d.variable}`}>{children}</body>
    </html>
  )
}
