import React from 'react';
import { X, Check, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedDestination } from '../../utils/localizeData';

export default function DestinationModal({ destination: rawDestination, onClose, onBookDestination }) {
  const { t, currentLang } = useLanguage();
  if (!rawDestination) return null;

  const destination = getLocalizedDestination(rawDestination, currentLang);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto my-8"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/80 text-gray-700 hover:bg-[#0284C7] hover:text-white transition-colors backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Photo */}
          <div className="relative h-64 rounded-2xl overflow-hidden -mt-2 -mx-2 mb-6">
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white text-left space-y-1">
              <span className="bg-[#0284C7] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {destination.country}
              </span>
              <h3 className="font-serif text-3xl font-bold">{destination.name}</h3>
            </div>
          </div>

          {/* Details */}
          <div className="text-left space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">{t('modals.destOverview', 'Destination Overview')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {destination.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-base mb-3">{t('detailsView.highlights', 'Tour Highlights')}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-800 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <Check className="w-4 h-4 text-[#0284C7] flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500">{destination.toursCount}</span>
              <button
                onClick={() => {
                  onClose();
                  onBookDestination(destination);
                }}
                className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t('destinations.exploreDest', 'Explore Destination')}</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
