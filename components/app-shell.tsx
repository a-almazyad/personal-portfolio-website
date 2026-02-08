"use client"

import Link from "next/link"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SiteFooter } from "@/components/site-footer"
import { SiteSidebar } from "@/components/site-sidebar"
import { useLang } from "@/lib/language-context"
import { dictionary, t } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function AppShell({ children }: { children: React.ReactNode }) {
  const { lang } = useLang()
  const isRtl = lang === "ar"

  return (
    <SidebarProvider defaultOpen className={cn(isRtl && "flex-row-reverse")}>
      <SiteSidebar />
      <SidebarInset
        className={cn(
          isRtl &&
            "md:peer-data-[side=right]:peer-data-[state=collapsed]:mr-2 md:peer-data-[side=right]:peer-data-[variant=inset]:mr-0 md:peer-data-[side=right]:peer-data-[state=collapsed]:ml-0",
        )}
      >
        <div className="flex min-h-svh flex-col">
          <header
            className={cn(
              "flex items-center gap-2 border-b border-border bg-background/80 px-4 py-3 backdrop-blur md:hidden",
              isRtl && "flex-row-reverse text-right",
            )}
          >
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
