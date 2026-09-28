import React from 'react';
import { X, Check, Calendar, Clock, DollarSign, Send, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PackageDetailsModal({ packageData, onClose, onBookPackage }) {
  if (!packageData) return null;

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
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/90 text-gray-800 hover:bg-[#0099D8] hover:text-white transition-colors backdrop-blur-md shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Photo Header */}
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden -mt-2 -mx-2 mb-6">
            <img 
              src={packageData.image} 
              alt={packageData.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="bg-[#0099D8] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {packageData.duration}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-300">
                  ${packageData.price} <span className="text-xs text-white/80 font-normal">/ person</span>
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">{packageData.title}</h3>
            </div>
          </div>

          {/* Package Overview */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Package Overview</h4>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {packageData.description}
              </p>
            </div>

            {/* Day-by-Day Itinerary */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#0099D8]" />
                <h4 className="font-serif text-xl font-bold text-gray-900">Day-by-Day Itinerary</h4>
              </div>

              <div className="space-y-4 border-l-2 border-[#0099D8]/30 pl-4 ml-2">
                {packageData.itinerary && packageData.itinerary.map((item, idx) => (
                  <div key={idx} className="relative space-y-1">
                    <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#0099D8] ring-4 ring-white" />
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-[#0099D8]/10 text-[#0099D8] px-2.5 py-0.5 rounded-md">
                        {item.day}
                      </span>
                      <h5 className="font-bold text-gray-900 text-sm">{item.title}</h5>
                    </div>
                    <p className="text-xs text-gray-600 font-light leading-relaxed pl-1">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div>
              <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Included In This Package</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {packageData.inclusions && packageData.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-800 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold block">Total Starting Rate</span>
                <span className="text-2xl font-black text-gray-900">${packageData.price}</span>
                <span className="text-xs text-gray-500"> / guest</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBookPackage(packageData);
                }}
                className="bg-[#0099D8] hover:bg-[#0082B8] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Book Package Now</span>
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
