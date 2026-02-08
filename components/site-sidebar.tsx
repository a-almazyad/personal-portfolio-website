"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  Globe,
  Home,
  Mail,
  Moon,
  Sun,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { dictionary, t } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: dictionary.nav.home, icon: Home },
  { href: "/portfolio", label: dictionary.nav.portfolio, icon: BriefcaseBusiness },
  { href: "/resume", label: dictionary.nav.resume, icon: FileText },
  { href: "/side-projects", label: dictionary.nav.sideProjects, icon: FolderKanban },
  { href: "/blog", label: dictionary.nav.blog, icon: BookOpen },
  { href: "/contact", label: dictionary.nav.contact, icon: Mail },
]

export function SiteSidebar() {
  const pathname = usePathname()
  const { lang, toggleLang } = useLang()
  const { theme, toggleTheme } = useTheme()
  const isRtl = lang === "ar"

  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      side={isRtl ? "right" : "left"}
      className={cn("border-sidebar-border", isRtl ? "border-l" : "border-r")}
    >
      <SidebarHeader className="gap-3 border-b border-sidebar-border px-3 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="grid size-8 place-content-center rounded-lg bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">
              A
            </span>
            <span className="text-sm font-semibold group-data-[collapsible=icon]:hidden">
              {t(dictionary.identity.name, lang)}
            </span>
          </Link>
          <SidebarTrigger className={cn(isRtl ? "mr-auto" : "ml-auto")} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{lang === "en" ? "Navigation" : "التنقل"}</SidebarGroupLabel>
          <SidebarMenu>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive} tooltip={t(item.label, lang)}>
                    <Link href={item.href}>
                      <Icon />
                      <span>{t(item.label, lang)}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter className="gap-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggleLang} tooltip={lang === "en" ? "Switch to Arabic" : "Switch to English"}>
              <Globe />
              <span>{lang === "en" ? "Arabic" : "English"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggleTheme} tooltip={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}>
              {theme === "light" ? <Moon /> : <Sun />}
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "w-full gap-2 group-data-[collapsible=icon]:hidden",
            isRtl ? "justify-end" : "justify-start",
          )}
          asChild
        >
          <a href="/Abdullah_Almazyad_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <FileText className="h-4 w-4" />
            <span>{lang === "en" ? "Download CV" : "تحميل السيرة"}</span>
          </a>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
