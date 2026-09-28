import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PackagesSection from './components/PackagesSection';
import DestinationsSection from './components/DestinationsSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Package Details Page View
import PackageDetailsView from './components/PackageDetailsView';

// Modals
import PackageBookingModal from './components/Modals/PackageBookingModal';
import PackageDetailsModal from './components/Modals/PackageDetailsModal';
import DestinationModal from './components/Modals/DestinationModal';
import LightboxModal from './components/Modals/LightboxModal';
import SearchResultsModal from './components/Modals/SearchResultsModal';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'package-details'
  const [selectedPackageDetails, setSelectedPackageDetails] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageForBooking, setSelectedPackageForBooking] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedLightboxImage, setSelectedLightboxImage] = useState(null);

  // Search Results Modal State
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
    setSearchModalOpen(true);
  };

  const handleOpenBooking = (pkgOrDestination) => {
    setSelectedPackageForBooking(pkgOrDestination || null);
    setBookingModalOpen(true);
  };

  const handleViewPackageDetails = (pkg) => {
    setSelectedPackageDetails(pkg);
    setCurrentView('package-details');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setSelectedPackageDetails(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans relative overflow-x-hidden selection:bg-[#0284C7] selection:text-white">
      
      {currentView === 'package-details' ? (
        /* Dedicated Full-Page Package Details View */
        <>
          <PackageDetailsView 
            packageData={selectedPackageDetails}
            onBack={handleBackToLanding}
            onSelectPackage={(pkg) => handleViewPackageDetails(pkg)}
            onBookPackage={(pkg) => handleOpenBooking(pkg)}
          />
          <Footer />
        </>
      ) : (
        /* Main Landing Page with Home, About, Packages, Destinations, Reviews, Gallery, Contact */
        <>
          {/* Navbar */}
          <Navbar 
            onOpenBooking={() => handleOpenBooking()} 
          />

          <main className="space-y-4 md:space-y-8 pb-12">
            {/* Section 1: Home / Hero */}
            <HeroSection 
              onSearch={handleSearch}
              onOpenBooking={handleOpenBooking} 
            />

            {/* Section 2: About */}
            <AboutSection 
              onOpenBooking={() => handleOpenBooking()} 
            />

            {/* Section 3: Packages */}
            <PackagesSection 
              onViewDetails={handleViewPackageDetails}
            />

            {/* Section 4: Destinations */}
            <DestinationsSection 
              onSelectDestination={(dest) => setSelectedDestination(dest)} 
            />

            {/* Section 5: Reviews */}
            <ReviewsSection />

            {/* Section 6: Gallery */}
            <GallerySection 
              onOpenLightbox={(img) => setSelectedLightboxImage(img)} 
            />

            {/* Section 7: Contact */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}

      {/* Search Results Modal */}
      <SearchResultsModal 
        isOpen={searchModalOpen}
        searchParams={searchParams}
        onClose={() => setSearchModalOpen(false)}
        onViewDetails={(pkg) => handleViewPackageDetails(pkg)}
        onBookPackage={(pkg) => handleOpenBooking(pkg)}
      />

      {/* Interactive Modals */}
      <PackageBookingModal 
        isOpen={bookingModalOpen}
        selectedPackage={selectedPackageForBooking}
        onClose={() => setBookingModalOpen(false)}
      />

      <DestinationModal 
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBookDestination={() => handleOpenBooking()}
      />

      <LightboxModal 
        imageItem={selectedLightboxImage}
        onClose={() => setSelectedLightboxImage(null)}
      />

      {/* Floating Sticky WhatsApp Widget */}
      <WhatsAppFloating />

    </div>
  );
}
