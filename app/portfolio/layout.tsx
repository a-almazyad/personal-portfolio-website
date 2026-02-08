import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View portfolio work by Abdullah Almazyad including digital product management projects and fintech solutions.",
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
