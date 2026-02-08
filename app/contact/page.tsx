"use client"

import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactPage() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <h1 className="mb-10 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t(dictionary.contact.title, lang)}
        </h1>

        <div className="max-w-lg rounded-lg border border-border p-6 md:p-8">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            {t(dictionary.contact.getInTouch, lang)}
          </h2>

          {/* Email */}
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              {t(dictionary.contact.email, lang)}
            </p>
            <a
              href="mailto:a_almazyad@outlook.com"
              className="inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-70"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">a_almazyad@outlook.com</span>
            </a>
          </div>

          {/* Social links */}
          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {t(dictionary.contact.socialLinks, lang)}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/abdullah-almazyad/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/a-almazyad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
