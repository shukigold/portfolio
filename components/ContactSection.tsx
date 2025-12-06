"use client";
/* eslint-disable react/no-unescaped-entities */

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 relative flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-12">
            Contact
          </h2>
          
          <div className="flex flex-col sm:flex-row items-start gap-6 text-lg md:text-xl">
            <a
              href="tel:0547174791"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              Text Me
            </a>
            <a
              href="mailto:mail@joshgold.design"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

