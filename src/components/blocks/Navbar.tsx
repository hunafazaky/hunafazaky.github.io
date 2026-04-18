import HyperLink from "../ui/HyperLink";
import Button from "../ui/Button";
import { useState } from "react";

export default function Navbar({ menus }: Record<string, any>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-pixel flex justify-between items-center fixed top-0 w-dvw z-40 bg-brand-dark p-4 border-b border-brand-light">
      <a href="#">
        <img src="/favicon.svg" alt="Hunafa Zaky" className="w-6" />
      </a>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex justify-center items-center cursor-pointer"
      >
        <div className="flex flex-col gap-1 justify-center items-center">
          <span
            className={`block border w-4 transition-all duration-300 ease-in-out ${
              isOpen
                ? "rotate-45 translate-y-1.5 border-brand-crimson"
                : "border-brand-light"
            }`}
          />
          <span
            className={`block border w-4 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block border w-4 transition-all duration-300 ease-in-out ${
              isOpen
                ? "-rotate-45 -translate-y-1.5 border-brand-crimson"
                : "border-brand-light"
            }`}
          />
        </div>
      </Button>
      <div
        className={`absolute top-14 left-0 right-0 bg-brand-dark flex flex-row flex-wrap justify-between items-center gap-2 p-4 m-2 border border-brand-light transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-5 pointer-events-none invisible"
        }`}
      >
        {menus.map((menu: string, index: number) => (
          <HyperLink
            key={index}
            href={`#${menu.toLowerCase().replace(/\s+/g, "-")}`}
            onClick={() => setIsOpen(false)}
          >
            {menu.toUpperCase()}
          </HyperLink>
        ))}
      </div>
    </nav>
  );
}
