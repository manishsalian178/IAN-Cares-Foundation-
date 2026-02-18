import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactSection from './ContactSection';
import SocialSection from './SocialSection';
import ConsultancyModal from './ConsultancyModal';

const ContactPage = () => {
    const [isConsultancyModalOpen, setIsConsultancyModalOpen] = useState(false);

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Contact Hero - Contained and Premium */}
            <section className="relative pt-24 md:pt-32 pb-12 px-4 md:px-6">
                <div className="max-w-[1600px] mx-auto relative h-[60vh] md:h-[75vh] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] md:rounded-tr-[12rem] shadow-2xl group">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            src="/images/contact.png"
                            alt="Contact Support Hero"
                            className="w-full h-full object-cover"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <span className="bg-white/20 backdrop-blur-md text-white px-5 pt-1.2 pb-2 rounded-full text-sm font-bold tracking-wider uppercase mb-5 inline-block border border-white/30 shadow-lg mt-12 md:mt-0 shadow-white/5">
                                Always Here For You
                            </span>
                            <h1 className="text-4xl md:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-lg">
                                Contact <br /> Us
                            </h1>
                            <p className="text-lg md:text-2xl text-blue-50 leading-relaxed max-w-2xl mb-10 drop-shadow-md">
                                We are here to guide you toward healing and hope. Reach out today for a second chance at life.
                            </p>
                            <button
                                onClick={() => setIsConsultancyModalOpen(true)}
                                className="bg-[#FDB913] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-[#e5a811] transition-all transform hover:scale-105 w-fit"
                            >
                                Book a Consult
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ContactSection />
            <SocialSection />
            <Footer />

            <ConsultancyModal
                isOpen={isConsultancyModalOpen}
                onClose={() => setIsConsultancyModalOpen(false)}
            />
        </div>
    );
};

export default ContactPage;
