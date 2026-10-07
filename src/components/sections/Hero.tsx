import { useState, useEffect } from "react"
import { RiDownloadLine, RiMailLine, RiGithubFill } from "@remixicon/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
  const cueOpacity = Math.max(1 - scrollY / 120, 0)

  const overlayDarkness = Math.min(0.4 + scrollY / 600, 1)

  return (
    <section className="pixel-scanlines sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden p-6">
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
        className="absolute inset-0 z-10 bg-background"
        style={{ opacity: overlayDarkness }}
      />

      <div
        className="relative z-20 animate-in text-center text-foreground duration-700 fade-in slide-in-from-bottom-4"
        style={{
          opacity: textOpacity,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <h1 className="pixel-shadow font-pixel text-6xl leading-relaxed sm:text-8xl md:text-9xl">
          Hunafa Zaky
        </h1>
        <h5 className="mb-2 flex items-center justify-center gap-1 border-b-4 border-foreground pb-2 text-lg font-bold sm:text-2xl md:text-3xl dark:border-b-2 dark:font-medium">
          <svg
            width="30"
            height="30"
            viewBox="0 0 100 100"
            className="pixel-float"
          >
            <polygon points="20,10 80,50 20,90" fill="#ffc55a" />
          </svg>
          Full Stack Developer
          <svg
            width="30"
            height="30"
            viewBox="0 0 100 100"
            className="pixel-float"
            style={{ animationDelay: "0.3s" }}
          >
            <polygon points="80,10 20,50 80,90" fill="#ffc55a" />
          </svg>
        </h5>
        <h6 className="text-base font-bold sm:text-xl dark:font-medium">
          JavaScript Stack, DevOps
        </h6>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/resume-en.pdf"
            download
            className={cn(
              buttonVariants({ variant: "default" }),
              "pixel-corners"
            )}
          >
            <RiDownloadLine size={16} />
            Download CV
          </a>
          <a
            href="mailto:hunafa.zsn@gmail.com"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "pixel-corners"
            )}
          >
            <RiMailLine size={16} />
            Contact Me
          </a>
          <a
            href="https://github.com/hunafazaky"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "secondary" }),

              "pixel-corners"
            )}
          >
            <RiGithubFill size={16} />
            GitHub
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-in text-center text-foreground duration-700 fade-in"
        style={{
          opacity: cueOpacity,
          animationDelay: "0.8s",
          animationFillMode: "backwards",
        }}
      >
        <p className="font-pixel text-sm tracking-widest uppercase">
          Scroll<span className="pixel-cursor">_</span>
        </p>
      </div>
    </section>
  )
}
