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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ssroy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soham Saha Roy - Software Engineer",
    template: "%s | Soham Saha Roy"
  },
  description: "Software Engineer specializing in enterprise SaaS platforms with analytics and compliance-first architecture. Building multi-tenant systems and leveraging LLMs to power analytics pipelines.",
  keywords: ["Soham Saha Roy","Soham" ,"Software Engineer", "Full Stack Developer", "React", "FastAPI", "MongoDB", "PostgreSQL", "Azure", "AI", "LLM", "Enterprise SaaS", "Multi-tenant Systems"],
  authors: [{ name: "Soham Saha Roy" }],
  creator: "Soham Saha Roy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Soham Saha Roy Portfolio",
    title: "Soham Saha Roy - Software Engineer",
    description: "Software Engineer specializing in enterprise SaaS platforms with analytics and compliance-first architecture.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Soham Saha Roy - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Saha Roy - Software Engineer",
    description: "Software Engineer specializing in enterprise SaaS platforms with analytics and compliance-first architecture.",
    creator: "@infuman69",
    images: ["/icon.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    // Add your verification tokens when available
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
