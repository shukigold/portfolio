import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshua Goldberg — Product Designer",
  description: "Product / UX/UI Designer creating clear, trustworthy interfaces and calm, minimal experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-950 antialiased">
        {children}
      </body>
    </html>
  );
}

