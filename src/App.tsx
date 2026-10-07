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
      {/* Pixel/XP-bar styled scroll progress indicator */}
      <div className="fixed top-0 right-0 left-0 z-20 h-1.5 bg-muted">
        <motion.div
          className="h-full origin-left bg-[repeating-linear-gradient(90deg,var(--primary)_0px,var(--primary)_6px,color-mix(in_oklch,var(--primary),white_25%)_6px,color-mix(in_oklch,var(--primary),white_25%)_8px)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <header className="sticky top-0 z-10 border-b-4 border-primary">
        <nav className="flex w-dvw justify-between bg-background p-4">
          <NavMenu />
        </nav>
      </header>

      <main>
        <section className="hero">
          <Hero />
        </section>
        <section className="main-content mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <Summary />
          <Experience />
          <Project />
          <Education />
          <Skill />
        </section>
      </main>

      <footer className="pixel-divider-wrap relative">
        <div className="pixel-divider" />
        <div className="flex flex-col items-center justify-center gap-2 bg-primary px-4 py-10 text-primary-foreground">
          <p className="font-pixel text-xs tracking-widest uppercase">
            Thanks for visiting
            <span className="pixel-cursor">_</span>
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Hunafa Zaky. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
