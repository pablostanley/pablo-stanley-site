import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pablostanley.com"),
  title: {
    default: "Pablo Stanley",
    template: "%s — Pablo Stanley",
  },
  description: "Designer, illustrator, and maker. Personal site of Pablo Stanley.",
  openGraph: {
    title: "Pablo Stanley",
    description: "Designer, illustrator, and maker.",
    url: "https://pablostanley.com",
    siteName: "Pablo Stanley",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@pablostanley",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Nav />
        <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
