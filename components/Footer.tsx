// app/contact/page.tsx

export default function Footer() {
  return (
    <section
      className="flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-700"
      id="footer"
    >
      {/* The Gradient Card */}
      <div className="bg-gradient-to-br from-[#8d3b70] to-brand-purple rounded-[2.5rem] p-10 md:p-16 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-cream tracking-tight">
          Let's build something.
        </h1>

        <p className="text-lg md:text-xl text-brand-cream opacity-90 mb-10 max-w-2xl leading-relaxed">
          Open to frontend roles in Germany. Full work authorization for Germany
          — no sponsorship required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Email Button (Peach) */}
          <a
            href="mailto:mennatullahalii.dev@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium bg-brand-peach text-brand-purple hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            mennatullahalii.dev@gmail.com
          </a>

          {/* LinkedIn Button (Outline) */}
          <a
            href="https://linkedin.com/in/mennatullah-alii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium border border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-purple transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
