"use client"

import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { PenLine } from "lucide-react"

export default function BlogPage() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h1 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t(dictionary.blog.title, lang)}
        </h1>

        <div className="flex flex-col items-center justify-center rounded-lg border border-border py-20">
          <PenLine className="mb-4 h-8 w-8 text-muted-foreground/50" />
          <p className="text-lg font-medium text-foreground">
            {t(dictionary.blog.comingSoon, lang)}
          </p>
          <p className="mt-2 max-w-md text-center text-sm text-muted-foreground">
            {t(dictionary.blog.comingSoonDesc, lang)}
          </p>

          {/* Placeholder list UI for future posts */}
          <div className="mt-10 w-full max-w-lg space-y-3 px-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-md border border-border/50 p-4"
              >
                <div className="h-3 w-3/4 rounded bg-muted" />
                <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
