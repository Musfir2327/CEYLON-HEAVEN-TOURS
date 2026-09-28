import React from 'react';
import { ShieldCheck, Award, Headset, Tag, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import sigiriyaImg from '../assets/images/sigiriya 2.webp';
import kandyImg from '../assets/images/ramoboda.webp';
import ellaImg from '../assets/images/ella.webp';
import mirissaImg from '../assets/images/mirissa.webp';

export default function AboutSection({ onOpenBooking }) {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('about.feat1Title', 'Handpicked 5-Star Stays'),
      desc: t('about.feat1Desc', 'Overwater bungalows, cliffside suites, and private mountain chalets vetted for perfection.')
    },
    {
      icon: ShieldCheck,
      title: t('about.feat2Title', 'Expert Local Guides'),
      desc: t('about.feat2Desc', 'Native guides with intimate knowledge who unlock authentic culture and secret spots.')
    },
    {
      icon: Headset,
      title: t('about.feat3Title', '24/7 Personal Concierge'),
      desc: t('about.feat3Desc', 'Instant WhatsApp and phone support throughout your trip for complete peace of mind.')
    },
    {
      icon: Tag,
      title: t('about.feat4Title', 'Best Price Guarantee'),
      desc: t('about.feat4Desc', 'Exclusive wholesale rates and complimentary room upgrades with zero hidden fees.')
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Visual 4-Photo Collage */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-6 grid grid-cols-12 gap-2.5 sm:gap-4 items-stretch relative pb-6 sm:pb-8"
        >
          {/* Main Left Image (Spans 7 columns, full height) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white h-[300px] xs:h-[350px] sm:h-[420px] md:h-[460px]"
          >
            <img 
              src={sigiriyaImg} 
              alt="Sigiriya Rock Fortress Sri Lanka" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side Stack (Spans 5 columns, 3 images stacked cleanly filling full height without white space) */}
          <div className="col-span-5 flex flex-col gap-2.5 sm:gap-4 h-[300px] xs:h-[350px] sm:h-[420px] md:h-[460px]">
            {/* Image 2: Top Right */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex-1 rounded-xl sm:rounded-3xl overflow-hidden shadow-md border-2 sm:border-4 border-white"
            >
              <img 
                src={kandyImg} 
                alt="Kandy Temple & Lake" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 3: Middle Right */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex-1 rounded-xl sm:rounded-3xl overflow-hidden shadow-md border-2 sm:border-4 border-white"
            >
              <img 
                src={ellaImg} 
                alt="Ella mountain landscape" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 4: Bottom Right */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex-1 rounded-xl sm:rounded-3xl overflow-hidden shadow-md border-2 sm:border-4 border-white"
            >
              <img 
                src={mirissaImg} 
                alt="Mirissa beach coast" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Floating Trust Badge Card */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="absolute -bottom-2 left-2 sm:left-6 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl border border-gray-100 flex items-center gap-2.5 sm:gap-4 max-w-xs z-30"
          >
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center flex-shrink-0 font-bold text-base sm:text-xl">
              {t('about.yearsCount', '12+')}
            </div>
            <div className="text-left">
              <p className="text-[10px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider">
                {t('about.yearsText', 'Years of Excellence')}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                {t('about.happyText', 'Over 25,000 happy travelers worldwide')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Content & Value Props */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-5 sm:space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4C81]/10 text-[#0F4C81] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('about.badge', 'Why Choose Ceylon Heaven')}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            {t('about.title', 'Crafting Unforgettable Journeys Across The Globe')}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            {t('about.subtitle', 'We believe travel is more than just visiting a destination — it is about immersing yourself in life-changing moments, pristine landscapes, and authentic hospitality.')}
          </p>

          {/* 4 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-2 sm:pt-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-1.5 sm:space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="pt-2 sm:pt-4">
            <button
              onClick={onOpenBooking}
              className="bg-[#0F4C81] hover:bg-[#0B3A64] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              {t('about.startPlanningBtn', 'Start Planning Your Trip')}
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
