import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/travelData';
import { useLanguage } from '../context/LanguageContext';

export default function GallerySection({ onOpenLightbox }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('All');

  const categoryOptions = [
    { id: 'All', label: t('categories.all', 'All') },
    { id: 'Beach & Tropical', label: t('categories.beach', 'Beach & Tropical') },
    { id: 'Mountain & Adventure', label: t('categories.mountain', 'Mountain & Adventure') },
    { id: 'Luxury & Honeymoon', label: t('categories.luxury', 'Luxury & Honeymoon') },
    { id: 'Cultural Heritage', label: t('categories.heritage', 'Cultural Heritage') }
  ];

  const filteredImages = activeTab === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  return (
    <section id="gallery" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4C81]/10 text-[#0F4C81] text-xs font-bold uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5" />
          <span>{t('gallery.badge', 'Visual Journey')}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          {t('gallery.title', 'Capturing Moments of Wonder')}
        </h2>

        <p className="text-gray-600 text-base sm:text-lg font-light">
          {t('gallery.subtitle', 'Explore glimpses of breathtaking landscapes, heritage sites, and luxury experiences.')}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 w-full overflow-x-auto scrollbar-none px-2 py-1">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 flex-nowrap shrink-0">
          {categoryOptions.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
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

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            onClick={() => onOpenLightbox(item)}
            className="group cursor-pointer rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative h-72 border border-gray-100 bg-gray-100"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 text-left">
              <div className="text-white space-y-1 w-full flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                  <span className="text-xs text-[#0284C7] font-medium">{item.category}</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
