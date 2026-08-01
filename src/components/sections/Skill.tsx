import { SectionTitle } from "../section-title"
import skillsData from "@/data/skills.json"
import { Card } from "../ui/card"

export function Skill() {
  const skills = skillsData
  return (
    <div className="mb-8" id="skills">
      <SectionTitle title="skills" />
      <div className="flex flex-wrap gap-1">
        {skills.map((list, index) => (
          <Card key={index} className="w-fit border px-2 py-1">
            {list}
          </Card>
        ))}
      </div>
    </div>
  )
}
