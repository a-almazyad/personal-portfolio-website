"use client"

import Link from "next/link"
import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AboutWhatIDoSection } from "@/components/about-sections"
import { ArrowRight, Briefcase, TrendingUp, Target, ExternalLink } from "lucide-react"

function HeroSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()
  const aboutIntro = dictionary.about.bio[lang][0]

  return (
    <section ref={ref} className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col items-start gap-6">
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t(dictionary.identity.name, lang)}
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">
              {t(dictionary.identity.headline, lang)}
            </p>
            <p className="text-sm text-muted-foreground">
              {t(dictionary.identity.location, lang)}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {t(dictionary.home.viewPortfolio, lang)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {t(dictionary.home.contact, lang)}
            </Link>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {aboutIntro}
          </p>
        </div>
      </div>
    </section>
  )
}

function HighlightsSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  const highlights = [
    {
      icon: Briefcase,
      title: dictionary.home.highlights.productLeadership.title,
      desc: dictionary.home.highlights.productLeadership.desc,
    },
    {
      icon: TrendingUp,
      title: dictionary.home.highlights.fintech.title,
      desc: dictionary.home.highlights.fintech.desc,
    },
    {
      icon: Target,
      title: dictionary.home.highlights.strategy.title,
      desc: dictionary.home.highlights.strategy.desc,
    },
  ]

  return (
    <section ref={ref} className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title.en}
              className="group rounded-lg border border-border p-6 transition-all hover:border-muted-foreground/20 hover:shadow-sm"
            >
              <item.icon className="mb-4 h-5 w-5 text-muted-foreground" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t(item.title, lang)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(item.desc, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedWorkSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
          {t(dictionary.home.featuredWork, lang)}
        </h2>
        <div className="rounded-lg border border-border p-6 transition-all hover:border-muted-foreground/20 hover:shadow-sm md:p-8">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t(dictionary.portfolio.ibanGenerator.role, lang)}
              </p>
              <h3 className="text-xl font-semibold text-foreground">
                {t(dictionary.portfolio.ibanGenerator.title, lang)}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t(dictionary.portfolio.ibanGenerator.context, lang)}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/portfolio/saudi-iban-generator"
                className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {t(dictionary.portfolio.ibanGenerator.caseStudy, lang)}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://saudi-iban-generator.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {t(dictionary.portfolio.ibanGenerator.liveDemo, lang)}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <AboutWhatIDoSection />
      <FeaturedWorkSection />
    </>
  )
}
