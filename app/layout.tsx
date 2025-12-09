import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoltVentures - Professional Electrical Engineering Services | Lebanon",
  description: "Expert electrical engineering services in Lebanon. UPS systems, generator maintenance, solar installations, distribution boards, smart home automation, CCTV monitoring, ATS systems, IoT solutions, electrical drawings, and comprehensive electrical services. Contact Gaby Zoghby at 71491169.",
  keywords: "electrical engineering Lebanon, UPS systems, generator maintenance, solar systems Lebanon, distribution boards, smart home automation, CCTV installation, ATS systems, IoT solutions, electrical drawings, electrical repairs, electrical installation, high voltage systems, power management, lighting solutions, electrical services Beirut, certified electrician Lebanon",
  authors: [{ name: "Gaby Zoghby", url: "https://voltventures961.com" }],
  openGraph: {
    title: "VoltVentures - Professional Electrical Engineering Services | Lebanon",
    description: "Expert electrical engineering solutions including UPS, generators, solar systems, smart home automation, CCTV, and more in Lebanon.",
    url: "https://voltventures961.com",
    siteName: "VoltVentures",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://voltventures961.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
