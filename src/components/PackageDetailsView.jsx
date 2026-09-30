import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, Clock, Users, Star, Check, X, 
  Send, Image as ImageIcon, Sparkles, ShieldCheck, ArrowRight,
  Headphones, Phone, MessageSquare, Mail, Calendar, Compass, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PACKAGES } from '../data/travelData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedPackage, getLocalizedPackages } from '../utils/localizeData';
import sigiriya1 from '../assets/images/sigiriya-1.webp';
import kandy1 from '../assets/images/damro.webp';
import mirissa from '../assets/images/mirissa.webp';
import ninearch from '../assets/images/ninearch.webp';
import img11 from '../assets/images/11.webp';

export default function PackageDetailsView({ packageData: rawPackageData, onBack, onSelectPackage, onBookPackage }) {
  const { t, currentLang } = useLanguage();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [rawPackageData]);

  if (!rawPackageData) return null;

  const packageData = getLocalizedPackage(rawPackageData, currentLang);
  const otherPackages = getLocalizedPackages(PACKAGES.filter(p => p.id !== rawPackageData.id).slice(0, 6), currentLang);

  const defaultGallery = [
    sigiriya1,
    kandy1,
    mirissa,
    ninearch,
    img11
  ];

  const galleryImages = (packageData.gallery && packageData.gallery.length > 0)
    ? packageData.gallery
    : defaultGallery;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#0284C7] selection:text-white pb-24">
      
      {/* 1. Ultra-Luxury Hero Image Banner Header */}
      <div className="relative min-h-[380px] sm:min-h-[460px] flex items-end justify-center pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 shadow-2xl overflow-hidden">
        
        {/* Background Package Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${packageData.image || defaultGallery[0]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/65 to-black/80" />

        {/* Top Back Navigation Bar */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8 right-4 sm:right-8 max-w-7xl mx-auto flex items-center justify-between z-20">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/35 backdrop-blur-md text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border border-white/30 shadow-lg transform hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('detailsView.back', '← Back to Packages')}</span>
          </button>

          <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white border border-white/30 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
            <span>{packageData.packageType || 'Bespoke Tour'}</span>
          </span>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 pt-8">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#0284C7]/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-widest border border-cyan-300/30">
              {t('packages.badge', 'Curated Itineraries')}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
              {packageData.title}
            </h1>
          </motion.div>

          {/* Badges Pill Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap pt-2">
            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/25 shadow-md">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>{packageData.duration}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/25 shadow-md">
              <Users className="w-3.5 h-3.5 text-cyan-200" />
              <span>{packageData.travelers || '2-12 Travelers'}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-white border border-white/25 shadow-md">
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>{packageData.rating ? `★ ${packageData.rating}` : '5.0 Verified'}</span>
            </span>
          </div>

        </div>

      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 text-left items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Card 1: Package Overview Container */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-xl space-y-3"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      {t('detailsView.overview', 'Package Overview')}
                    </h3>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60 hidden sm:inline-block">
                  {t('packages.badge', 'Curated Itineraries')}
                </span>
              </div>

              <div className="max-h-[160px] overflow-y-auto custom-scrollbar pr-2">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {packageData.overview}
                </p>
              </div>
            </motion.div>

            {/* Card 2: Detailed Itinerary */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center font-bold">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                      {t('detailsView.itinerary', 'Day-by-Day Itinerary')}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="max-h-[360px] overflow-y-auto custom-scrollbar pr-3 space-y-6 relative border-l-2 border-[#0284C7]/30 pl-6 ml-3 pt-2">
                {packageData.itinerary && packageData.itinerary.map((item, idx) => (
                  <div key={idx} className="relative space-y-1.5 group">
                    <div className="absolute -left-[31px] top-0.5 w-6 h-6 rounded-full bg-[#0284C7] text-white flex items-center justify-center font-bold text-[10px] ring-4 ring-sky-100 group-hover:scale-110 transition-transform shadow-sm">
                      {idx + 1}
                    </div>
                    
                    <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200/80 text-[#0284C7] px-3.5 py-1 rounded-full text-xs font-bold shadow-xs">
                      <span>{item.day}</span>
                      <span>•</span>
                      <span>{item.title}</span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light pt-0.5">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3: Included & Excluded */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-xl space-y-4"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                {t('detailsView.included', "What's Included")} & {t('detailsView.notIncluded', "What's Not Included")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50/80 border border-emerald-200/80 p-5 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2 border-b border-emerald-200/60 pb-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{t('detailsView.included', "What's Included")}</span>
                  </h4>
                  <div className="max-h-[220px] overflow-y-auto custom-scrollbar pr-2">
                    <ul className="space-y-2.5 text-xs text-emerald-950 font-light">
                      {packageData.included && packageData.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-rose-50/80 border border-rose-200/80 p-5 rounded-2xl space-y-3">
                  <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-2 border-b border-rose-200/60 pb-2">
                    <X className="w-4 h-4 text-rose-600" />
                    <span>{t('detailsView.notIncluded', "What's Not Included")}</span>
                  </h4>
                  <div className="max-h-[220px] overflow-y-auto custom-scrollbar pr-2">
                    <ul className="space-y-2.5 text-xs text-rose-950 font-light">
                      {packageData.notIncluded && packageData.notIncluded.map((notInc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <X className="w-3.5 h-3.5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span>{notInc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Price Box */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-xl text-center space-y-5 relative overflow-hidden">
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  {t('detailsView.priceFrom', 'Starting from')}
                </span>
                <span className="text-4xl sm:text-5xl font-black text-[#0284C7] block">${packageData.price}</span>
                <span className="text-[11px] font-medium text-slate-500">{t('detailsView.perPerson', 'per person')}</span>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => onBookPackage(packageData)}
                  className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-3.5 rounded-2xl font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('detailsView.bookNow', 'Book This Package Now')}</span>
                </button>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-lg text-left space-y-3">
              <h4 className="font-serif text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0284C7]" />
                  <span>{t('detailsView.highlights', 'Tour Highlights')}</span>
                </span>
              </h4>

              <div className="max-h-[220px] overflow-y-auto custom-scrollbar pr-2">
                <ul className="space-y-2.5 text-xs text-slate-700">
                  {packageData.highlights && packageData.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-light">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Info */}
            <div className="bg-sky-50/90 p-5 rounded-[2rem] border border-sky-200/80 shadow-sm text-left space-y-2">
              <h4 className="font-serif text-base font-bold text-sky-950 flex items-center gap-2 border-b border-sky-200/60 pb-2">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>{t('detailsView.importantInfo', 'Important Information')}</span>
              </h4>
              <div className="max-h-[120px] overflow-y-auto custom-scrollbar pr-2">
                <ul className="space-y-2 text-xs text-sky-900 font-light pt-1">
                  {packageData.importantInfo && packageData.importantInfo.map((info, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#0284C7] flex-shrink-0" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 24/7 Dedicated Concierge */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200/80 shadow-lg text-left space-y-3">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center font-bold flex-shrink-0">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base">{t('about.feat3Title', '24/7 Personal Concierge')}</h4>
                </div>
              </div>

              <div className="space-y-2 text-xs pt-1">
                <a href="tel:+94760660003" className="flex items-center gap-2 text-slate-700 font-medium hover:text-[#0284C7] transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span className="font-mono">+94 76 066 0003</span>
                </a>
                <a href="mailto:inquiries@ceylonheaventours.com" className="flex items-center gap-2 text-slate-700 font-medium hover:text-[#0284C7] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span className="text-[11px] truncate">inquiries@ceylonheaventours.com</span>
                </a>
              </div>

              <a
                href="https://wa.me/94760660003?text=Hello!%20I%20want%20to%20customize%20this%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp (+94 76 066 0003)</span>
              </a>
            </div>

          </div>

        </div>

        {/* Gallery */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-200/80 shadow-xl text-center space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs text-[#0284C7] font-bold uppercase tracking-wider bg-sky-50 px-3.5 py-1 rounded-full border border-sky-200/60">
              <ImageIcon className="w-4 h-4" />
              <span>{t('gallery.badge', 'Visual Journey')}</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              {t('gallery.title', 'Capturing Moments of Wonder')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((imgUrl, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedGalleryImage(imgUrl)}
                className="rounded-2xl overflow-hidden h-52 sm:h-60 bg-slate-100 border border-slate-200 shadow-md relative group cursor-pointer"
              >
                <img 
                  src={typeof imgUrl === 'string' && imgUrl.startsWith('http') ? imgUrl : defaultGallery[idx % defaultGallery.length]} 
                  alt={`Gallery photo ${idx + 1}`} 
                  className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Similar Recommended Packages */}
        {otherPackages.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                {t('packages.title', 'Premium Tour Packages')}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => onSelectPackage(pkg)}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="h-44 rounded-xl overflow-hidden">
                      <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-slate-900 group-hover:text-[#0284C7] transition-colors">{pkg.title}</h4>
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-slate-100 text-xs font-bold text-[#0284C7]">
                    <span>${pkg.price} / {t('packages.perPerson', 'person')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <div 
            onClick={() => setSelectedGalleryImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden relative shadow-2xl bg-black"
            >
              <img src={selectedGalleryImage} alt="Expanded gallery view" className="w-full h-full object-contain" />
              <button 
                onClick={() => setSelectedGalleryImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
