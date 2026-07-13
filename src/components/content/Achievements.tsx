import ScrollReveal from "./ScrollReveal";
// import Gallery from "./Gallery";
// import { data } from "framer-motion/client";
import { useState, useEffect } from "react";
import Container from "../container";
import H6 from "../element/H6";
import Text from "../element/Text";

// const questLog = [
//   {
//     id: 1,
//     title: "Reading Platform - Front",
//     description:
//       "Next.js, Tailwind CSS, Shadcn UI, TanStack Query, Zustand, Axios.",
//     image: "/hz-reading-platform.vercel.app.png",
//     ref: "https://hz-reading-platform.vercel.app",
//   },
//   {
//     id: 2,
//     title: "Reading Platform - Back",
//     description: "MongoDB, Express.js, Node.js, Swagger.",
//     image: "/hz-reading-platform.onrender.com.png",
//     ref: "https://hz-reading-platform.onrender.com/api-docs",
//   },
// ];

// try {
//   const response = await fetch("https://api.github.com/users/hunafazaky/repos");

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error("Fetch failed:", error);
// }

interface Repo {
  fork: boolean;
  id: string;
  html_url: string;
  name: string;
  description: string;
  language: string;
}

export default function Achievements() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ganti dengan username GitHub Anda
  const GITHUB_USERNAME = "hunafazaky";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Mengambil data repositori yang diurutkan berdasarkan yang terakhir diperbarui
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil data dari GitHub");
        }

        const data = await response.json();

        // Memfilter agar hanya menampilkan repo asli (bukan hasil fork)
        console.log(data);
        const filteredRepos = data.filter((repo: Repo) => !repo.fork);

        setRepos(filteredRepos);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown Error";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Memuat daftar repositori...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <ScrollReveal title="Achievements">
        {/* <Gallery items={questLog} /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {repos.map((repo: Repo) => (
            <article
              key={repo.id}
              className="bg-brand-rise bg-dither text-brand-dark border-2 border-brand-light h-40"
            >
              <div className="border-4 border-brand-dark p-4 h-full">
                <div>
                  <H6 className="text-brand-sea truncate">
                    <a href={repo.html_url} target="_blank">
                      {repo.name}
                    </a>
                  </H6>
                  <span className="bg-brand-forest px-2 py-1 rounded text-xs font-bold">
                    {repo.language || "Documentation"}
                  </span>
                  <Text className="">
                    {repo.description || "No Description"}
                  </Text>
                </div>
              </div>
            </article>
            // <div
            //   key={repo.id}
            //   className="border p-4 rounded shadow-sm hover:shadow-md transition"
            // >
            //   <h3 className="font-bold text-lg text-blue-600">
            //     <a
            //       href={repo.html_url}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       {repo.name}
            //     </a>
            //   </h3>
            //   <p className="text-gray-600 text-sm mt-2">
            //     {repo.description || "Tidak ada deskripsi"}
            //   </p>
            //   <div className="mt-3 flex gap-2">
            //     {repo.language && (
            //       <span className="bg-gray-200 text-xs px-2 py-1 rounded">
            //         {repo.language}
            //       </span>
            //     )}
            //   </div>
            // </div>
          ))}
        </div>
      </ScrollReveal>
    </Container>
  );
}
