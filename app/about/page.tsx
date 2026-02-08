"use client"

import type { Metadata } from "next"
import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { CheckCircle2 } from "lucide-react"

function BioSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()
  const bios = dictionary.about.bio[lang]

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="shrink-0">
            <div className="h-24 w-24 overflow-hidden rounded-full border border-border bg-muted">
              <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-muted-foreground">
                {lang === "en" ? "AA" : "ع م"}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {t(dictionary.about.title, lang)}
            </h1>
            {bios.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatIDoSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          {t(dictionary.about.whatIDo, lang)}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {dictionary.about.skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border p-4 transition-all hover:border-muted-foreground/20 hover:shadow-sm"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-sm leading-relaxed text-foreground">
                {t(skill, lang)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <BioSection />
      <WhatIDoSection />
    </>
  )
}
