import HyperLink from "../ui/HyperLink";

export default function Navbar({ menus }: Record<string, any>) {
  return (
    <nav className="font-pixel flex flex-row flex-wrap flex-start sticky top-0 gap-8 bg-brand-dark text-brand-dawn p-8">
      <HyperLink href="#">HOME</HyperLink>
      {menus.map((menu: string, index: number) => (
        <HyperLink
          key={index}
          href={`#${menu.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {menu.toUpperCase()}
        </HyperLink>
      ))}
    </nav>
  );
}
