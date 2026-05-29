// app/skills/page.tsx

export default function SkillsPage() {
  return (
    <section className="flex-grow px-8 max-w-6xl mx-auto w-full py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-4 mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#CA5995"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-purple tracking-tight">
          Skills.
        </h1>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Frontend Core */}
        <div className="border border-brand-purple/20 rounded-3xl p-8 hover:bg-brand-purple/[0.02] transition-colors">
          <h2 className="text-xl font-bold text-brand-purple mb-6">
            Frontend Core
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "Angular (v15–20)",
              "RxJS",
              "NgRx",
              "Signals",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-brand-purple text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Tooling */}
        <div className="border border-brand-purple/20 rounded-3xl p-8 hover:bg-brand-purple/[0.02] transition-colors">
          <h2 className="text-xl font-bold text-brand-purple mb-6">
            Architecture & Tooling
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Nx Monorepo",
              "Microfrontends",
              "Module Federation",
              "Webpack",
              "Vite",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-brand-purple text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Styling & UI */}
        <div className="border border-brand-purple/20 rounded-3xl p-8 hover:bg-brand-purple/[0.02] transition-colors">
          <h2 className="text-xl font-bold text-brand-purple mb-6">
            Styling & UI
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Tailwind CSS",
              "SCSS",
              "HTML5",
              "Bootstrap",
              "Storybook",
              "Figma",
              "Accessibility",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-brand-purple text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Testing & Quality */}
        <div className="border border-brand-purple/20 rounded-3xl p-8 hover:bg-brand-purple/[0.02] transition-colors">
          <h2 className="text-xl font-bold text-brand-purple mb-6">
            Testing & Quality
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Jest",
              "Vitest",
              "Cypress",
              "Playwright",
              "Jasmine",
              "Karma",
              "Cucumber",
              "SonarQube",
              "ESLint",
              "Prettier",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-brand-purple text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="border border-brand-purple/20 rounded-3xl p-8 hover:bg-brand-purple/[0.02] transition-colors">
          <h2 className="text-xl font-bold text-brand-purple mb-6">DevOps</h2>
          <div className="flex flex-wrap gap-3">
            {["Jenkins", "GitLab CI", "Git", "Jira", "Confluence"].map(
              (skill) => (
                <span
                  key={skill}
                  className="bg-brand-purple text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>

        {/* AI & Productivity */}
        <div className="border border-brand-purple/20 rounded-3xl p-8 hover:bg-brand-purple/[0.02] transition-colors">
          <h2 className="text-xl font-bold text-brand-purple mb-6">
            AI & Productivity
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "GitHub Copilot",
              "Cursor",
              "Prompt Engineering",
              "AI-assisted debugging",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-brand-purple text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Backend Technologies */}
        <div className="border border-brand-purple/20 rounded-3xl p-8 hover:bg-brand-purple/[0.02] transition-colors">
          <h2 className="text-xl font-bold text-brand-purple mb-6">
            Backend Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Java", "Spring Boot"].map((skill) => (
              <span
                key={skill}
                className="bg-brand-purple text-brand-cream px-4 py-1.5 rounded-full text-sm font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="border border-brand-purple/20 rounded-3xl p-8 md:p-10 w-full hover:bg-brand-purple/[0.02] transition-colors">
        <div className="flex items-center gap-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#CA5995"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
          </svg>
          <h2 className="text-xl font-bold text-brand-purple">Languages</h2>
        </div>
        <p className="text-brand-purple/80 font-medium text-lg ml-11">
          English (Professional) · Arabic (Native) · German (Beginner — A2)
        </p>
      </div>
    </section>
  );
}
