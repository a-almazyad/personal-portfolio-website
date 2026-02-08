"use client"

import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { Linkedin, Github } from "lucide-react"

export function SiteFooter() {
  const { lang } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {t(dictionary.footer.copyright, lang)}
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/abdullah-almazyad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/a-almazyad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
