"use client";
/* eslint-disable react/no-unescaped-entities */

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-12">
            About
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed">
            <p>
              Product designer based in Israel, working on complex B2B
              interfaces and fintech platforms. I specialize in designing clear,
              trustworthy experiences for data-heavy products.
            </p>
            <p>
              My work spans dashboards, role-based permissions, vendor
              management systems, payment workflows, and design systems. I&apos;m
              passionate about creating data-heavy interfaces that feel simple
              and accessible—transforming complex workflows into intuitive
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

