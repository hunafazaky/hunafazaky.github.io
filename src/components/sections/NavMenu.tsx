import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import menusData from "@/data/menus.json"
import { RiMenuLine } from "@remixicon/react"

export function NavMenu() {
  const menus = menusData
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu, index) => (
          <NavigationMenuItem className="hidden sm:block" key={index}>
            <NavigationMenuLink className="capitalize" href={`#${menu}`}>
              {menu}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="block sm:hidden">
          <NavigationMenuTrigger>
            <RiMenuLine />
          </NavigationMenuTrigger>
          {menus.map((menu, index) => (
            <NavigationMenuContent key={index}>
              <NavigationMenuLink className="capitalize" href={`#${menu}`}>
                {menu}
              </NavigationMenuLink>
            </NavigationMenuContent>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
