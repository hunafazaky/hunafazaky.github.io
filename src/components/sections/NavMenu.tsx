import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Array.from({ length: 4 }).map((_, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink href="#experience">Link 1</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Group</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
