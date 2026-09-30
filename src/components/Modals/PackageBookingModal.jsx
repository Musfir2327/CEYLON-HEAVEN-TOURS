import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PACKAGES } from '../../data/travelData';
import { useLanguage } from '../../context/LanguageContext';
import { getLocalizedPackage, getLocalizedPackages } from '../../utils/localizeData';

export default function PackageBookingModal({ isOpen, onClose, selectedPackage }) {
  const { t, currentLang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageId: PACKAGES[0].id,
    date: '2026-10-15',
    guests: '2 Travelers',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      if (typeof selectedPackage === 'object' && selectedPackage.id) {
        setFormData(prev => ({ ...prev, packageId: selectedPackage.id }));
      }
    }
  }, [selectedPackage]);

  if (!isOpen) return null;

  const rawCurrentPackage = PACKAGES.find(p => p.id === formData.packageId) || PACKAGES[0];
  const currentPackage = getLocalizedPackage(rawCurrentPackage, currentLang);
  const localizedPackages = getLocalizedPackages(PACKAGES, currentLang);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let success = false;

    // 1. Try server-side PHP mailer (Primary on cPanel host)
    try {
      const phpRes = await fetch('/send-email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: `Package Booking Request: ${currentPackage.title} - ${formData.name}`,
          _replyto: formData.email,
          'Selected Package': currentPackage.title,
          'Package Price': `$${currentPackage.price}`,
          'Full Name': formData.name,
          'Email Address': formData.email,
          'Phone / WhatsApp': formData.phone,
          'Departure Date': formData.date,
          'Number of Guests': formData.guests,
          'Special Notes': formData.notes || 'None'
        })
      });
      const phpData = await phpRes.json();
      if (phpRes.ok && (phpData.success === true || phpData.success === 'true')) {
        success = true;
      }
    } catch (err) {
      console.warn('PHP mailer fetch failed, trying FormSubmit:', err);
    }

    // 2. Try FormSubmit API if PHP mailer didn't succeed
    if (!success) {
      try {
        const response = await fetch('https://formsubmit.co/ajax/inquiries@ceylonheaventours.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `Package Booking Request: ${currentPackage.title} - ${formData.name}`,
            _replyto: formData.email,
            _captcha: 'false',
            _template: 'table',
            'Selected Package': currentPackage.title,
            'Package Price': `$${currentPackage.price}`,
            'Full Name': formData.name,
            'Email Address': formData.email,
            'Phone / WhatsApp': formData.phone,
            'Departure Date': formData.date,
            'Number of Guests': formData.guests,
            'Special Notes': formData.notes || 'None'
          })
        });

        const data = await response.json();
        if (response.ok || data.success === 'true' || data.success === true) {
          success = true;
        }
      } catch (err) {
        console.warn('FormSubmit booking error:', err);
      }
    }

    // 3. Fallback to mailto link if both server methods failed
    if (!success) {
      const subject = encodeURIComponent(`Package Booking Request: ${currentPackage.title} - ${formData.name}`);
      const body = encodeURIComponent(
        `CEYLON HEAVEN TOURS - BOOKING REQUEST\n` +
        `------------------------------------\n` +
        `Selected Package: ${currentPackage.title} (${currentPackage.price} / ${currentPackage.duration})\n` +
        `Full Name: ${formData.name}\n` +
        `Email Address: ${formData.email}\n` +
        `Phone / WhatsApp: ${formData.phone}\n` +
        `Departure Date: ${formData.date}\n` +
        `Number of Guests: ${formData.guests}\n` +
        `Special Notes: ${formData.notes || 'None'}`
      );

      const mailtoUrl = `mailto:inquiries@ceylonheaventours.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100 my-8"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-[#0284C7] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900">
                Reservation Request Confirmed!
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-bold text-gray-900">{formData.name}</span>! Your request for <span className="font-semibold text-[#0284C7]">{currentPackage.title}</span> has been logged.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#0284C7] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-[#0369A1]"
                >
                  {t('modals.close', 'Close')}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-left mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                  Ceylon Heaven Tours
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-gray-900 font-bold mt-1">
                  {t('modals.bookingTitle', 'Book Tour Package')}
                </h3>
              </div>

              {/* Selected Package Highlight Bar */}
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 mb-6 flex items-center gap-3 text-left">
                <img 
                  src={currentPackage.image} 
                  alt={currentPackage.title} 
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-900">{currentPackage.title}</h4>
                  <p className="text-xs text-[#0284C7] font-semibold">${currentPackage.price} / {t('packages.perPerson', 'person')} • {currentPackage.duration}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">{t('contact.packageSelect', 'Select Package / Destination')}</label>
                  <select
                    value={formData.packageId}
                    onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  >
                    {localizedPackages.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.title} (${p.price} / {p.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">{t('contact.fullName', 'Full Name')}</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('contact.fullNamePlaceholder', 'John Doe')}
                    className="w-full bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">{t('contact.email', 'Email Address')}</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.emailPlaceholder', 'john@example.com')}
                      className="w-full bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">{t('contact.phone', 'Phone / WhatsApp')}</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('contact.phonePlaceholder', '+1 (555) 000-0000')}
                      className="w-full bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">{t('hero.dateLabel', 'TRAVEL DATE')}</label>
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">{t('contact.guests', 'Number of Travelers')}</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 px-3.5 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    >
                      <option>{t('hero.traveler1', '1 Traveler')}</option>
                      <option>{t('hero.traveler2', '2 Travelers')}</option>
                      <option>{t('hero.traveler3', '3 - 4 Family')}</option>
                      <option>{t('hero.traveler4', '5+ Group')}</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0284C7] hover:bg-[#0369A1] disabled:bg-slate-400 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : t('modals.confirmBooking', 'Confirm & Reserve')}</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
