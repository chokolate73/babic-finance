import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { articles, formatDate } from "@/data/blog";

export default function BlogPreview() {
  const latest = articles.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Блог
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3">
              Полезные статьи о финансах в Германии
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Разбираю сложные темы простым языком
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-wrap justify-center gap-6">
          {latest.map((article, i) => (
            <AnimateOnScroll
              key={article.slug}
              animation="fade-up"
              delay={i * 150}
              className="h-full w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Link href={`/blog/${article.slug}`} className="block h-full">
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
                    <h3 className="font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                    <span className="text-gold text-sm font-medium mt-4 inline-block">
                      Читать &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:opacity-90 transition-all"
            >
              Все статьи &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
