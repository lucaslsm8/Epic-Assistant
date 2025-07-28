import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Epic Seven Assistant - Build Calculator & Arena Scanner",
  description: "Advanced Epic Seven tool for hero builds, arena analysis, and PvP strategy. Features AI-powered enemy team scanner, build optimizer, and RTA analytics.",
  keywords: [
    "Epic Seven", 
    "E7", 
    "hero builds", 
    "arena scanner", 
    "RTA analytics", 
    "build optimizer",
    "PvP strategy",
    "tier list",
    "meta analysis",
    "Fribbels",
    "CeciliaBot"
  ],
  authors: [{ name: "Epic Seven Community" }],
  openGraph: {
    title: "Epic Seven Assistant",
    description: "Advanced Epic Seven tool for hero builds and arena analysis",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
