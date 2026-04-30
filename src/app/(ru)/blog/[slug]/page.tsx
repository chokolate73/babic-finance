import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getAllSlugs, formatDate } from "@/data/blog";
import JsonLd from "@/components/JsonLd";
import { ORG_ID, PERSON_ID, SITE_URL } from "@/lib/structuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const url = `${SITE_URL}/blog/${article.slug}`;
  return {
    title: `${article.title} - Babic Finance`,
    description: article.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        ru: url,
        "x-default": url,
      },
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      url,
      publishedTime: article.date,
      authors: ["Владислав Бабич"],
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

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-[family-name:var(--font-serif)] text-2xl font-bold text-navy mt-10 mb-4"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="font-[family-name:var(--font-serif)] text-xl font-bold text-navy mt-8 mb-3"
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      const formatted = line
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>");
      elements.push(
        <p
          key={i}
          className="text-foreground/80 leading-[1.7] mb-4"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const url = `${SITE_URL}/blog/${article.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "ru",
  };

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <main className="pt-24 lg:pt-32 pb-20 lg:pb-28 bg-white min-h-screen">
      <JsonLd data={articleLd} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-gold text-sm font-medium hover:underline inline-block mb-8"
        >
          &larr; Все статьи
        </Link>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
          <Image
            src={article.image}
            alt={article.title}
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>&middot;</span>
          <span>{article.readingTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
            <span className="text-gold font-bold text-sm">ВБ</span>
          </div>
          <div>
            <p className="font-semibold text-navy text-sm">Владислав Бабич</p>
            <p className="text-xs text-muted-foreground">
              Финансовый консультант, региональный директор DVAG
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[65ch]">{renderMarkdown(article.content)}</div>

        {/* CTA */}
        <div className="mt-14 p-8 bg-cream rounded-2xl text-center">
          <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-navy mb-3">
            Нужна персональная консультация?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Разберём вашу ситуацию на бесплатной встрече - без обязательств
          </p>
          <a
            href="https://wa.me/491784743490"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all"
          >
            Связаться
          </a>
        </div>

        {/* Next article */}
        {nextArticle && nextArticle.slug !== slug && (
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              Читайте также
            </p>
            <Link
              href={`/blog/${nextArticle.slug}`}
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
  );
}
