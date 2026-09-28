import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Headphones, Sliders, Compass, Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    packageInterestedIn: 'Budget Beach Escape',
    adults: '2',
    kids: '0',
    arrivalDate: '',
    departureDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://formsubmit.co/ajax/inquiry@ceylonheaventours.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Ceylon Heaven Tour Inquiry: ${formData.fullName} (${formData.packageInterestedIn})`,
          _replyto: formData.email,
          'Full Name': formData.fullName,
          'Email Address': formData.email,
          'Phone / WhatsApp': formData.phone || 'Not provided',
          'Selected Package': formData.packageInterestedIn,
          'Number of Travelers': formData.adults,
          'Travel Date': formData.departureDate,
          'Special Requests / Message': formData.message
        })
      });
    } catch (err) {
      console.warn('Direct FormSubmit failed, falling back to mailto:', err);
    }

    const subject = encodeURIComponent(`New Ceylon Heaven Tour Inquiry: ${formData.fullName} (${formData.packageInterestedIn})`);
    const body = encodeURIComponent(
      `CEYLON HEAVEN TOURS - INQUIRY DETAILS\n` +
      `-------------------------------------\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone Number: ${formData.phone || 'Not provided'}\n` +
      `Package Interested In: ${formData.packageInterestedIn}\n` +
      `Number of Travelers: ${formData.adults}\n` +
      `Travel Date: ${formData.departureDate}\n\n` +
      `Message / Special Requests:\n${formData.message}`
    );

    const mailtoUrl = `mailto:inquiry@ceylonheaventours.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t('contact.badge', 'Get In Touch')}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          {t('contact.title', 'Ready to Plan Your Island Getaway?')}
        </h2>

        <p className="text-slate-600 text-base sm:text-lg font-light">
          {t('contact.subtitle', 'Contact our dedicated travel experts. We will tailor a customized itinerary just for you.')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
        
        {/* Left Column: Form */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80">
          {submitted ? (
            <div className="py-12 text-center space-y-4 my-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Travel Inquiry Received!
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>! Your inquiry for <span className="font-bold text-[#0284C7]">{formData.packageInterestedIn}</span> has been forwarded to <span className="font-semibold text-slate-900">inquiry@ceylonheaventours.com</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#0284C7] text-white px-8 py-3 rounded-full text-sm font-bold shadow-md hover:bg-[#0369A1] transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {t('contact.formTitle', 'Send Us a Message')}
                </h3>
              </div>

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {t('contact.fullName', 'Full Name')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={t('contact.fullNamePlaceholder', 'John Doe')}
                    className="w-full bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {t('contact.email', 'Email Address')} <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('contact.emailPlaceholder', 'john@example.com')}
                    className="w-full bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Grouped Package Select */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {t('contact.phone', 'Phone / WhatsApp')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t('contact.phonePlaceholder', '+1 (555) 000-0000')}
                    className="w-full bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {t('contact.packageSelect', 'Select Package / Destination')}
                  </label>
                  <select
                    value={formData.packageInterestedIn}
                    onChange={(e) => setFormData({ ...formData, packageInterestedIn: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-xl text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all cursor-pointer"
                  >
                    <optgroup label={t('hero.optGroupBudget', 'Pocket Friendly Packages:')} className="font-bold text-slate-900 bg-slate-100">
                      <option value="Budget Beach Escape">Budget Beach Escape</option>
                      <option value="Cultural Explorer">Cultural Explorer</option>
                      <option value="Wildlife Budget Safari">Wildlife Budget Safari</option>
                      <option value="Hill Country Budget">Hill Country Budget</option>
                      <option value="Colombo City Break">Colombo City Break</option>
                      <option value="South Coast Budget">South Coast Budget</option>
                    </optgroup>

                    <optgroup label={t('hero.optGroupRound', 'Explore Round Tour Packages:')} className="font-bold text-slate-900 bg-slate-100">
                      <option value="Classic Sri Lanka">Classic Sri Lanka</option>
                      <option value="Complete Journey">Complete Journey</option>
                      <option value="Heritage Explorer">Heritage Explorer</option>
                      <option value="Mountain & Beach Combo">Mountain & Beach Combo</option>
                      <option value="Wildlife & Culture">Wildlife & Culture</option>
                      <option value="Premium Luxury Tour">Premium Luxury Tour</option>
                    </optgroup>

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

              {/* Travel Details Section */}
              <div className="pt-2 border-t border-slate-100 space-y-4">
                
                {/* Adults & Kids Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t('contact.guests', 'Number of Travelers')} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.adults}
                      onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5+">5+ Adults (Group)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      {t('hero.dateLabel', 'TRAVEL DATE')} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200/80 px-4 py-3 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all cursor-pointer"
                    />
                  </div>
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {t('contact.message', 'Your Message / Special Requests')} <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('contact.messagePlaceholder', 'Tell us about your travel plans...')}
                    className="w-full bg-slate-50 border border-slate-200/80 p-4 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:bg-white transition-all"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white py-4 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t('contact.sendBtn', 'Send Message')}</span>
              </button>

              {/* Trust Footer Badges */}
              <div className="pt-3 flex items-center justify-between text-[11px] text-slate-500 font-medium border-t border-slate-100/80">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                  <span>100% Flexible Booking</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Headphones className="w-4 h-4 text-[#0284C7]" />
                  <span>24/7 Concierge Support</span>
                </span>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Why Choose Us */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-xl border border-slate-200/80 text-left space-y-5">
            <h3 className="font-serif text-xl font-bold text-slate-900 pb-2 border-b border-slate-100">
              {t('about.badge', 'Why Choose Ceylon Heaven')}
            </h3>

            <div className="space-y-4">
              
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{t('about.feat3Title', '24/7 Personal Concierge')}</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-snug mt-0.5">
                    {t('about.feat3Desc', 'Instant WhatsApp and phone support throughout your trip.')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center flex-shrink-0">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{t('packages.badge', 'Curated Itineraries')}</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-snug mt-0.5">
                    {t('packages.subtitle', 'Choose from our curated selection of packages.')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{t('about.feat2Title', 'Expert Local Guides')}</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-snug mt-0.5">
                    {t('about.feat2Desc', 'Native guides with intimate knowledge.')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{t('about.feat4Title', 'Best Price Guarantee')}</h4>
                  <p className="text-[11px] text-slate-500 font-light leading-snug mt-0.5">
                    {t('about.feat4Desc', 'Exclusive wholesale rates with zero hidden fees.')}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Contact Box & SLTDA License Badge */}
          <div className="bg-[#0284C7] text-white p-6 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/20 pb-3">
              <h4 className="font-serif text-lg font-bold">{t('contact.contactInfo', 'Contact Details')}</h4>
              <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/30">
                SLTDA Licensed
              </span>
            </div>

            <div className="space-y-2.5 text-xs font-light">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-300" />
                <span className="font-mono font-semibold">+94 76 066 0003</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-300" />
                <span>inquiry@ceylonheaventours.com</span>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>Colombo, Sri Lanka</span>
              </p>
            </div>

            <a 
              href="https://wa.me/94760660003?text=Hello!%20I%20am%20interested%20in%20booking%20a%20Sri%20Lanka%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp (+94 76 066 0003)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
