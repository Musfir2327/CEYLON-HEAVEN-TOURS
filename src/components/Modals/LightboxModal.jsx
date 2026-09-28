import React from 'react';
import { X, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightboxModal({ imageItem, onClose }) {
  if (!imageItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full text-center"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 max-h-[80vh] bg-black">
            <img 
              src={imageItem.image} 
              alt={imageItem.title} 
              className="w-full h-full object-contain max-h-[75vh] mx-auto"
            />
            <div className="p-4 bg-gray-950 text-white flex items-center justify-between">
              <div className="text-left">
                <h4 className="font-serif text-xl font-bold">{imageItem.title}</h4>
                <p className="text-xs text-amber-300">{imageItem.category}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <Camera className="w-4 h-4" />
                <span>Wanderlust Exclusive Photography</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
