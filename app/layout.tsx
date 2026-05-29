import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// 1. Define your metadata here
export const metadata: Metadata = {
  title: "Mennatullah Elsawy | Frontend Engineer",
  description:
    "Frontend Engineer specializing in scalable enterprise applications.",
  icons: {
    icon: "/portfolio.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added scroll-smooth so clicking nav links gently scrolls to the section
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased max-w-5xl mx-auto py-8 flex flex-col gap-24`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
