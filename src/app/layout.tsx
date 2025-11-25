import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "devran-app",
  description: "Randey's Portfolio Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans leading-relaxed selection:bg-black/10">
        <Providers>
          <div className="relative isolate min-h-screen overflow-hidden">
            <div className="grain-overlay" aria-hidden="true"></div>
            <div className="relative z-10">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}