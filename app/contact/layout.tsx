import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdullah Almazyad - Digital Product Manager based in Riyadh, Saudi Arabia.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
