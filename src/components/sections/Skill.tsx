import { motion } from "motion/react"
import { SectionTitle } from "../section-title"
import skillsData from "@/data/skills.json"
import { Button } from "@/components/ui/button"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.03 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0 },
}

export function Skill() {
  const skills = skillsData
  return (
    <div className="mb-8 pt-24" id="skill">
      <SectionTitle title="skill" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="flex flex-wrap gap-2"
      >
        {skills.map((list, index) => (
          <motion.div
            key={index}
            variants={item}
            transition={{ duration: 0.3 }}
          >
            <Button className="pixel-corners border bg-card text-foreground shadow-foreground transition-transform hover:-translate-y-0.5">
              {list}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
