import { useState, useEffect } from "react";
import bgAvif from "../../assets/pxArt.avif";
import bgWebp from "../../assets/pxArt.webp";
import bgJpg from "../../assets/pxArt.png";
import H1 from "../ui/H1";
import H5 from "../ui/H5";
import H6 from "../ui/H6";

export default function Portfolio() {
  // 1. Buat state untuk menyimpan nilai scroll
  const [scrollY, setScrollY] = useState(0);

  // 2. Pasang event listener saat komponen di-mount
  useEffect(() => {
    const handleScroll = () => {
      // Menyimpan posisi scroll saat ini dalam satuan pixel
      setScrollY(window.scrollY);
    };

    // passive: true sangat penting agar tidak mengganggu performa scroll (smooth scrolling)
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Bersihkan listener saat komponen di-unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Kalkulasi efek berdasarkan nilai scroll
  // Nilai 600 adalah jarak pixel kira-kira untuk efek memudar penuh (bisa disesuaikan)

  // Opacity teks: Mulai dari 1 (penuh), perlahan jadi 0 (menghilang)
  const textOpacity = Math.max(1 - scrollY / 400, 0);

  // Kegelapan overlay: Mulai dari 0.4 (agak gelap), perlahan jadi 0.9 (sangat gelap/redup)
  const overlayDarkness = Math.min(0.4 + scrollY / 600, 0.9);

  return (
    <section className="font-pixel sticky top-0 h-screen w-full -z-10 flex items-center justify-center overflow-hidden p-6">
      <picture className="absolute inset-0 z-0">
        <source srcSet={bgAvif} type="image/avif" />
        <source srcSet={bgWebp} type="image/webp" />
        <img
          src={bgJpg}
          alt="Workspace Setup"
          className="w-full h-full object-cover object-center"
        />
      </picture>

      {/* Overlay Gelap Dinamis */}
      <div
        className="absolute inset-0 bg-brand-dark z-10"
        style={{ opacity: overlayDarkness }} // Menggunakan inline style untuk nilai dinamis
      ></div>

      {/* Teks Hero Dinamis */}
      <div
        className="relative z-20 text-center text-white"
        style={{
          opacity: textOpacity,
          // Bonus efek parallax tambahan: teks sedikit ikut turun ke bawah saat discroll
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <H1>Hunafa Zaky</H1>
        <H5 className="text-brand-rise flex justify-center items-center gap-1">
          <svg width="15" height="15" viewBox="0 0 100 100">
            <polygon points="20,10 80,50 20,90" fill="#ffc55a" />
          </svg>
          Fullstack Developer
          <svg width="15" height="15" viewBox="0 0 100 100">
            <polygon points="80,10 20,50 80,90" fill="#ffc55a" />
          </svg>
        </H5>
        <H6>
          Builds Web Apps with high-precision design, clean and maintainable code
        </H6>
      </div>
    </section>
  );
}
