// app/experience/page.tsx
import Image from "next/image";
export default function ExperiencePage() {
  return (
    <section className="flex-grow px-8 max-w-5xl mx-auto w-full py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5D1C6A] tracking-tight">
          Experience.
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        {/* Card 1: Jumia */}
        <div className="border border-[#5D1C6A]/20 rounded-3xl p-8 md:p-10 transition-colors hover:bg-[#5D1C6A]/[0.02]">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Logo Box */}
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-[#5D1C6A]/10 shadow-sm flex items-center justify-center overflow-hidden  ">
              <Image
                src="/logos/jumia-logo.jpg"
                alt="Jumia Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Header Text */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h2 className="text-2xl font-bold text-[#5D1C6A]">
                  Senior Frontend Engineer
                </h2>
                <span className="text-[#CA5995] font-medium mt-1 md:mt-0 font-mono text-sm md:text-base tracking-wide">
                  11/2024 – 08/2025
                </span>
              </div>
              <h3 className="text-[#5D1C6A]/80 font-medium text-lg">
                Jumia — Leading e-commerce platform in Africa
              </h3>
            </div>
          </div>

          <ul className="space-y-4 text-[#5D1C6A]/80 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Architected and led the migration of seven separate projects
                into a unified Nx Monorepo, improving code sharing by 30%.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Implemented Microfrontends using Module Federation for
                independent deployments and enhanced scalability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Reduced application bundle sizes by 25% via build optimization
                and tree-shaking for standalone architectures.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Led the technical upgrade to Angular 19 and introduced modern
                reactive patterns to the team.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Leveraged AI-assisted coding (Copilot/Cursor) to accelerate
                Cypress E2E and Jest test generation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Established high code quality with Jest unit tests and Jenkins
                CI/CD pipelines.
              </span>
            </li>
          </ul>
        </div>

        {/* Card 2: Cegedim */}
        <div className="border border-[#5D1C6A]/20 rounded-3xl p-8 md:p-10 transition-colors hover:bg-[#5D1C6A]/[0.02]">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Logo Box */}
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-[#5D1C6A]/10 shadow-sm flex items-center justify-center overflow-hidden  ">
              <Image
                src="/logos/cegedim-logo.jpg"
                alt="Cegedim Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Header Text */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h2 className="text-2xl font-bold text-[#5D1C6A]">
                  Frontend Developer
                </h2>
                <span className="text-[#CA5995] font-medium mt-1 md:mt-0 font-mono text-sm md:text-base tracking-wide">
                  07/2021 – 10/2024
                </span>
              </div>
              <h3 className="text-[#5D1C6A]/80 font-medium text-lg">
                Cegedim — Global healthcare technology & cloud services
              </h3>
            </div>
          </div>

          <ul className="space-y-4 text-[#5D1C6A]/80 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Contributed to the development of ITCare, a centralized cloud
                management platform, building interactive features for resource
                management using Angular.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Translated complex Figma designs into responsive, pixel-perfect,
                functional user interfaces, ensuring a seamless user experience
                across all devices.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Collaborated with UI/UX team to create centralized Design System
                using Storybook to ensure UI consistency and development
                efficiency.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Enforced high code quality, clean code and security standards by
                utilizing SonarQube for automated static analysis and
                vulnerability detection.
              </span>
            </li>
          </ul>
        </div>

        {/* Card 3: Asset Technology Group */}
        <div className="border border-[#5D1C6A]/20 rounded-3xl p-8 md:p-10 transition-colors hover:bg-[#5D1C6A]/[0.02]">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Logo Box */}
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-[#5D1C6A]/10 shadow-sm flex items-center justify-center overflow-hidden  ">
              <Image
                src="/logos/asset-logo.jpg"
                alt="Asset Technology Group Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Header Text */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h2 className="text-2xl font-bold text-[#5D1C6A]">
                  Software Developer
                </h2>
                <span className="text-[#CA5995] font-medium mt-1 md:mt-0 font-mono text-sm md:text-base tracking-wide">
                  07/2019 – 06/2021
                </span>
              </div>
              <h3 className="text-[#5D1C6A]/80 font-medium text-lg">
                Asset Technology Group — IT Solutions and software development
              </h3>
            </div>
          </div>

          <ul className="space-y-4 text-[#5D1C6A]/80 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Developed Campaign Management System for Vodafone Egypt with
                advanced segmentation features.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Contributed to frontend development using Angular and strictly
                managed API contract integrations to ensure predictable state
                behavior.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Managed the global state of the application architecture using
                NGRX store.
              </span>
            </li>
          </ul>
        </div>

        {/* Card 4: ComRec Solutions */}
        <div className="border border-[#5D1C6A]/20 rounded-3xl p-8 md:p-10 transition-colors hover:bg-[#5D1C6A]/[0.02]">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Logo Box */}
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white border border-[#5D1C6A]/10 shadow-sm flex items-center justify-center overflow-hidden  ">
              <Image
                src="/logos/comrec-logo.jpg"
                alt="ComRec Solutions Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Header Text */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-1">
                <h2 className="text-2xl font-bold text-[#5D1C6A]">
                  Software Developer
                </h2>
                <span className="text-[#CA5995] font-medium mt-1 md:mt-0 font-mono text-sm md:text-base tracking-wide">
                  11/2018 – 06/2019
                </span>
              </div>
              <h3 className="text-[#5D1C6A]/80 font-medium text-lg">
                ComRec Solutions — Healthcare software solutions
              </h3>
            </div>
          </div>

          <ul className="space-y-4 text-[#5D1C6A]/80 text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Developed and maintained frontend modules using AngularJS
                alongside desktop application features.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFB090] text-xl leading-none mt-1">
                •
              </span>
              <span>
                Gained critical experience working with legacy code systems and
                improving overall code maintainability.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
