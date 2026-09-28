import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import logoImg from '../assets/logo.png';
import tripadvisorImg from '../assets/tripadvisor.png';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        await fetch('https://formsubmit.co/ajax/inquiry@ceylonheaventours.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: 'New VIP Travel Club Subscription Request',
            _replyto: email,
            'Subscriber Email': email,
            'Subscription Type': 'VIP Travel Club Newsletter'
          })
        });
      } catch (err) {
        console.warn('FormSubmit newsletter error:', err);
      }

      const subject = encodeURIComponent('VIP Travel Club Subscription Request');
      const body = encodeURIComponent(`Please subscribe my email to Ceylon Heaven VIP Travel Club:\n\nEmail: ${email}`);
      window.location.href = `mailto:inquiry@ceylonheaventours.com?subject=${subject}&body=${body}`;

      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const navItems = [
    { label: t('nav.home', 'Home'), href: '#hero' },
    { label: t('nav.about', 'About Us'), href: '#about' },
    { label: t('nav.packages', 'Packages'), href: '#packages' },
    { label: t('nav.destinations', 'Destinations'), href: '#destinations' },
    { label: t('nav.reviews', 'Reviews'), href: '#reviews' },
    { label: t('nav.gallery', 'Gallery'), href: '#gallery' },
    { label: t('nav.contact', 'Contact Us'), href: '#contact' },
  ];

  return (
    <footer className="bg-slate-100 text-slate-800 pt-16 pb-12 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-200/80">
          
          {/* Column 1: Brand & Social Media Icons */}
          <div className="md:col-span-4 space-y-4 text-left">
            <a href="#hero" className="flex items-center gap-3.5 group inline-flex">
              <img 
                src={logoImg} 
                alt="Ceylon Heaven Logo" 
                className="h-12 w-12 object-contain flex-shrink-0 transition-transform group-hover:scale-105"
              />
              <div className="text-left">
                <span className="block font-serif text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  CEYLON HEAVEN
                </span>
                <span className="block text-[10px] font-bold tracking-widest text-[#0284C7] uppercase mt-0.5">
                  {t('footer.brandTag', 'PREMIUM TOURS & EXPEDITIONS')}
                </span>
              </div>
            </a>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-light">
              {t('footer.desc', 'Crafting luxury, bespoke, and budget-friendly travel experiences across Sri Lanka with 24/7 concierge support.')}
            </p>

            {/* Social Media Icons (Facebook, Instagram, WhatsApp, TikTok, Google, TripAdvisor) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/19SYFkQxi5/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all" 
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/ceylonheaventours?stkn=bDIweWRzMzgwcHEw&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all" 
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/94760660003" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all" 
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@ceylonheaventours?_r=1&_t=ZS-9A0Gw3OvcZe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 hover:bg-black hover:text-white hover:border-black transition-all" 
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.12V9.32a6.33 6.33 0 0 0-1-.08 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.96 1.66V6.9a4.85 4.85 0 0 1-1-.21z"/>
                </svg>
              </a>

              {/* Google */}
              <a 
                href="https://share.google/HelyafP75CKjv0ad3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] transition-all" 
                aria-label="Google"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>

              {/* TripAdvisor */}
              <a 
                href="https://www.tripadvisor.co.uk/Attraction_Review-g293962-d27710494-Reviews-Ceylon_Heaven_Tours-Colombo_Western_Province.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200/80 shadow-xs flex items-center justify-center hover:bg-[#00AA6C] hover:border-[#00AA6C] transition-all group overflow-hidden" 
                aria-label="TripAdvisor"
              >
                <img 
                  src={tripadvisorImg} 
                  alt="TripAdvisor" 
                  className="w-6 h-6 object-contain rounded-full"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-2 text-left space-y-3">
            <h4 className="font-serif text-lg font-bold text-slate-900">
              {t('footer.quickLinks', 'Quick Links')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-light">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#0284C7] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="font-serif text-lg font-bold text-slate-900">
              {t('footer.contactUs', 'Contact Us')}
            </h4>
            <div className="space-y-2.5 text-sm text-slate-700 font-light">
              <a href="tel:+94760660003" className="flex items-center gap-2.5 hover:text-[#0284C7] transition-colors">
                <Phone className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <span className="font-mono font-medium">+94 76 066 0003</span>
              </a>
              <a href="mailto:inquiry@ceylonheaventours.com" className="flex items-center gap-2.5 hover:text-[#0284C7] transition-colors">
                <Mail className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium break-all">inquiry@ceylonheaventours.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                <span className="font-medium">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-lg font-bold text-slate-900">
              VIP Travel Club
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Subscribe to get secret tour deals, package upgrades, and seasonal offers.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white px-4 py-2 rounded-full text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0284C7] flex-1 border border-slate-200 shadow-xs"
                />
                <button
                  type="submit"
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors flex items-center gap-1 shadow-sm"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : 'Subscribe'}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-700 font-medium">Welcome to VIP Travel Club!</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2024 Ceylon Heaven Tours. {t('footer.rights', 'All rights reserved.')}</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-slate-900 transition-colors">{t('footer.privacy', 'Privacy Policy')}</a>
            <a href="#terms" className="hover:text-slate-900 transition-colors">{t('footer.terms', 'Terms of Service')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
