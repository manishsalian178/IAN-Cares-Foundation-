import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesHero = ({ onExplore, onBook }) => {
    return (
        <section className="relative pt-24 md:pt-32 pb-12 px-4 md:px-6">
            <div className="max-w-[1600px] mx-auto relative h-[70vh] md:h-[85vh] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] md:rounded-tr-[12rem] shadow-2xl group">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src="/images/service s.avif"
                        alt="Healing Hero"
                        className="w-full h-full object-cover brightness-110 contrast-120 saturate-120"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-lg">
                            What We <br /> Heal
                        </h1>
                        <p className="text-lg md:text-2xl text-blue-50 leading-relaxed max-w-2xl mb-12 drop-shadow-md">
                            Ian Cares Foundation addresses diverse needs across the healing journey — from mental health support to holistic recovery.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button
                                onClick={onExplore}
                                className="bg-white text-[#1A6B96] px-8 py-4 md:py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all flex items-center gap-3 group"
                            >
                                Explore the Service
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button
                                onClick={onBook}
                                className="bg-[#FDB913] text-white px-8 py-4 md:py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-[#e5a811] transition-all transform hover:scale-105"
                            >
                                Book a Consultancy
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
