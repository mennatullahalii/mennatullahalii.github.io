// app/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-cream flex flex-col font-sans selection:bg-brand-pink selection:text-white">
      {/* Main Hero Content */}
      <section className="flex-grow flex flex-col justify-center px-8 max-w-7xl mx-auto w-full py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Right Column: Image (Appears on top for mobile, right for desktop) */}
          <div className="w-full max-w-sm lg:max-w-none lg:w-[300px] xl:w-[300px] shrink-0 order-first lg:order-last">
            <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50 bg-brand-peach/10">
              <Image
                src="/me.jpg" // <-- Change this to your actual photo (e.g., "/me.jpg")
                alt="Mennatullah Elsawy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Left Column: Text Content */}
          <div className="flex-1 w-full flex flex-col justify-center">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-peach/20 border border-brand-peach/40 w-fit mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
              </span>
              <span className="text-brand-purple text-xs font-bold tracking-wider uppercase">
                Available for Frontend and Fullstack roles in Berlin
              </span>
            </div>

            {/* Massive Typography */}
            <h1 className="text-[4rem] md:text-[5.5rem] xl:text-[7rem] font-extrabold leading-[0.95] tracking-tight mb-6">
              <span className="block text-brand-purple">Mennatullah</span>
              <span className="block text-brand-pink">Elsawy.</span>
            </h1>

            {/* About / Impact Statement */}
            <p className="max-w-2xl text-xl md:text-2xl text-brand-purple/80 leading-relaxed mb-10">
              Frontend Engineer with a strong end-to-end product mindset with
              <strong className="text-brand-purple font-bold">
                {" "}
                6+ years
              </strong>{" "}
              of of experience specializing in Angular and modern web
              technologies. Skilled in building scalable applications across
              e-commerce, healthcare, and enterprise domains. Expert in frontend
              architecture, leading complex migrations, and implementing
              microfrontend architecture to deliver high-performance
              applications while collaborating with diverse, multicultural teams
              across multiple countries.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="#footer"
                className="inline-flex items-center justify-center gap-2 bg-brand-purple text-brand-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-pink transition-colors"
              >
                Get in touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </Link>

              <a
                href="/cv.pdf"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-purple text-brand-purple px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-purple hover:text-brand-cream transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Contact Info Footer Bar */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-brand-purple/70 font-medium pb-8">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Berlin, Germany</span>
              </div>

              <a
                href="mailto:mennatullahalii.dev@gmail.com"
                className="flex items-center gap-2 hover:text-brand-pink transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
                <span>mennatullahalii.dev@gmail.com</span>
              </a>

              <a
                href="tel:+4917677055362"
                className="flex items-center gap-2 hover:text-brand-pink transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+49 176 77055362</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
