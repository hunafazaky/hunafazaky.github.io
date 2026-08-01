// import { Button } from "@/components/ui/button"
import { NavMenu } from "./components/sections/NavMenu"
import Hero from "./components/sections/Hero"
import { Summary } from "./components/sections/Summary"
import { Experience } from "./components/sections/Experience"
import { Project } from "./components/sections/Project"
import { Education } from "./components/sections/Education"
import { Skill } from "./components/sections/Skill"
import { motion, useScroll } from "motion/react"

export function App() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "var(--primary)",
        }}
      />

      <header className="sticky top-0 z-10">
        <nav className="flex w-dvw justify-between bg-primary p-4">
          <NavMenu />
        </nav>
      </header>

      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="main-content px-4 py-8">
          <Summary />
          <Experience />
          <Project />
          <Education />
          <Skill />
        </section>
      </main>

      <footer className="flex items-center justify-center bg-primary px-4 py-8">
        <p>&copy; 2026 Hunafa Zaky. All rights reserved.</p>
      </footer>
      {/* <div className="flex min-h-svh p-6">
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
      </div> */}
    </>
  )
}

export default App
