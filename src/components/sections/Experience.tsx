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

export function ExpFormat({ data }: { data: Experience }) {
  return (
    <Card className="my-2 border-2 border-foreground">
      <CardHeader>
        <CardTitle>{data.company}</CardTitle>
        <CardDescription className="flex flex-col">
          <span>{data.role}</span>
          <span className="italic">{data.duration}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data.description.map((list, index) => (
          <div key={index} className="mb-2 flex gap-1">
            <RiArrowRightDoubleFill className="w-20" size={20} />
            <p>
              <span className="font-bold">{list.name}: </span>
              <span>{list.text}</span>
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function Experience() {
  const experiences = experiencesData
  return (
    <div className="mb-8" id="experience">
      <SectionTitle title="experience" />
      {experiences.map((data, index) => (
        <ExpFormat key={index} data={data} />
      ))}
    </div>
  )
}
