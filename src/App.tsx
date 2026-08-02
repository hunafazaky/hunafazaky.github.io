// import { Button } from "@/components/ui/button"
import { NavMenu } from "./components/sections/NavMenu"
import Hero from "./components/sections/Hero"
import { Summary } from "./components/sections/Summary"
import { Experience } from "./components/sections/Experience"
import { Project } from "./components/sections/Project"
import { Education } from "./components/sections/Education"
import { Skill } from "./components/sections/Skill"
import { motion, useScroll } from "motion/react"

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="z-20"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "var(--primary)",
        }}
      />

      <header className="sticky top-0 z-10 border-b-4 border-primary">
        <nav className="flex w-dvw justify-between bg-background p-4">
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
    </>
  )
}
