import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thrive Health Link | Ensuring Universal Access to Child Healthcare in Uganda",
  description: "A youth-led initiative optimizing child health among underserved communities in Uganda's urban slums and rural areas through immunization services and community-facility linkages.",
  keywords: [
    "child health",
    "Uganda healthcare",
    "immunization",
    "community health",
    "zero dose children",
    "vaccine access",
    "Kampala slums",
    "rural healthcare",
    "health equity",
  ],
  authors: [{ name: "Thrive Health Link" }],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Thrive Health Link - Every Child Deserves Health",
    description: "Breaking socioeconomic barriers to accessing child health services for marginalized communities in Uganda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
