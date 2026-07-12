import ScrollReveal from "./ScrollReveal";
import Gallery from "./Gallery";

const questLog = [
  {
    id: 1,
    title: "Reading Platform - Front",
    description:
      "Next.js, Tailwind CSS, Shadcn UI, TanStack Query, Zustand, Axios.",
    image: "/hz-reading-platform.vercel.app.png",
    ref: "https://hz-reading-platform.vercel.app",
  },
  {
    id: 2,
    title: "Reading Platform - Back",
    description:
      "MongoDB, Express.js, Node.js, Swagger.",
    image: "/hz-reading-platform.onrender.com.png",
    ref: "https://hz-reading-platform.onrender.com/api-docs",
  },
];

export default function Achievements() {
  return (
    <ScrollReveal title="Achievements">
      <Gallery items={questLog} />
    </ScrollReveal>
  );
}
