import type { Metadata } from "next";
import Navbar from "@/components/de/Navbar";
import Footer from "@/components/de/Footer";
import FloatingButtons from "@/components/de/FloatingButtons";
import ServicePage from "@/components/services/ServicePage";
import { services } from "@/data/services";
import { buildServiceMetadata } from "@/lib/serviceMetadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildServiceMetadata(slug, "de", "/de/leistungen");
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
    <div className="min-h-screen" lang="de">
      <Navbar forceDark />
      <main className="pt-24 lg:pt-28">
        <ServicePage slug={slug} locale="de" pathPrefix="/de/leistungen" />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
