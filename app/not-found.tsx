"use client"

import Link from "next/link"
import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  const { lang } = useLang()

  return (
    <section className="flex flex-1 flex-col items-center justify-center py-20 md:py-32">
      <div className="text-center">
        <p className="text-7xl font-bold text-foreground">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-foreground">
          {t(dictionary.notFound.title, lang)}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(dictionary.notFound.desc, lang)}
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" />
          {t(dictionary.notFound.backHome, lang)}
        </Link>
      </div>
    </section>
  )
}
