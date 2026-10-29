import type { Viewport } from "next"
import { Public_Sans, Source_Serif_4, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-headline",
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, publicSans.variable, sourceSerif4.variable, "font-body")}
    >
      <body className="bg-surface font-body text-[15px] leading-relaxed text-on-surface antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
