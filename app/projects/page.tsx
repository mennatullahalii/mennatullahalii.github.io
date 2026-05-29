// components/Projects.tsx

export default function Projects() {
  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8 border-b-2 border-accent pb-2 inline-block">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {/* Project Card: mennas-monorepo */}
        <div className="p-6 rounded-2xl border-2 border-accent bg-accent bg-opacity-5 hover:bg-opacity-10 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
            <h3 className="font-bold text-xl text-accent">mennas-monorepo</h3>
            <a
              href="https://github.com/yourusername/mennas-monorepo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium mt-2 md:mt-0 hover:underline opacity-80"
            >
              View Source Code ↗
            </a>
          </div>

          <p className="opacity-90 leading-relaxed mb-6">
            A personal architectural sandbox demonstrating a modern,
            high-performance frontend toolchain. Built to showcase clean
            monorepo structural patterns, advanced performance optimization
            (like tree-shaking), and strict API contract integration outside of
            standard legacy corporate constraints.
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-accent text-accent">
              Angular 19
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-accent text-accent">
              Nx Workspace
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-accent text-accent">
              Vite
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-accent text-accent">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 text-xs font-mono rounded-full border border-accent text-accent">
              Playwright
            </span>
          </div>
        </div>

        {/* You can duplicate the card above to add more projects later */}
      </div>
    </section>
  );
}
