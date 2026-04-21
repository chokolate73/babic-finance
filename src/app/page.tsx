import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Babic Finance — обновляется",
  description:
    "Сайт обновляется. Если вы ищете финансовые консультации, перейдите на страницу для клиентов.",
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-navy text-white">
      <Navbar forceDark />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl font-bold mb-6">
            Сайт <span className="text-gold">обновляется</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Если вы ищете финансовые консультации,{" "}
            <a
              href="/klienty"
              className="text-gold underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              перейдите на страницу для клиентов
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
