"use client"

import Link from "next/link"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SiteFooter } from "@/components/site-footer"
import { SiteSidebar } from "@/components/site-sidebar"
import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"

export function AppShell({ children }: { children: React.ReactNode }) {
  const { lang } = useLang()

  return (
    <SidebarProvider defaultOpen>
      <SiteSidebar />
      <SidebarInset>
        <div className="flex min-h-svh flex-col">
          <header className="flex items-center gap-2 border-b border-border bg-background/80 px-4 py-3 backdrop-blur md:hidden">
            <SidebarTrigger className="shrink-0" />
            <Link href="/" className="text-sm font-semibold text-foreground">
              {t(dictionary.identity.name, lang)}
            </Link>
          </header>
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
