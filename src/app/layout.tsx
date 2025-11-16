import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers"; // Import our new provider

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
      <body className="bg-white text-slate-800 font-sans leading-relaxed selection:bg-indigo-100">
        <Providers> {/* Wrap the app in our provider */}
          <div className="relative z-10">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}