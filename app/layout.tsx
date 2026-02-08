import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, IBM_Plex_Sans_Arabic } from "next/font/google"
import { ThemeProvider } from "@/lib/theme-context"
import { LanguageProvider } from "@/lib/language-context"
import { AppShell } from "@/components/app-shell"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
})

export const metadata: Metadata = {
  title: {
    default: "Abdullah Almazyad - Digital Product Manager",
    template: "%s | Abdullah Almazyad",
  },
  description:
    "A digital product manager with a knack for turning ideas into impactful products that drive growth.",
  openGraph: {
    title: "Abdullah Almazyad - Digital Product Manager",
    description:
      "A digital product manager with a knack for turning ideas into impactful products that drive growth.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${ibmPlexArabic.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>
            <AppShell>{children}</AppShell>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
