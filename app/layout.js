import './globals.css'
import "@fontsource/rubik"
import "@fontsource/quicksand"
import "@fontsource/philosopher"


export const metadata = {
  title: 'Rowan Nag • Undergraduate • Purdue University',
  description: "I'm Rowan Nag, a current undergraduate student at Purdue University studying Planetary Science and Physics. I do web-development, photography, and science-things.",
  openGraph :{
    title: "Rowan Nag • Undergraduate Student",
    description: 
    "Planets, Physics, Programming | Studying @ Purdue University"

  },
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
    apple: './favicon.ico'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth bg-neutral-900'>
      <body className="">{children}</body>
    </html>
  )
}
