import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Babic Finance",
  description:
    "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
  openGraph: {
    title: "Babic Finance",
    description:
      "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
    url: "https://babic-wealth-guide.base44.app",
    siteName: "Babic Finance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Babic Finance",
    description:
      "Персональная платформа финансового планирования и экспертной поддержки для русскоязычных клиентов в Германии от Владислава Бабича.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
