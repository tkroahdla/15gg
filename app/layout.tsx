import './globals.css'
import { Montserrat } from "@next/font/google"
import Logo from './logo'
import SwrConfig from './swrConfig'



const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})


export const metadata = {
  title: '15GG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SwrConfig>
      <html lang="en">
        <body
          className={`${montserrat.variable} font-montserrat bg-[#E8D5C4]`}
        >
          <Logo />
          {children}
        </body>
      </html >
    </SwrConfig>
  )
}
