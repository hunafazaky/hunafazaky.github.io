import { useState, useEffect } from "react"
import bgAvif from "/pxArt.avif"
import bgWebp from "/pxArt.webp"
import bgJpg from "/pxArt.jpg"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const textOpacity = Math.max(1 - scrollY / 400, 0)

  const overlayDarkness = Math.min(0.4 + scrollY / 600, 1)

  return (
    <section className="sticky top-0 -z-10 flex h-screen w-full items-center justify-center overflow-hidden p-6">
      <picture className="absolute inset-0 z-0">
        <source srcSet={bgAvif} type="image/avif" />
        <source srcSet={bgWebp} type="image/webp" />
        <img
          src={bgJpg}
          alt="Workspace Setup"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <div
        className="absolute inset-0 z-10 dark:bg-background"
        style={{ opacity: overlayDarkness }}
      />

      <div
        className="relative z-20 text-center text-foreground"
        style={{
          opacity: textOpacity,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-7xl">
          Hunafa Zaky
        </h1>
        <h5 className="mb-2 flex items-center justify-center gap-1 border-b-2 border-foreground pb-2 text-lg sm:text-2xl md:text-3xl">
          <svg width="30" height="30" viewBox="0 0 100 100">
            <polygon points="20,10 80,50 20,90" fill="#ffc55a" />
          </svg>
          Fullstack Developer
          <svg width="30" height="30" viewBox="0 0 100 100">
            <polygon points="80,10 20,50 80,90" fill="#ffc55a" />
          </svg>
        </h5>
        <h6 className="text-base sm:text-xl">Next.js, Express.js, Docker</h6>
      </div>
    </section>
  )
}
