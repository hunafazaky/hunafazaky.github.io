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
import projectsData from "@/data/projects.json"

interface Project {
  title: string
  liveUrl: string
  imageUrl: string
  stacks: string[]
  description: {
    name: string
    text: string
  }[]
}

function ProFormat({ data }: { data: Project }) {
  const stackList = data.stacks.join(", ")
  return (
    <Card className="my-2 border-2 border-foreground">
      <CardHeader>
        <a href={data.liveUrl} target="_blank">
          <CardTitle className="hover:text-destructive">{data.title}</CardTitle>
        </a>
        <CardDescription>{stackList}</CardDescription>
      </CardHeader>
      <CardContent>
        {data.description.map((list, index) => (
          <div key={index} className="mb-2 flex">
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
  )
}

export function Project() {
  const projects = projectsData

  return (
    <div className="mb-8 pt-18" id="project">
      <SectionTitle title="project" />
      {projects.map((data, index) => (
        <ProFormat key={index} data={data} />
      ))}
    </div>
  )
}
