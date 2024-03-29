import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Practice Next.js",
  description: "This is just for practice",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' id='root-html'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
