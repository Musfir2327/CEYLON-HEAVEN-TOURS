import React from 'react';
import { X, Search, MapPin, Calendar, Users, Star, CheckCircle2, Send, Info, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PACKAGES } from '../../data/travelData';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedPackage, getLocalizedPackages } from '../../utils/localizeData';

export default function SearchResultsModal({ isOpen, searchParams, onClose, onViewDetails, onBookPackage }) {
  const { t, currentLang } = useLanguage();
  if (!isOpen || !searchParams) return null;

  const { destination, date, guests } = searchParams;

  const rawMatchedPackage = PACKAGES.find(p => 
    p.title.toLowerCase().includes(destination.toLowerCase()) || 
    p.category.toLowerCase().includes(destination.toLowerCase())
  ) || PACKAGES[0];

  const matchedPackage = getLocalizedPackage(rawMatchedPackage, currentLang);
  const suggestedPackages = getLocalizedPackages(PACKAGES.filter(p => p.id !== rawMatchedPackage.id).slice(0, 2), currentLang);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto my-8 text-left"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0284C7] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 mb-6 pb-4 border-b border-slate-100">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 text-xs font-bold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" />
              <span>{t('modals.searchResults', 'Search Results')}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              {t('modals.searchResults', 'Search Results')}
            </h3>

            {/* Active Search Filter Badges */}
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{destination}</span>
              </span>

              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{date || 'Selected Date'}</span>
              </span>

              <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200">
                <Users className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>{guests || '2 Travelers'}</span>
              </span>
            </div>
          </div>

          {/* Best Match Featured Card */}
          <div className="space-y-6">
            <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Best Match Package</span>
            </div>

            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-md grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 h-56 md:h-auto relative bg-slate-200">
                <img 
                  src={matchedPackage.image} 
                  alt={matchedPackage.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#0284C7] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {matchedPackage.duration}
                </span>
              </div>

              <div className="md:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#0284C7]">${matchedPackage.price} <span className="text-xs font-normal text-slate-500">/ {t('packages.perPerson', 'person')}</span></span>
                    <span className="flex items-center text-amber-500 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500 mr-1" />
                      {matchedPackage.rating} ({matchedPackage.reviewsCount})
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-slate-900">
                    {matchedPackage.title}
                  </h4>

                  <p className="text-slate-600 text-xs leading-relaxed font-light line-clamp-2">
                    {matchedPackage.overview}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onViewDetails(matchedPackage);
                    }}
                    className="flex-1 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-4 h-4 text-[#0284C7]" />
                    <span>{t('packages.viewDetails', 'View Details')}</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onBookPackage(matchedPackage);
                    }}
                    className="flex-1 bg-[#0284C7] hover:bg-[#0369A1] text-white py-2.5 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('packages.bookPackage', 'Book Package')}</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Other Available Recommendations */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500">{t('packages.title', 'Premium Tour Packages')}</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {suggestedPackages.map((pkg) => (
                  <div key={pkg.id} className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
                    <div>
                      <h6 className="font-serif font-bold text-sm text-slate-900 line-clamp-1">{pkg.title}</h6>
                      <span className="text-xs font-bold text-[#0284C7]">${pkg.price} • {pkg.duration}</span>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onViewDetails(pkg);
                      }}
                      className="text-xs font-bold text-[#0284C7] hover:underline flex-shrink-0"
                    >
                      {t('packages.viewDetails', 'View Details')} →
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
