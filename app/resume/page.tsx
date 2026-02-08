"use client"

import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  experienceData,
  educationData,
  certificationsData,
} from "@/lib/resume-data"
import { Briefcase, GraduationCap, Award } from "lucide-react"

function ExperienceSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t(dictionary.resume.experience, lang)}
          </h2>
        </div>

        <div className="space-y-10">
          {experienceData.map((company) => (
            <div key={company.company.en} className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                {t(company.company, lang)}
              </h3>
              <div className="space-y-6 border-s border-border ps-6">
                {company.roles.map((role) => (
                  <div key={role.title.en + role.period.en} className="relative">
                    <div className="absolute -start-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-background" />
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">
                        {t(role.title, lang)}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t(role.period, lang)} &middot; {t(role.location, lang)}
                      </p>
                      {role.bullets.length > 0 && (
                        <ul className="space-y-1.5">
                          {role.bullets.map((bullet, i) => (
                            <li
                              key={i}
                              className="text-sm leading-relaxed text-muted-foreground"
                            >
                              {t(bullet, lang)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-10 flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t(dictionary.resume.education, lang)}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu) => (
            <div
              key={edu.institution.en}
              className="rounded-lg border border-border p-6 transition-all hover:border-muted-foreground/20 hover:shadow-sm"
            >
              <h3 className="font-semibold text-foreground">
                {t(edu.institution, lang)}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t(edu.degree, lang)}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {t(edu.period, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  const { lang } = useLang()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-10 flex items-center gap-3">
          <Award className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t(dictionary.resume.certifications, lang)}
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certificationsData.map((cert) => (
            <div
              key={cert.name.en}
              className="flex items-start justify-between gap-4 rounded-lg border border-border p-4 transition-all hover:border-muted-foreground/20 hover:shadow-sm"
            >
              <div>
                <h3 className="text-sm font-medium text-foreground">
                  {t(cert.name, lang)}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t(cert.issuer, lang)}
                </p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                {t(cert.date, lang)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ResumePage() {
  const { lang } = useLang()

  return (
    <>
      <div className="mx-auto max-w-[1200px] px-4 pt-16 md:px-6 md:pt-24">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t(dictionary.resume.title, lang)}
        </h1>
      </div>
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
    </>
  )
}
