import HyperLink from "../ui/HyperLink";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // <footer id="footer">
    //   <span>Save File Created: © 2026 Zaky</span>
    //   <span>Forged with React & Tailwind</span>
    //   <span>Multiplayer / Guild Contacts</span>

    // </footer>
    <footer className="bg-brand-dark h-dvh flex justify-end items-end">
      <div className="w-full mx-auto flex flex-col items-center justify-between gap-4 border-t-4 border-brand-light text-gray-400 p-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="font-pixel text-sm text-brand-rise my-2">THE END</p>
          <p className="font-sans text-xs">
            Save File Created: © {currentYear} by Hunafa Zaky
          </p>
          <p className="font-sans text-xs text-gray-500">
            Forged with React & Tailwind
          </p>
        </div>

        {/* Bagian Tengah: Social Links */}
        <div className="flex justify-center items-center gap-2">
          {/* Ganti # dengan link asli kamu */}
          <HyperLink href="https://github.com/hunafazaky/" target="_blank">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 transition-all duration-200"
              fill="currentColor"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </HyperLink>
          <HyperLink
            href="https://www.linkedin.com/in/hunafazaky/"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 transition-all duration-200"
              fill="currentColor"
            >
              <title>LinkedIn</title>
              <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path>
            </svg>
          </HyperLink>
          <HyperLink href="mailto:hunafa.zsn@gmail.com" target="_blank">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 transition-all duration-200"
              fill="currentColor"
            >
              <title>Gmail</title>
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </HyperLink>
        </div>

        {/* Bagian Kanan: Fast Travel (Back to Top) */}
        <button
          // Fungsi untuk scroll mulus ke paling atas
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-pixel text-xs p-1 w-full bg-brand-dark hover:bg-brand-light text-brand-light hover:text-brand-dark border-2 border-brand-light transition-all cursor-pointer"
        >
          Back to The Title
        </button>
      </div>
    </footer>
  );
}

export default Footer;
