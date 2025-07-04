import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Provider from "@/components/Provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BlockOps - AI-Powered Financial Management",
  description: "Track, save, and grow your wealth with AI-powered financial insights",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider></body>
    </html>
  )
}

