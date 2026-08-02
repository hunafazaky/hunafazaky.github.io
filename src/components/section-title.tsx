import { motion } from "motion/react"

export function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="pixel-corners my-2 inline-block bg-primary px-3 py-2 font-pixel text-2xl tracking-wider text-primary-foreground uppercase sm:text-4xl"
    >
      {title}
    </motion.h2>
  )
}
