import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import {
  articlesDe,
  getArticleDeBySlug,
  getAllSlugsDe,
  formatDateDe,
} from "@/data/blog.de";
import { renderMarkdown } from "@/lib/markdownRenderer";

const SITE_URL = "https://www.fin-1.de";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugsDe().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleDeBySlug(slug);
  if (!article) return {};
  const url = `${SITE_URL}/de/blog/${article.slug}`;
  return {
    title: `${article.title} — Babic Finance`,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url,
      type: "article",
      locale: "de_DE",
      publishedTime: article.date,
      authors: ["Vladislav Babich"],
      images: [{ url: article.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.image],
    },
  };
}

export default async function BlogArticlePageDe({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleDeBySlug(slug);
  if (!article) notFound();

  const currentIndex = articlesDe.findIndex((a) => a.slug === slug);
  const nextArticle =
    articlesDe.length > 1
      ? articlesDe[(currentIndex + 1) % articlesDe.length]
      : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: [article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "de-DE",
    author: {
      "@type": "Person",
      name: "Vladislav Babich",
      url: SITE_URL + "/de",
    },
    publisher: {
      "@type": "Organization",
      name: "Babic Finance",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/de/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen" lang="de">
      <Navbar forceDark />
      <main className="pt-24 lg:pt-32 pb-20 lg:pb-28 bg-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/de/blog"
            className="text-gold text-sm font-medium hover:underline inline-block mb-8"
          >
            &larr; Alle Artikel
          </Link>

          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              className="object-cover"
              fill
              priority
            />
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <time dateTime={article.date}>{formatDateDe(article.date)}</time>
            <span>&middot;</span>
            <span>{article.readingTime}</span>
          </div>

          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
              <span className="text-gold font-bold text-sm">VB</span>
            </div>
            <div>
              <p className="font-semibold text-navy text-sm">Vladislav Babich</p>
              <p className="text-xs text-muted-foreground">
                Vermögensberater, Generali Vertriebspartner
              </p>
            </div>
          </div>

          <div className="max-w-[68ch]">{renderMarkdown(article.content)}</div>

          <div className="mt-14 p-8 bg-cream rounded-2xl text-center">
            <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mb-3">
              Persönliche Beratung anfragen
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              30 Minuten unverbindliches Erstgespräch — gerne auf Deutsch oder
              Russisch.
            </p>
            <a
              href="https://wa.me/491784743490"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all"
            >
              Termin vereinbaren
            </a>
          </div>

          {nextArticle && nextArticle.slug !== slug && (
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Lesen Sie auch
              </p>
              <Link
                href={`/de/blog/${nextArticle.slug}`}
                className="group block"
              >
                <h4 className="font-semibold text-navy group-hover:text-gold transition-colors">
                  {nextArticle.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {nextArticle.excerpt}
                </p>
              </Link>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
