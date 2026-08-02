import { SectionTitle } from "../section-title"
import skillsData from "@/data/skills.json"
import { Button } from "@/components/ui/button"

export function Skill() {
  const skills = skillsData
  return (
    <div className="mb-8 pt-18" id="skill">
      <SectionTitle title="skill" />
      <div className="flex flex-wrap gap-1">
        {skills.map((list, index) => (
          <Button
            key={index}
            className="border border-foreground bg-card text-card-foreground"
          >
            {list}
          </Button>
        ))}
      </div>
    </div>
  )
}
