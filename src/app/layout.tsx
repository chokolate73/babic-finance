import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
