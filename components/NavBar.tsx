// components/Nav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full relative z-50">
      <div className="flex justify-between items-center px-6 md:px-8 py-6 max-w-7xl mx-auto">
        {/* 1. Logo (Width constrained for mobile) */}
        <Link
          href="/"
          className="w-48 md:w-64 shrink-0 text-brand-purple tracking-tight block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 550 100"
            className="w-full h-auto"
          >
            <text
              x="50%"
              y="50%"
              fontFamily="'Fira Code', 'Consolas', 'Courier New', monospace"
              fontSize="46"
              fill="#5D1C6A"
              textAnchor="middle"
              dominantBaseline="central"
            >
              <tspan opacity="0.5">&lt;</tspan>
              <tspan fontWeight="bold">Mennatullah</tspan>
              <tspan fontWeight="normal" opacity="0.9">
                {" "}
                Elsawy
              </tspan>
              <tspan opacity="0.5"> /&gt;</tspan>
            </text>
          </svg>
        </Link>

        {/* 2. Desktop Navigation (Hidden on mobile) */}
        <div className="hidden md:flex gap-8 items-center font-medium text-brand-purple">
          <Link href="/" className="hover:text-brand-pink transition-colors">
            About
          </Link>
          <Link
            href="/experience"
            className="hover:text-brand-pink transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/skills"
            className="hover:text-brand-pink transition-colors"
          >
            Skills
          </Link>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 bg-brand-purple text-brand-cream px-5 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
            CV
          </a>
        </div>

        {/* 3. Mobile Hamburger Toggle Button (Hidden on desktop) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-purple p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* 4. Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-b border-brand-purple/10 shadow-xl py-6 px-6 flex flex-col gap-6 font-medium text-brand-purple text-lg z-50">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-brand-pink transition-colors"
          >
            About
          </Link>
          <Link
            href="/experience"
            onClick={() => setIsOpen(false)}
            className="hover:text-brand-pink transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/skills"
            onClick={() => setIsOpen(false)}
            className="hover:text-brand-pink transition-colors"
          >
            Skills
          </Link>

          <div className="pt-4 border-t border-brand-purple/10">
            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center gap-2 w-full bg-brand-purple text-brand-cream px-5 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
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
        </div>
      )}
    </nav>
  );
}
