import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Clock, Tag } from 'lucide-react';
import { PACKAGE_CATEGORIES, PACKAGES_BY_CATEGORY } from '../data/travelData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedPackagesByCategory } from '../utils/localizeData';

export default function PackagesSection({ onViewDetails }) {
  const { t, currentLang } = useLanguage();
  const [activeTab, setActiveTab] = useState('pocket-friendly');

  const localizedPackagesByCategory = getLocalizedPackagesByCategory(PACKAGES_BY_CATEGORY, currentLang);
  const currentCategoryObj = PACKAGE_CATEGORIES.find(c => c.id === activeTab) || PACKAGE_CATEGORIES[0];
  const currentPackages = localizedPackagesByCategory[activeTab] || [];

  const getTranslatedCategoryLabel = (catId) => {
    if (catId === 'pocket-friendly') return t('packages.catPocket', 'Pocket Friendly');
    if (catId === 'round-tours') return t('packages.catRound', 'Round Tours');
    if (catId === 'day-tours') return t('packages.catDay', 'Day Tours');
    return catId;
  };

  return (
    <section id="packages" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-10 space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-xs font-extrabold uppercase tracking-wider border border-[#0284C7]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>{t('packages.badge', 'Curated Itineraries')}</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {t('packages.title', 'Premium Tour Packages')}
        </h2>

        <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl mx-auto">
          {t('packages.subtitle', 'Choose from our curated selection of packages designed for every traveler')}
        </p>
      </motion.div>

      {/* Centered Category Tabs Container with Animated Sliding Pill */}
      <div className="flex items-center justify-center mb-10 w-full overflow-x-auto scrollbar-none px-2 py-1">
        <div className="inline-flex items-center bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-slate-200/90 gap-1.5 shrink-0 relative">
          {PACKAGE_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 whitespace-nowrap z-10 ${
                  isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#0284C7] to-[#0369A1] rounded-full shadow-md shadow-sky-500/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{getTranslatedCategoryLabel(cat.id)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Sub-heading */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategoryObj.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            {getTranslatedCategoryLabel(currentCategoryObj.id)}
          </h3>
        </motion.div>
      </AnimatePresence>

      {/* Animated Light Theme Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {currentPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-sky-900/10 transition-all duration-300 border border-slate-200/80 hover:border-[#0284C7]/40 flex flex-col justify-between group cursor-pointer"
              onClick={() => onViewDetails(pkg)}
            >
              {/* Image Header with Zoom & Category Tag */}
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#0284C7] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 border border-white/60">
                    <Tag className="w-3 h-3" />
                    <span>{getTranslatedCategoryLabel(currentCategoryObj.id)}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 text-slate-900 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-serif text-lg sm:text-xl font-bold leading-snug text-slate-900 group-hover:text-[#0284C7] transition-colors">
                      {pkg.title}
                    </h4>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xl sm:text-2xl font-black text-[#0284C7]">
                        ${pkg.price}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wider">
                        / {t('packages.perPerson', 'person')}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewDetails(pkg);
                    }}
                    className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-3 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:bg-[#0369A1]"
                  >
                    <span>{t('packages.viewDetails', 'View Details')}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

    </section>
  );
}
