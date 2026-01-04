import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";

const helalSans = Inter({
  variable: "--font-helal-sans",
  subsets: ["latin"],
  display: "swap",
});

const helalDisplay = Space_Grotesk({
  variable: "--font-helal-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helal Ahmad — Systems Engineer & AI Architect",
  description:
    "Ultra-premium portfolio for Helal Ahmad. Systems engineer, full-stack architect, and AI builder crafting production-grade experiences.",
  metadataBase: new URL("https://helal.studio"),
  openGraph: {
    title: "Helal Ahmad — Systems Engineer & AI Architect",
    description:
      "Futuristic, production-ready work across AI, full-stack systems, and human-machine interfaces.",
    url: "https://helal.studio",
    siteName: "Helal Ahmad",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helal Ahmad — Systems Engineer & AI Architect",
    description:
      "Production-grade systems, AI interfaces, and immersive engineering craft.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${helalSans.variable} ${helalDisplay.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
