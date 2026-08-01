import { Button } from "@/components/ui/button"
import { NavMenu } from "./components/sections/NavMenu"
import Hero from "./components/sections/Hero"
import { Summary } from "./components/sections/Summary"
import { Experience } from "./components/sections/Experience"
import { Project } from "./components/sections/Project"
import { Education } from "./components/sections/Education"
import { Skill } from "./components/sections/Skill"
export function App() {
  return (
    <>
      <header>
        <nav className="flex w-dvw justify-center border-b-2 border-primary py-4">
          <NavMenu />
        </nav>
      </header>
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="main-content">
          <Summary />
          <Experience />
          <Project />
          <Education />
          <Skill />
        </section>
      </main>
      <div className="flex min-h-svh p-6">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Project ready!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
            <Button className="mt-2">Button</Button>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </>
  )
}

export default App
