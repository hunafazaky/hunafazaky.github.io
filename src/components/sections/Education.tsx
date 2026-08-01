import { SectionTitle } from "../section-title"
import educationsData from "@/data/educations.json"

interface Education {
  school: string
  subject: string
  type: string
  date: string
  score: string
  stacks: string[]
}

export function EduFormat({ data }: { data: Education }) {
  const stackList = data.stacks.join(", ")
  return (
    <div className="mb-2">
      <div className="flex flex-col gap-1">
        <div>
          <span className="mr-2 font-bold">{data.school}</span>
          <span>({data.date})</span>
        </div>
        <div className="text-xs">
          <span className="mr-2">{data.subject}</span>
          {data.score !== "" && <span>{data.score}</span>}
        </div>
        <div className="text-xs opacity-70">{stackList}</div>
      </div>
    </div>
  )
}

export function Education() {
  const formalEdu = educationsData.filter((data) => data.type === "FORMAL")
  const informalEdu = educationsData.filter((data) => data.type === "INFORMAL")
  return (
    <div className="mb-8 pt-18" id="education">
      <SectionTitle title="education" />
      <section className="mb-4">
        <h2 className="bg-primary p-1 text-lg font-bold">Formal Education</h2>
        <div className="border-l-2 border-primary pt-2 pl-2">
          {formalEdu.map((data, index) => (
            <EduFormat key={index} data={data} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="bg-primary p-1 text-lg font-bold">Informal Education</h2>
        <div className="border-l-2 border-primary pt-2 pl-2">
          {informalEdu.map((data, index) => (
            <EduFormat key={index} data={data} />
          ))}
        </div>
      </section>
    </div>
  )
}
