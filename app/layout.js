import './globals.css'
import "@fontsource/merriweather"
import "@fontsource/rubik"


export const metadata = {
  title: 'Rowan Nag | Student at Purdue University',
  description: "I'm Rowan Nag, a current undergraduate student at Purdue University studying Planetary Science and Physics. I do web-development, photography, and science-things.",
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
