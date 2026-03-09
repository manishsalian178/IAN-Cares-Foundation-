import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Heart,
    Brain,
    Users,
    Phone,
    MapPin,
    Mail,
    Sun,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Globe,
    Clock,
    ShieldCheck,
    Star
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const API_BASE_URL = 'https://ian-cares-backend.vercel.app';

const LandingPage = () => {
    const [livesTouched, setLivesTouched] = useState('2,10,000');
    const [clientRating, setClientRating] = useState('4.8');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/settings`);
                if (response.data) {
                    if (response.data.livesTouched) setLivesTouched(response.data.livesTouched);
                    if (response.data.clientRating) setClientRating(response.data.clientRating);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };
        fetchStats();
    }, []);
    const services = [
        {
            icon: <Brain className="w-10 h-10" />,
            title: 'De-addiction Strategy',
            description: 'Focusing on long-term sobriety and relapse prevention through a guided, supportive environment.',
            bgImage: 'https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772446184/ian_cares_foundation/de_addiction.jpg'
        },
        {
            icon: <Heart className="w-10 h-10" />,
            title: 'Mental Health Support',
            description: 'Counseling for depression and anxiety focused on restoring balance and building emotional resilience.',
            bgImage: 'https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772521278/Mentalhealthsupport_gbqdt4.avif'
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: 'Youth Empowerment',
            description: 'Workshops focused on unlocking full potential and discovering internal purpose for young adults.',
            bgImage: 'https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772446244/ian_cares_foundation/youth.jpg'
        }
    ];

    const missionReasons = [
        {
            title: 'Peer Support',
            desc: 'Connecting with those who understand the struggle deeply.',
            bgImage: 'https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772449194/Peersupport_pfd7uq.avif'
        },
        {
            title: 'Holistic Focus',
            desc: 'Restoring mind, body, and spirit in unison.',
            bgImage: 'https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772521167/Holisticfocus_qg3xuh.avif'
        },
        {
            title: 'Family Values',
            desc: 'Rebuilding the broken bridges to your loved ones.',
            bgImage: 'https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772521176/family_relationshiptheraphy_g8akmx.avif'
        }
    ];

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero Section */}
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
                            Dedicated to Recovery
                        </span>
                        <h1 className="text-4xl md:text-7xl font-bold text-[#1A6B96] leading-[1.1] mb-8">
                            Healing Minds <br /> with Heart
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Since 2017, we have walked beside individuals struggling with alcohol, drugs, and depression to give them a truly deserved 'second chance'.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="#mission" className="bg-[#1A6B96] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-[#155a82] transition-all flex items-center gap-2">
                                Our Mission <ArrowRight size={20} />
                            </a>
                            <a href="tel:+918750075006" className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                                <Phone size={20} /> Call Now
                            </a>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 w-full">
                            {[
                                { icon: <Globe className="w-5 h-5" />, label: livesTouched.endsWith('+') ? livesTouched : `${livesTouched}+`, subtext: "Lives Touched" },
                                { icon: <ShieldCheck className="w-5 h-5" />, label: "100%", subtext: "Private & Secure" },
                                { icon: <Star className="w-5 h-5 fill-[#FDB913] text-[#FDB913]" />, label: clientRating, subtext: "Client Rating" },
                            ].map((stat, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-[#1A6B96]">
                                        {stat.icon}
                                        <span className="text-2xl font-bold">{stat.label}</span>
                                    </div>
                                    <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.subtext}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mt-10 md:mt-5"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772446142/ian_cares_foundation/Ian_cares_house.jpg"
                                alt="Healing Journey"
                                className="w-full aspect-[4/5] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 -z-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Method */}
            <section id="mission" className="py-24 bg-white/50 px-6 backdrop-blur-sm">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-6">Why Choose Ian Cares Foundation?</h2>
                        <div className="w-24 h-1.5 bg-[#FDB913] mx-auto rounded-full"></div>
                        <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto">
                            Recovery is more than a clinical process — it's a family-centered community approach where every step is a guided journey toward light.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {missionReasons.map((item) => (
                            <motion.div
                                key={item.title}
                                whileHover={{ y: -10 }}
                                className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0 opacity-40 md:opacity-[0.14] pointer-events-none">
                                    <img src={item.bgImage} alt="" className="w-full h-full object-cover brightness-110" />
                                    <div className="absolute inset-0 bg-[#FDB913]/10 mix-blend-overlay"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-[#FDB913]/20 rounded-xl flex items-center justify-center text-[#FDB913] mb-6 group-hover:bg-[#FDB913] group-hover:text-white transition-colors duration-300">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1A6B96] mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spirituality - Sarva Dharma Sangama */}
            <section id="spirituality" className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#1A6B96] to-[#0f4664] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    {/* Symbolism placeholder icons */}
                    <Sun className="absolute top-10 left-10 w-32 h-32" />
                    <Users className="absolute bottom-10 right-10 w-48 h-48" />
                </div>

                <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[#FDB913] font-bold tracking-widest uppercase text-sm mb-4 inline-block">Spiritual Foundation</span>
                        <h2 className="text-3xl md:text-6xl font-bold mb-8">Sarva Dharma Sangama</h2>
                        <p className="text-xl text-blue-100 leading-relaxed mb-10">
                            Our spiritual foundation welcomes all faiths, creating a safe harbour for inner harmony. We believe that spiritual strength is the cornerstone of holistic healing and restoring the broken self.
                        </p>
                        <ul className="space-y-6">
                            <li className="flex items-center gap-4 text-lg">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles size={18} />
                                </div>
                                Inclusivity beyond religion
                            </li>
                            <li className="flex items-center gap-4 text-lg">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles size={18} />
                                </div>
                                Meditation & Daily Mindfulness
                            </li>
                            <li className="flex items-center gap-4 text-lg">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center">
                                    <Sparkles size={18} />
                                </div>
                                Universal Love & Service
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="w-56 h-56 md:w-[400px] md:h-[400px] rounded-full border-[10px] md:border-[20px] border-white/10 flex items-center justify-center p-4 md:p-8 animate-pulse mx-auto shrink-0 transition-all duration-700">
                            <div className="w-full h-full rounded-full bg-[#FDB913] flex items-center justify-center text-[#1A6B96] shadow-2xl shadow-[#FDB913]/30">
                                <Sun className="w-16 h-16 md:w-32 md:h-32" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey of Change - Ramesh's Story */}
            <section id="journey" className="py-24 px-6 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-4">Journey of Change</h2>
                        <p className="text-slate-500 font-medium">Real stories of restoration and dignity</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-0 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-3xl bg-white border border-slate-100">
                        <div className="p-8 md:p-12 bg-slate-100 flex flex-col justify-center">
                            <div className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">The Darkness (Before)</div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-6">Starting at Rock Bottom</h3>
                            <p className="text-slate-600 italic leading-relaxed text-lg">
                                "Ramesh lived a life lost to chronic addiction. He was completely isolated from his family, facing profound emotional distress and wandering through the shadows without a sense of self."
                            </p>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border-2 border-slate-300"></div>
                                <div>
                                    <div className="font-bold">Ramesh</div>
                                    <div className="text-xs text-slate-400 lowercase">Year 0</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-[#1A6B96] text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Heart size={120} />
                            </div>
                            <div className="text-[#FDB913] font-bold mb-4 uppercase tracking-widest text-xs font-bold">The Light (After)</div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">Living with Purpose</h3>
                            <p className="text-blue-50 leading-relaxed text-lg">
                                "Today, Ramesh is a beacon of hope. As a mentor for young adults, he lives a life defined by sobriety, dignity, and purpose. He is no longer defined by his past, but by the hearts he heals."
                            </p>
                            <div className="mt-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#FDB913] flex items-center justify-center text-[#1A6B96]">
                                    <CheckCircle2 />
                                </div>
                                <div>
                                    <div className="font-bold">Mentor Ramesh</div>
                                    <div className="text-xs text-[#FDB913] font-bold">Today</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/journey"
                            className="inline-flex items-center gap-2 text-[#1A6B96] font-bold text-lg hover:underline hover:gap-3 transition-all"
                        >
                            Read more <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Expansion */}
            <section id="services" className="py-24 px-6 bg-[#E8F6FD]">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-6">Supporting Your Path</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Expert care that focuses on long-term results and internal purpose, rather than just clinical numbers.
                            </p>
                        </div>
                        <Link to="/services" className="text-[#1A6B96] font-bold flex items-center gap-2 hover:underline">
                            View All Services <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative bg-white rounded-3xl p-10 shadow-xl shadow-blue-900/5 group hover:bg-[#1A6B96] transition-all duration-500 overflow-hidden"
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <img
                                        src={service.bgImage}
                                        alt=""
                                        className="w-full h-full object-cover transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#1A6B96]/80 mix-blend-multiply" />
                                </div>

                                {/* Default Background Image (Static) */}
                                <div className="absolute inset-0 z-0 opacity-40 md:opacity-[0.15] group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                    <img
                                        src={service.bgImage}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1A6B96]/20 to-transparent" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-[#1A6B96]/5 text-[#1A6B96] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FDB913] group-hover:text-white transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1A6B96] mb-4 group-hover:text-white transition-colors duration-500">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed group-hover:text-blue-50 transition-colors duration-500 font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
