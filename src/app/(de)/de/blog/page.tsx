import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import { articlesDe, formatDateDe } from "@/data/blog.de";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbLd } from "@/lib/structuredData";

const SITE_URL = "https://www.fin-1.de";
const URL_PATH = "/de/blog";

export const metadata: Metadata = {
  title: "Blog — Babic Finance",
  description:
    "Fachartikel zu Versicherung, Finanzen und Vorsorge in Deutschland — verständlich erklärt von Vladislav Babich.",
  alternates: {
    canonical: `${SITE_URL}${URL_PATH}`,
  },
  openGraph: {
    title: "Blog — Babic Finance",
    description:
      "Fachartikel zu Versicherung, Finanzen und Vorsorge in Deutschland.",
    url: `${SITE_URL}${URL_PATH}`,
    siteName: "Babic Finance",
    type: "website",
    locale: "de_DE",
    images: ["/preview.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Babic Finance",
    description:
      "Fachartikel zu Versicherung, Finanzen und Vorsorge in Deutschland.",
    images: ["/preview.webp"],
  },
};

export default function BlogIndexDe() {
  return (
    <div className="min-h-screen" lang="de">
      <JsonLd
        data={getBreadcrumbLd([
          { name: "Startseite", url: `${SITE_URL}/de` },
          { name: "Blog", url: `${SITE_URL}${URL_PATH}` },
        ])}
      />
      <Navbar forceDark />
      <main className="pt-24 lg:pt-32 pb-20 lg:pb-28 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Link
              href="/de"
              className="text-gold text-sm font-medium hover:underline"
            >
              &larr; Zur Startseite
            </Link>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-4">
              Blog
            </h1>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Fachartikel zu Versicherung, Finanzen und Vorsorge in Deutschland —
              verständlich erklärt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articlesDe.map((article) => (
              <Link
                key={article.slug}
                href={`/de/blog/${article.slug}`}
                className="block h-full"
              >
                <div className="bg-white rounded-xl border border-border overflow-hidden group hover:shadow-lg hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      fill
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-xs text-muted-foreground mb-2">
                      {formatDateDe(article.date)} &middot; {article.readingTime}
                    </p>
                    <h2 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                    <span className="text-gold text-sm font-medium mt-4 inline-block">
                      Weiterlesen &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
