import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Social() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="scale-in">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center mx-auto mb-6">
            <InstagramIcon className="w-8 h-8 text-white" />
          </div>
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            Социальные сети
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
            Подписывайтесь в Instagram
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Полезные советы по финансам в Германии, новости семинаров и реальные
            истории клиентов
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/babic_financegroup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-full hover:opacity-90 transition-all"
            >
              <InstagramIcon className="w-5 h-5" />
              @babic_financegroup
            </a>
            <a
              href="https://www.facebook.com/share/1ARmg3GGs7/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#1877F2] text-white font-semibold rounded-full hover:opacity-90 transition-all"
            >
              <FacebookIcon className="w-5 h-5" />
              Facebook
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
