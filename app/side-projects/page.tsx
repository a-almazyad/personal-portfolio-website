"use client"

import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ExternalLink, Github } from "lucide-react"

export default function SideProjectsPage() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h1 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t(dictionary.sideProjects.title, lang)}
        </h1>

        <div className="grid gap-6">
          <div className="rounded-lg border border-border p-6 transition-all hover:border-muted-foreground/20 hover:shadow-sm md:p-8">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  {t(dictionary.portfolio.ibanGenerator.title, lang)}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(dictionary.sideProjects.ibanNote, lang)}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://saudi-iban-generator.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  {t(dictionary.sideProjects.live, lang)}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/a-almazyad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {t(dictionary.sideProjects.github, lang)}
                  <Github className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
