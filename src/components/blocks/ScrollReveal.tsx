import { motion } from "framer-motion";
import type { ReactNode } from "react";
import H3 from "../ui/H3";

interface ScrollRevealProps extends Record<string, any> {
  children: ReactNode;
}

export default function ScrollReveal({ children, title }: ScrollRevealProps) {
  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="px-6 py-8 bg-brand-dark text-brand-light flex flex-col min-h-dvh"
    >
      <motion.div
        id={title}
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <H3>{title}</H3>
        {children}
      </motion.div>
    </section>
  );
}
