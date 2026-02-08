import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on product management, fintech, and digital transformation by Abdullah Almazyad.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
