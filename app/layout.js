import './globals.css'
import "@fontsource/merriweather"
import "@fontsource/rubik"


export const metadata = {
  title: 'Rowan Nag | Planetary Scientist',
  description: 'Undergraduate Student at Purdue University, studying Planetary Science and Physics',
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
    apple: './favicon.ico'
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth bg-neutral-900 overscroll-none'>
      <body className="">{children}</body>
    </html>
  )
}
