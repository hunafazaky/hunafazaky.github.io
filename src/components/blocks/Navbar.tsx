import HyperLink from "../ui/HyperLink";
import Button from "../ui/Button";
import { useState } from "react";

export default function Navbar({ menus }: Record<string, any>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-pixel flex justify-between items-center sticky top-0 w-full z-40 bg-brand-dark p-6 border-b-4">
      <img src="/favicon.svg" alt="Hunafa Zaky" className="w-6" />
      <div className="flex flex-wrap gap-4 hidden">
        {menus.map((menu: string, index: number) => (
          <HyperLink
            key={index}
            href={`#${menu.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {menu.toUpperCase()}
          </HyperLink>
        ))}
      </div>
      <Button onClick={() => setIsOpen(true)}>
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
      </Button>

      {isOpen && (
        <div className="bg-brand-dark flex flex-col items-center gap-6 absolute top-0 right-0 p-6">
          {/* Tombol Tutup (X) */}
          <Button className="self-end" onClick={() => setIsOpen(false)}>
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
          </Button>

          {/* Link Navigasi (Beri onClick penutup agar saat diklik menu langsung hilang) */}
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
