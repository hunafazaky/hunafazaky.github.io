import { motion } from "motion/react"
import { SectionTitle } from "../section-title"

const highlights = [
  { value: "3+", label: "Years Experience" },
  { value: "3", label: "Projects Shipped" },
  { value: "2", label: "Companies" },
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
        Full Stack Developer with over 3 years of hands-on experience designing
        and deploying web applications within the JavaScript ecosystem (React,
        Vue.js, Node.js). Proven ability to architect secure RESTful APIs,
        manage complex application state, and streamline deployments using
        Docker and CI/CD pipelines. Passionate about bridging high-performance
        front-ends with robust Back End architectures to deliver maintainable
        digital products. Willing to relocate to Bandung, Jakarta, or Bogor.
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
