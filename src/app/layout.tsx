import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pablostanley.com"),
  title: {
    default: "pablo stanley",
    template: "%s — pablo stanley",
  },
  description: "designer and creative-tools builder, ships in code. staff product designer at vercel (v0). founder of efecto. previously co-founded lummi (acquired by udemy).",
  openGraph: {
    title: "pablo stanley",
    description: "designer and creative-tools builder. staff product designer at vercel (v0). founder of efecto.",
    url: "https://pablostanley.com",
    siteName: "pablo stanley",
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
      className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Nav />
        <main className="flex-1 w-full max-w-2xl mx-auto px-6 py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
