import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
import JsonLd from "@/components/JsonLd";
import {
  getOrganizationLd,
  getPersonLd,
  getWebSiteLd,
} from "@/lib/structuredData";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

const siteDescription =
  "Особистий фінансовий консультант у Німеччині — консультації українською та російською від Владислава Бабича.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fin-1.de"),
  title: "Babic Finance",
  description: siteDescription,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Babic Finance",
    description: siteDescription,
    url: "https://www.fin-1.de/ua",
    siteName: "Babic Finance",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "/preview.webp",
        type: "image/webp",
        alt: "Babic Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babic Finance",
    description: siteDescription,
    images: ["/preview.webp"],
  },
};

export default function UaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd data={getOrganizationLd("uk")} />
        <JsonLd data={getPersonLd()} />
        <JsonLd data={getWebSiteLd("uk")} />
        {children}
      </body>
    </html>
  );
}
