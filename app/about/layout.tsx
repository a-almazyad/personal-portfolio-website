import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abdullah Almazyad - a digital product manager with expertise in fintech and digital lending solutions.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
