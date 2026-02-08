import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional experience, education, and certifications of Abdullah Almazyad - Digital Product Manager.",
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children
}
