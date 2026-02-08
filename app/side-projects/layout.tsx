import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Side Projects",
  description:
    "Side projects by Abdullah Almazyad including the Saudi IBAN Generator utility tool.",
}

export default function SideProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
