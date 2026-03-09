import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ServicesHero from './ServicesHero';
import HowWeServe from './HowWeServe';
import ServicesSection from './ServicesSection';
import PostRecovery from './PostRecovery';
import ServiceDetailModal from './ServiceDetailModal';

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    const handleExplore = () => {
        document.getElementById('detailed-services')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleDetailedExplore = () => {
        document.getElementById('detailed-services')?.scrollIntoView({ behavior: 'smooth' });
    };

    const openDetailModal = (service) => {
        setSelectedService(service);
        setIsDetailModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[#E8F6FD] font-sans">
            <Navbar />

            <ServicesHero
                onExplore={handleExplore}
            />

            <HowWeServe
                onExplore={handleDetailedExplore}
            />

            <PostRecovery />

            <ServicesSection
                onReadMore={openDetailModal}
            />

            <Footer />

            <ServiceDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                service={selectedService}
            />
        </div>
    );
};

export default ServicesPage;
