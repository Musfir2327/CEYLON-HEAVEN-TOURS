import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, MapPin, Sparkles, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { REVIEWS } from '../data/travelData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedReviews, getLocalizedReview } from '../utils/localizeData';

export default function ReviewsSection() {
  const { t, currentLang } = useLanguage();
  const [selectedReviewModal, setSelectedReviewModal] = useState(null);
  const marqueeRef = useRef(null);

  const localizedReviews = getLocalizedReviews(REVIEWS, currentLang);
  const activeModalReview = selectedReviewModal ? getLocalizedReview(selectedReviewModal, currentLang) : null;

  // Duplicate localizedReviews array to create seamless infinite marquee loop
  const duplicatedReviews = [...localizedReviews, ...localizedReviews, ...localizedReviews];

  const handleManualScroll = (direction) => {
    if (marqueeRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      marqueeRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-900 relative">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4 relative z-10">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-xs font-extrabold uppercase tracking-wider border border-[#0284C7]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>{t('reviews.badge', 'Guest Stories')}</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {t('reviews.title', 'What Our Travelers Say')}
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 text-base sm:text-lg font-normal max-w-2xl mx-auto">
          {t('reviews.subtitle', 'Read genuine reviews and experiences shared by luxury explorers from around the globe.')}
        </p>

        {/* Overall Rating Pill */}
        <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
          <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2 rounded-full border border-slate-200/90 text-xs font-bold text-slate-800 shadow-sm">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span>5.0 / 5.0 Rated Excellent</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-200/80 text-xs font-bold shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t('reviews.verifiedTrip', 'Verified Guest')}</span>
          </div>
        </div>

      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-6 px-2 relative z-10 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 ">
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleManualScroll('left')}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white flex items-center justify-center border border-slate-200 shadow-sm transition-all transform active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleManualScroll('right')}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full bg-white hover:bg-[#0284C7] text-slate-700 hover:text-white flex items-center justify-center border border-slate-200 shadow-sm transition-all transform active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="relative z-10 w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

        <div 
          ref={marqueeRef}
          className="animate-marquee-left flex gap-6 sm:gap-8 items-stretch scrollbar-none overflow-x-auto"
        >
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[340px] sm:w-[420px] flex-shrink-0 bg-white p-6 sm:p-7 rounded-[2rem] border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-[#0284C7]/40 transition-all duration-300 flex flex-col justify-between text-left relative group cursor-pointer"
              onClick={() => setSelectedReviewModal(review)}
            >
              {/* Card Header */}
              <div className="space-y-4">
                
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  
                  {/* Author Details */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0284C7] to-cyan-600 text-white font-bold text-base flex items-center justify-center shadow-md border-2 border-white flex-shrink-0">
                      {review.initials || review.name.charAt(0)}
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-slate-900 text-base sm:text-lg leading-tight group-hover:text-[#0284C7] transition-colors">
                        {review.name}
                      </h4>
                      
                      <div className="flex items-center gap-2 flex-wrap text-xs text-slate-600 font-normal">
                        <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/80">
                          <MapPin className="w-3 h-3 text-[#0284C7]" />
                          <span>{review.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars & Date */}
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center text-amber-500 space-x-0.5 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 block font-medium">{review.date}</span>
                  </div>

                </div>

                {/* Review Comment */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-sky-100 absolute -top-2 -left-2 pointer-events-none group-hover:text-sky-200 transition-colors" />
                  
                  <div className="max-h-[180px] overflow-y-auto custom-scrollbar pr-2 pt-1">
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal italic relative z-10">
                      "{review.comment}"
                    </p>
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('reviews.verifiedTrip', 'Verified Guest')}</span>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedReviewModal(review);
                  }}
                  className="text-[#0284C7] hover:text-[#0369A1] transition-colors flex items-center gap-1 font-bold text-[11px] bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60"
                >
                  <span>{t('packages.viewDetails', 'View Details')}</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Full Review Modal Dialog */}
      <AnimatePresence>
        {activeModalReview && (
          <div 
            onClick={() => setSelectedReviewModal(null)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-slate-200 text-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto text-left space-y-6"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedReviewModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0284C7] hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Reviewer Info */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0284C7] to-cyan-600 text-white font-bold text-xl flex items-center justify-center shadow-md border-2 border-white flex-shrink-0">
                  {activeModalReview.initials || activeModalReview.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    {activeModalReview.name}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap text-xs text-slate-600 mt-1">
                    <span className="inline-flex items-center gap-1 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60 text-[#0284C7] font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{activeModalReview.location}</span>
                    </span>
                    <span className="text-slate-400">• {activeModalReview.date}</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(activeModalReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500" />
                  ))}
                </div>
                <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                  ✓ {t('reviews.verifiedTrip', 'Verified Guest')}
                </span>
              </div>

              {/* Full Comment */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 text-slate-800 text-sm sm:text-base leading-relaxed font-normal whitespace-pre-line italic">
                "{activeModalReview.comment}"
              </div>

              {/* Modal Footer */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedReviewModal(null)}
                  className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-6 py-2.5 rounded-full font-bold text-xs shadow-md transition-colors"
                >
                  {t('modals.close', 'Close')}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
