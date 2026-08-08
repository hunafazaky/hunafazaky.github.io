import { useEffect, useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import menusData from "@/data/menus.json"
import {
  RiMenuLine,
  RiCloseLine,
  RiSunLine,
  RiMoonLine,
} from "@remixicon/react"

export function NavMenu() {
  const menus = menusData
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("")
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  // Scrollspy: highlight whichever section sits in the middle band
  // of the viewport as the user scrolls.
  useEffect(() => {
    const sections = menus
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [menus])

  return (
    <div className="relative flex w-full items-center justify-between">
      {/* Desktop links */}
      <NavigationMenu>
        <NavigationMenuList className="hidden gap-1 sm:flex">
          {menus.map((menu, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                className="group/nav-link font-pixel text-xl tracking-wider capitalize"
                href={`#${menu}`}
              >
                <span
                  className={cn(
                    "border-b-2 pb-0.5 transition-colors group-hover/nav-link:border-primary",
                    active === menu
                      ? "border-primary text-primary"
                      : "border-transparent"
                  )}
                >
                  {menu}
                </span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-1 sm:mx-8">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle dark mode"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <RiCloseLine size={20} /> : <RiMenuLine size={20} />}
        </Button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute top-full right-0 left-0 z-30 flex animate-in flex-col border-t-4 border-primary bg-background duration-200 fade-in slide-in-from-top-2 sm:hidden">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={`#${menu}`}
              className={cn(
                "border-b border-border px-4 py-3 font-pixel text-base tracking-wider capitalize hover:bg-muted",
                active === menu && "bg-muted text-primary"
              )}
              onClick={() => setOpen(false)}
            >
              {menu}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
