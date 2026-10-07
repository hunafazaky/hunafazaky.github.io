import { motion } from "motion/react"
import { SectionTitle } from "../section-title"
import { RiArrowRightDoubleFill } from "@remixicon/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import projectsData from "@/data/projects.json"
import placeholderImg from "/pxArt.jpg"

interface Project {
  title: string
  subtitle: string
  liveUrl: string
  imageUrl: string
  stacks: string[]
  description: {
    name: string
    text: string
  }[]
}

function ProFormat({ data, index }: { data: Project; index: number }) {
  const stackList = data.stacks.join(", ")
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.1 }}
    >
      <Card className="border-2 border-foreground">
        <img
          src={data.imageUrl ? data.imageUrl : placeholderImg}
          alt={`${data.title} preview`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
        <CardHeader>
          <a href={data.liveUrl} target="_blank" rel="noopener noreferrer">
            <CardTitle className="hover:text-destructive">
              {data.title}
            </CardTitle>
          </a>
          <CardDescription className="flex flex-col">
            <span className="font-medium">{data.subtitle}</span>
            <span>{stackList}</span>
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

export function Project() {
  const projects = projectsData

  return (
    <div className="mb-8 pt-24" id="project">
      <SectionTitle title="project" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((data, index) => (
          <ProFormat key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  )
}
