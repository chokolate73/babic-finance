import { Phone, Mail, MapPin } from "lucide-react";
import InstagramIcon from "../InstagramIcon";
import FacebookIcon from "../FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-[family-name:var(--font-serif)] text-xl font-bold text-white">
                Babic
              </span>
              <span className="font-[family-name:var(--font-serif)] text-xl font-bold text-gold">
                Finance
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Особиста фінансова консультація в Німеччині - через DVAG.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Послуги</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Фінансове консультування</li>
              <li>Інвестиції та фонди</li>
              <li>Пенсійне забезпечення</li>
              <li>Страхування</li>
              <li>Іпотечне фінансування</li>
              <li>Ощадне будівництво (Bausparen)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Контакт</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+4922418989424"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  +49 2241 89 89 424
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="mailto:Vladislav.Babic@dvag.de"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Vladislav.Babic@dvag.de
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJYxNUvUrfvkcR9wFAfsljmig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  Mottmannstr. 8, 53842 Troisdorf
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Соцмережі</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.instagram.com/babic_financegroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1ARmg3GGs7/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.dvag.de/vladislav.babic/karriere.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 hover:text-white transition-colors"
              >
                Профіль на DVAG
              </a>
              <a
                href="/ua/impressum"
                className="block text-white/50 hover:text-white transition-colors"
              >
                Impressum
              </a>
              <a
                href="/ua/datenschutz"
                className="block text-white/50 hover:text-white transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; 2026 Владислав Бабіч - регіональний директор, DVAG. Усі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}
