import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedDestinations } from '../utils/localizeData';

export default function DestinationsSection({ onSelectDestination }) {
  const { t, currentLang } = useLanguage();
  const [activeTab, setActiveTab] = useState('All');

  const localizedDestinations = getLocalizedDestinations(DESTINATIONS, currentLang);

  const categoryOptions = [
    { id: 'All', label: t('categories.all', 'All') },
    { id: 'Beach & Tropical', label: t('categories.beach', 'Beach & Tropical') },
    { id: 'Mountain & Adventure', label: t('categories.mountain', 'Mountain & Adventure') },
    { id: 'Luxury & Honeymoon', label: t('categories.luxury', 'Luxury & Honeymoon') },
    { id: 'Cultural Heritage', label: t('categories.heritage', 'Cultural Heritage') }
  ];

  const filteredDestinations = activeTab === 'All'
    ? localizedDestinations
    : localizedDestinations.filter(d => {
        if (activeTab === 'Mountain & Adventure') return d.category === 'Mountain & Adventure' || d.category === 'Wild Safaris';
        return d.category === activeTab;
      });

  return (
    <section id="destinations" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4C81]/10 text-[#0F4C81] text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>{t('destinations.badge', 'Iconic Places')}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          {t('destinations.title', 'Popular Wonders of Sri Lanka')}
        </h2>

        <p className="text-gray-600 text-base sm:text-lg font-light">
          {t('destinations.subtitle', 'Immerse yourself in lush tea hills, ancient rock fortresses, wildlife national parks, and golden tropical beaches.')}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 w-full overflow-x-auto scrollbar-none px-2 py-1">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 flex-nowrap shrink-0">
          {categoryOptions.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? 'bg-[#0F4C81] text-white shadow-md font-bold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Destination Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((dest, idx) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onClick={() => onSelectDestination(dest)}
            className="group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative h-96 border border-gray-100"
          >
            {/* Background Image */}
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-3.5 py-1 rounded-full shadow">
                {dest.toursCount}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 text-left text-white space-y-2">
              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{dest.country}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold group-hover:text-amber-200 transition-colors">
                {dest.name}
              </h3>

              <p className="text-gray-200 text-xs font-light line-clamp-2">
                {dest.tagline}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs font-semibold text-white/90">
                <span className="underline group-hover:text-amber-300 transition-colors">
                  {t('destinations.exploreDest', 'Explore Destination')}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#0F4C81] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
