import bgImage from "../../assets/office-room.webp";
import H1 from "../ui/H1";
import H4 from "../ui/H4";
// import H6 from "../ui/H6";
// import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Daftar notifikasi ala RPG
const notifications = [
  {
    type: "SYSTEM",
    icon: "🔔",
    message: "Player Zaky joined the server.",
    color: "text-white",
  },
  {
    type: "CLASS UPGRADE",
    icon: "✨",
    message: "Advanced to: Junior Fullstack Developer!",
    color: "text-yellow-400",
  },
  {
    type: "ITEM ACQUIRED",
    icon: "📜",
    message: "React & Tailwind CSS Grimoire added to inventory.",
    color: "text-green-400",
  },
  {
    type: "NEW QUEST",
    icon: "⚔️",
    message: "Seeking a new party (Open to Work).",
    color: "text-blue-400",
  },
];

function Hero() {
  const [visibleNotifs, setVisibleNotifs] = useState<any[]>([]);
  const countRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Ambil data notifikasi berikutnya dan beri ID unik
      const nextItem = {
        ...notifications[countRef.current % notifications.length],
        id: countRef.current,
      };

      setVisibleNotifs((prev) => {
        // Tambahkan item baru ke urutan paling bawah
        const newQueue = [...prev, nextItem];

        // 2. LOGIKA TUMPUKAN: Jika lebih dari 3, potong array (buang index 0 / paling lama)
        if (newQueue.length > 3) {
          return newQueue.slice(1);
        }
        return newQueue;
      });

      countRef.current += 1; // Naikkan counter ID
    }, 2000); // Dipercepat jadi 2 detik agar efek tumpuknya terasa

    return () => clearInterval(timer);
  }, []);
  // Efek untuk mengganti notifikasi setiap 3.5 detik
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % notifications.length);
  //   }, 3500);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="p-8 pt-24 bg-brand-dark bg-center bg-cover text-brand-light h-dvh flex flex-col text-shadow-brand-dark text-shadow-bold border-b"
    >
      <H1 className="text-center">Hunafa Zaky</H1>
      <H4 className="text-center">Web Developer</H4>
      {/* <H6 className="mt-12">
        <TypeAnimation
          style={{ whiteSpace: "pre-line", height: "195px", display: "block" }}
          sequence={[
            "> welcome to my world.",
            2500,
            "> welcome to my world.\n> feel free to discover my lore",
            1000,
            "> welcome to my world.\n> feel free to check my skill tree",
            1000,
            "> welcome to my world.\n> feel free to learn my completed quests",
            1000,
            "> welcome to my world.\n> feel free to witness my achievements",
            1000,
            "> ",
            2500,
          ]}
          wrapper="span"
          speed={70}
          deletionSpeed={70}
          repeat={Infinity}
          cursor={true}
        />
      </H6> */}
      <div className="absolute right-8 bottom-8 flex flex-col gap-4 w-full max-w-sm z-30">
        {/* HAPUS mode="wait" agar bisa menumpuk */}
        <AnimatePresence>
          {/* 3. LAKUKAN MAPPING ARRAY */}
          {visibleNotifs.map((notif) => (
            <motion.div
              // key HARUS pakai ID unik, jangan pakai index map!
              key={notif.id}
              // PROPERTI AJAIB: Membuat elemen lain bergeser mulus saat item ini dihapus
              layout
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              // Animasi keluar: terdorong ke atas dan memudar
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-dark border border-brand-light p-3 flex items-start gap-3"
            >
              <div className="text-2xl">{notif.icon}</div>
              <div className="flex flex-col">
                <span className="font-pixel text-[10px] text-gray-300 tracking-wider">
                  [{notif.type}]
                </span>
                <p
                  className={`font-pixel text-sm leading-tight mt-1 ${notif.color}`}
                >
                  {notif.message}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Hero;
