"use client"

import Link from "next/link"
import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

const sections = [
  { title: dictionary.caseStudy.overview.title, content: dictionary.caseStudy.overview.content },
  { title: dictionary.caseStudy.problem.title, content: dictionary.caseStudy.problem.content },
  { title: dictionary.caseStudy.solution.title, content: dictionary.caseStudy.solution.content },
  { title: dictionary.caseStudy.howItWorks.title, content: dictionary.caseStudy.howItWorks.content },
  { title: dictionary.caseStudy.impact.title, content: dictionary.caseStudy.impact.content },
  { title: dictionary.caseStudy.techNotes.title, content: dictionary.caseStudy.techNotes.content },
]

export default function CaseStudyPage() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-4 md:px-6">
        <Link
          href="/portfolio"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t(dictionary.portfolio.title, lang)}
        </Link>

        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t(dictionary.caseStudy.title, lang)}
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          {t(dictionary.portfolio.ibanGenerator.role, lang)}
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title.en} className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">
                {t(section.title, lang)}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(section.content, lang)}
              </p>
            </div>
          ))}

          {/* Links section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              {t(dictionary.caseStudy.links, lang)}
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://saudi-iban-generator.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {t(dictionary.portfolio.ibanGenerator.liveDemo, lang)}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/a-almazyad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                GitHub
                <Github className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
