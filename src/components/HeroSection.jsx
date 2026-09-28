import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/images/sigiriya 3.webp';

export default function HeroSection({ onSearch }) {
  const { t } = useLanguage();

  const [selectedDestination, setSelectedDestination] = useState('Budget Beach Escape');
  const [travelDate, setTravelDate] = useState('2026-10-15');
  const [travelers, setTravelers] = useState('2 Travelers');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({
      destination: selectedDestination,
      date: travelDate,
      guests: travelers
    });
  };

  return (
    <section id="hero" className="relative min-h-[720px] md:min-h-[800px] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Travel Image with Zoom & Dark Gradient */}
      <div 
         className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: `url('${heroBg}')`,
            backgroundPosition: 'center 37%',
          }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/50 to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        
        {/* Luxury Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-medium border border-white/20 mb-6 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{t('hero.badge', 'Curated Luxury Expeditions & Private Retreats')}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight tracking-tight drop-shadow-lg mb-4 sm:mb-6"
        >
          {t('hero.titleLine1', "Explore The World's Most")}{' '}
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-200 via-cyan-200 to-sky-300 bg-clip-text text-transparent">
            {t('hero.titleLine2', 'Extraordinary Destinations')}
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8 sm:mb-10 drop-shadow"
        >
          {t('hero.subtitle', 'Discover handpicked luxury tour packages, private villa sanctuaries, and unforgettable bucket-list experiences tailored just for you.')}
        </motion.p>

        {/* Interactive Tour Search Pill Bar */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSearch}
          className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/40 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-2.5 sm:gap-3 text-left"
        >
          {/* Destination Selector with Grouped Tour Packages */}
          <div className="sm:col-span-4 bg-slate-50/90 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-white transition-all border border-slate-200/60 flex items-center gap-2.5">
            <MapPin className="w-5 h-5 text-[#0284C7] flex-shrink-0" />
            <div className="w-full min-w-0">
              <label className="block text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {t('hero.destLabel', 'DESTINATION / PACKAGE')}
              </label>
              <select 
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer truncate"
              >
                {/* Pocket Friendly Packages */}
                <optgroup label={t('hero.optGroupBudget', 'Pocket Friendly Packages:')} className="font-bold text-slate-900 bg-slate-100">
                  <option value="Budget Beach Escape">Budget Beach Escape</option>
                  <option value="Cultural Explorer">Cultural Explorer</option>
                  <option value="Wildlife Budget Safari">Wildlife Budget Safari</option>
                  <option value="Hill Country Budget">Hill Country Budget</option>
                  <option value="Colombo City Break">Colombo City Break</option>
                  <option value="South Coast Budget">South Coast Budget</option>
                </optgroup>

                {/* Explore Round Tour Packages */}
                <optgroup label={t('hero.optGroupRound', 'Explore Round Tour Packages:')} className="font-bold text-slate-900 bg-slate-100">
                  <option value="Classic Sri Lanka">Classic Sri Lanka</option>
                  <option value="Complete Journey">Complete Journey</option>
                  <option value="Heritage Explorer">Heritage Explorer</option>
                  <option value="Mountain & Beach Combo">Mountain & Beach Combo</option>
                  <option value="Wildlife & Culture">Wildlife & Culture</option>
                  <option value="Premium Luxury Tour">Premium Luxury Tour</option>
                </optgroup>

                {/* Day Tour Packages */}
                <optgroup label={t('hero.optGroupDay', 'Day Tour Packages:')} className="font-bold text-slate-900 bg-slate-100">
                  <option value="Sigiriya Day Tour">Sigiriya Day Tour</option>
                  <option value="Yala Safari Day Trip">Yala Safari Day Trip</option>
                  <option value="Ella Day Excursion">Ella Day Excursion</option>
                  <option value="Galle Fort & Beaches">Galle Fort & Beaches</option>
                  <option value="Kandy Cultural Day">Kandy Cultural Day</option>
                  <option value="Whale Watching Day Tour">Whale Watching Day Tour</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="sm:col-span-4 bg-slate-50/90 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-white transition-all border border-slate-200/60 flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-[#0284C7] flex-shrink-0" />
            <div className="w-full min-w-0">
              <label className="block text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {t('hero.dateLabel', 'TRAVEL DATE')}
              </label>
              <input 
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer"
              />
            </div>
          </div>

          {/* Travelers Count */}
          <div className="sm:col-span-2 bg-slate-50/90 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-white transition-all border border-slate-200/60 flex items-center gap-2.5">
            <Users className="w-5 h-5 text-[#0284C7] flex-shrink-0" />
            <div className="w-full min-w-0">
              <label className="block text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                {t('hero.guestsLabel', 'GUESTS')}
              </label>
              <select 
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                <option>{t('hero.traveler1', '1 Traveler')}</option>
                <option>{t('hero.traveler2', '2 Travelers')}</option>
                <option>{t('hero.traveler3', '3 - 4 Family')}</option>
                <option>{t('hero.traveler4', '5+ Group')}</option>
              </select>
            </div>
          </div>

          {/* Search CTA Button */}
          <div className="sm:col-span-2 flex items-center">
            <button
              type="submit"
              className="w-full h-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-3.5 sm:py-0 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>{t('hero.searchBtn', 'Search')}</span>
            </button>
          </div>
        </motion.form>

        {/* Trust Badges */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/90 text-xs sm:text-sm font-medium">
          <span className="flex items-center gap-1.5">{t('hero.trust1', '✓ Handpicked 3,4 & 5-Star Accommodations')}</span>
          <span className="flex items-center gap-1.5">{t('hero.trust2', '✓ 24/7 Dedicated Concierge')}</span>
          <span className="flex items-center gap-1.5">{t('hero.trust3', '✓ 100% Flexible Booking')}</span>
        </div>

      </div>
    </section>
  );
}
