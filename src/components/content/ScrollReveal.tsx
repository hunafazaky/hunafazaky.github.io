import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Title from "../element/Title";
import clsx from "clsx";
// import { div } from "framer-motion/client";

interface ScrollRevealProps extends Record<string, any> {
  children: ReactNode;
}

export default function ScrollReveal({
  className,
  children,
  title,
}: ScrollRevealProps) {
  return (
    <div className="bg-brand-dark text-brand-light flex flex-col">
      <section
        id={title.toLowerCase().replace(/\s+/g, "-")}
        className={clsx("p-8 sm:px-16 sm:py-20 min-h-1/2", className)}
      >
        <motion.div
          id={title}
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title>{title}</Title>
          {children}
        </motion.div>
      </section>
    </div>
  );
}
