import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4">
            Project not found
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/#work"
            className="text-slate-600 hover:text-slate-950 transition-colors text-sm"
          >
            ← Back to Work
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

