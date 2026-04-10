import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles, formatDate } from "@/data/blog";

export const metadata: Metadata = {
  title: "Блог — Babic Finance",
  description:
    "Полезные статьи о финансах в Германии: пенсия, ипотека, страхование, инвестиции. Разбираем сложные темы простым языком.",
  openGraph: {
    title: "Блог — Babic Finance",
    description:
      "Полезные статьи о финансах в Германии от Владислава Бабича.",
  },
};

export default function BlogIndex() {
  return (
    <main className="pt-24 lg:pt-32 pb-20 lg:pb-28 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Link
            href="/"
            className="text-gold text-sm font-medium hover:underline"
          >
            &larr; На главную
          </Link>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-4">
            Блог
          </h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Полезные статьи о финансах в Германии — разбираю сложные темы
            простым языком
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
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
                    {formatDate(article.date)} &middot; {article.readingTime}
                  </p>
                  <h2 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {article.excerpt}
                  </p>
                  <span className="text-gold text-sm font-medium mt-4 inline-block">
                    Читать &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
