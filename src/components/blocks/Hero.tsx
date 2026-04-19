// import bgImage from "../../assets/pxArt.avif";
// import H1 from "../ui/H1";
// import H4 from "../ui/H4";
// // import H6 from "../ui/H6";
// // import { TypeAnimation } from "react-type-animation";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Daftar notifikasi ala RPG
// const notifications = [
//   {
//     type: "CHARACTER SELECTED",
//     icon: "🔔",
//     message: "Huunafa Zaky has entered the realm.",
//     color: "text-brand-light",
//   },
//   {
//     type: "CLASS SELECTED",
//     icon: "✨",
//     message: "Junior Fullstack Developer",
//     color: "text-brand-rise",
//   },
//   {
//     type: "WEAPON ACQUIRED",
//     icon: "📜",
//     message: "Personal Computer with Peripheral",
//     color: "text-brand-dawn",
//   },
//   {
//     type: "SKILL LEARNED",
//     icon: "📜",
//     message: "Fundamentals: HTML, CSS, JavaScript",
//     color: "text-brand-forest",
//   },
//   {
//     type: "SKILL LEARNED",
//     icon: "📜",
//     message: "Database Management Systems: MySQL, MongoDB",
//     color: "text-brand-forest",
//   },
//   {
//     type: "SKILL LEARNED",
//     icon: "📜",
//     message: "Version Control: Git",
//     color: "text-brand-forest",
//   },
//   {
//     type: "SKILL LEARNED",
//     icon: "📜",
//     message: "Frontend Framework: Vue.js, React.js",
//     color: "text-brand-forest",
//   },
//   {
//     type: "SKILL LEARNED",
//     icon: "📜",
//     message: "Backend Framework: Node.js, Express.js",
//     color: "text-brand-forest",
//   },
//   {
//     type: "SKILL UPGRADED",
//     icon: "📜",
//     message: "JavaScipt upgraded to TypeScript",
//     color: "text-brand-forest",
//   },
//   {
//     type: "NEW QUEST",
//     icon: "⚔️",
//     message: "Seeking a new party (Open to Work).",
//     color: "text-brand-crimson",
//   },
// ];

// function Hero() {
//   const [visibleNotifs, setVisibleNotifs] = useState<any[]>([]);
//   const countRef = useRef(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       // Ambil data notifikasi berikutnya dan beri ID unik
//       const nextItem = {
//         ...notifications[countRef.current % notifications.length],
//         id: countRef.current,
//       };

//       setVisibleNotifs((prev) => {
//         // Tambahkan item baru ke urutan paling bawah
//         const newQueue = [...prev, nextItem];

//         // 2. LOGIKA TUMPUKAN: Jika lebih dari 3, potong array (buang index 0 / paling lama)
//         if (newQueue.length > 3) {
//           return newQueue.slice(1);
//         }
//         return newQueue;
//       });

//       countRef.current += 1; // Naikkan counter ID
//     }, 2000); // Dipercepat jadi 2 detik agar efek tumpuknya terasa

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       style={{ backgroundImage: `url(${bgImage})` }}
//       className="sticky -z-10 top-0 p-8 pt-24 bg-brand-dark bg-center bg-cover text-brand-light h-dvh flex flex-col text-shadow-brand-dark text-shadow-bold border-b"
//     >
//       <H1 className="text-center">Hunafa Zaky</H1>
//       <H4 className="text-center">Web Developer</H4>
//       <div className="flex flex-col justify-end items-start gap-2 z-30 w-full h-dvh">
//         {/* HAPUS mode="wait" agar bisa menumpuk */}
//         <AnimatePresence>
//           {/* 3. LAKUKAN MAPPING ARRAY */}
//           {visibleNotifs.map((notif) => (
//             <motion.div
//               // key HARUS pakai ID unik, jangan pakai index map!
//               key={notif.id}
//               // PROPERTI AJAIB: Membuat elemen lain bergeser mulus saat item ini dihapus
//               layout
//               initial={{ opacity: 0, x: 50, scale: 0.9 }}
//               animate={{ opacity: 1, x: 0, scale: 1 }}
//               // Animasi keluar: terdorong ke atas dan memudar
//               exit={{ opacity: 0, y: -30, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               className="bg-brand-dark border w-full border-brand-light p-2 flex justify-start items-start gap-2"
//             >
//               <div className="text-2xl">{notif.icon}</div>
//               <div className="flex flex-col">
//                 <span className="font-pixel text-[10px] text-gray-300 tracking-wider">
//                   [{notif.type}]
//                 </span>
//                 <p
//                   className={`font-pixel text-sm leading-tight mt-1 ${notif.color}`}
//                 >
//                   {notif.message}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import { useState, useEffect } from "react";
import bgAvif from "../../assets/pxArt.avif";
import bgWebp from "../../assets/pxArt.webp";
import bgJpg from "../../assets/pxArt.png";

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
    <section className="sticky top-0 h-screen w-full -z-10 flex items-center justify-center overflow-hidden">
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
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Frontend Engineer
        </h1>
        <p className="text-xl text-gray-300">
          Membangun antarmuka yang cepat dan presisi.
        </p>
      </div>
    </section>
    // <main className="relative w-full font-pixel">
    // {/* HERO SECTION (STICKY) */}

    // {/* KOMPONEN KONTEN (SCROLLING OVER) */}
    // {/* <section className="relative bg-brand-dark w-full min-h-screen px-8 py-20 text-slate-200">
    //   <div className="max-w-5xl mx-auto">
    //     <h2 className="text-3xl font-bold mb-8">Tech Stack & Projects</h2>
    //   </div>
    // </section> */}
    // </main>
  );
}
