import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    Image,
    FileText,
    Map
} from 'lucide-react';

const AdminHero = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            {/* Hero Section - Mirroring LandingPage.jsx structure */}
            <section className="relative pt-28 md:pt-20 pb-16 md:pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl bg-[#FDB913]/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8 md:-mt-28"
                    >
                        <span className="bg-[#1A6B96]/10 text-[#1A6B96] px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block">
                            Admin Control Center
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-[#1A6B96] leading-[1.1] mb-8">
                            Managing <br /> with Purpose
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Welcome to the Ian Cares Foundation admin panel. Easily manage your gallery, blog, and journey content to keep your mission moving forward.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <button
                                onClick={() => navigate('/gallery')}
                                className="bg-[#1A6B96] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all flex items-center gap-2"
                            >
                                <Image size={20} /> Gallery <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => navigate('/blog')}
                                className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2"
                            >
                                <FileText size={20} /> Blog <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => navigate('/journey')}
                                className="bg-[#FDB913] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#e5a811] transition-all flex items-center gap-2"
                            >
                                <Map size={20} /> Journey <ArrowRight size={20} />
                            </button>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772446233/ian_cares_foundation/logo.png"
                                alt="Admin Mascot"
                                className="w-full aspect-[4/5] object-contain bg-white p-12"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 -z-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AdminHero;
