import { motion } from "motion/react"
import { SectionTitle } from "../section-title"
import { RiArrowRightDoubleFill } from "@remixicon/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  // CardFooter,
  // CardAction,
} from "@/components/ui/card"
import experiencesData from "@/data/experiences.json"

interface Experience {
  company: string
  role: string
  duration: string
  description: {
    name: string
    text: string
  }[]
}

function ExpFormat({ data, index }: { data: Experience; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.1 }}
    >
      <Card className="border-2 border-foreground">
        <CardHeader>
          <CardTitle>{data.company}</CardTitle>
          <CardDescription className="flex flex-col">
            <span>{data.role}</span>
            <span className="italic">{data.duration}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data.description.map((list, i) => (
            <div key={i} className="mb-2 flex">
              <div>
                <RiArrowRightDoubleFill size={20} />
              </div>
              <div>
                <span className="font-bold">{list.name}: </span>
                <span>{list.text}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Experience() {
  const experiences = experiencesData
  return (
    <div className="mb-8 pt-24" id="experience">
      <SectionTitle title="experience" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {experiences.map((data, index) => (
          <ExpFormat key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  )
}
