"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-4xl mx-auto text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Joshua Goldberg</p>
      </div>
    </footer>
  );
}

