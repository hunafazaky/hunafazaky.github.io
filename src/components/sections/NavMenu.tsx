import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
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
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <div className="relative flex w-full items-center justify-between">
      {/* Desktop links */}
      <NavigationMenu>
        <NavigationMenuList className="hidden gap-1 sm:flex">
          {menus.map((menu, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink className="capitalize" href={`#${menu}`}>
                {menu}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-1 sm:px-8">
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
        <div className="absolute top-full right-0 left-0 z-30 flex flex-col border-t-4 border-primary bg-background sm:hidden">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={`#${menu}`}
              className="border-b border-border px-4 py-3 text-sm font-medium capitalize hover:bg-muted"
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
