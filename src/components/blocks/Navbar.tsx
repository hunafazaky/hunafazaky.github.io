import HyperLink from "../ui/HyperLink";
import Button from "../ui/Button";
import { useState } from "react";

export default function Navbar({ menus }: Record<string, any>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-pixel flex justify-between items-center sticky top-0 w-full z-40 bg-brand-dark p-4 border-b border-brand-light">
      <a href="#">
        <img src="/favicon.svg" alt="Hunafa Zaky" className="w-6" />
      </a>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
        {isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </Button>

      {isOpen && (
        <div className="bg-brand-dark flex flex-wrap flex-row justify-between items-center gap-4 absolute top-14 left-0 right-0 p-4 m-2 border border-brand-light">
          {menus.map((menu: string, index: number) => (
            <HyperLink
              key={index}
              href={`#${menu.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {menu.toUpperCase()}
            </HyperLink>
          ))}
        </div>
      )}
    </nav>
  );
}
