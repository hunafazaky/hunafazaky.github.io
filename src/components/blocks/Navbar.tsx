import HyperLink from "../ui/HyperLink";
import Button from "../ui/Button";
import { useState } from "react";

export default function Navbar({ menus }: Record<string, any>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-pixel flex justify-between items-center sticky top-0 w-full z-40 bg-brand-dark p-6 border-b-4 border-gray-700">
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
        {/* Ikon Hamburger Sederhana dari Teks/Karakter */}☰
      </Button>

      {isOpen && (
        <div className="bg-brand-dark border-4 border-gray-700 flex flex-col items-center gap-6 absolute top-6 right-6 p-4">
          {/* Tombol Tutup (X) */}
          <Button onClick={() => setIsOpen(false)}>[X]</Button>

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
