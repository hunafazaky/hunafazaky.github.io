import { motion } from "motion/react"
import { SectionTitle } from "../section-title"

// TODO: replace with your real numbers before publishing.
const highlights = [
  { value: "1+", label: "Years Experience" },
  { value: "2+", label: "Projects Shipped" },
  { value: "2+", label: "Companies & Clients" },
]

export function Summary() {
  return (
    <div className="mb-8 pt-24" id="summary">
      <SectionTitle title="summary" />
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="mb-4"
      >
        A Fullstack Developer specialized in the React and Next.js ecosystem to
        build modern, responsive, and scalable web applications. Skilled in
        bridging interactive front-ends with robust back-end architectures using
        TypeScript and Node.js. Highly committed to writing clean code and
        optimizing application performance to ensure a seamless user experience.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-4 flex flex-wrap gap-3"
      >
        {highlights.map((item, index) => (
          <div
            key={index}
            className="pixel-corners flex flex-col items-center border-2 border-foreground bg-card px-4 py-2"
          >
            <span className="font-pixel text-2xl text-primary">
              {item.value}
            </span>
            <span className="text-xs text-muted-foreground uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
