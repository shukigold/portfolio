"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Joshua Goldberg</p>
        <a
          href="https://open.spotify.com/playlist/mellow-moods"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-400 transition-colors"
        >
          Listening to: Mellow Moods →
        </a>
      </div>
    </footer>
  );
}

