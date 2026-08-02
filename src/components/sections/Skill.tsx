import { SectionTitle } from "../section-title"
import skillsData from "@/data/skills.json"
import { Button } from "@/components/ui/button"

export function Skill() {
  const skills = skillsData
  return (
    <div className="mb-8 pt-24" id="skill">
      <SectionTitle title="skill" />
      <div className="flex flex-wrap gap-2">
        {skills.map((list, index) => (
          <Button
            key={index}
            className="pixel-corners border bg-card text-foreground shadow-foreground transition-transform hover:-translate-y-0.5"
          >
            {list}
          </Button>
        ))}
      </div>
    </div>
  )
}
