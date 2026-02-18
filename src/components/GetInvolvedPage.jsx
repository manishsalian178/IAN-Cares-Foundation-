import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Hand, Users, Megaphone, Briefcase, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const GetInvolvedPage = () => {
    const contributions = [
        {
            icon: <Hand className="w-10 h-10" />,
            title: 'Volunteer',
            description: 'Volunteer at our centre or events to make a direct impact.'
        },
        {
            icon: <Heart className="w-10 h-10" />,
            title: 'Sponsor',
            description: 'Sponsor a recovery program to help those in need.'
        },
        {
            icon: <Megaphone className="w-10 h-10" />,
            title: 'Collaborate',
            description: 'Collaborate for awareness campaigns to spread the word.'
        },
        {
            icon: <Briefcase className="w-10 h-10" />,
            title: 'Partner',
            description: 'Offer CSR partnerships for social impact and community growth.'
        }
    ];

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero Section - Contained and Illustrated */}
            <section className="relative pt-24 md:pt-32 pb-12 px-4 md:px-6">
                <div className="max-w-[1600px] mx-auto relative h-[60vh] md:h-[75vh] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] md:rounded-tr-[12rem] shadow-2xl group">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            src="/images/image copy.png"
                            alt="Get Involved Hero"
                            className="w-full h-full object-cover"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block border border-white/30">
                                Join the Movement
                            </span>
                            <h1 className="text-4xl md:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-lg">
                                Be the Change <br /> You Want to See
                            </h1>
                            <p className="text-lg md:text-2xl text-blue-50 leading-relaxed max-w-2xl mb-8 drop-shadow-md">
                                Together, we can build a world free from addiction and despair. Your support can light up a path to recovery for someone in need.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ways to Contribute */}
            <section className="py-16 px-6 bg-white/60 backdrop-blur-sm">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1A6B96] mb-6">Ways to Contribute</h2>
                        <div className="w-24 h-1.5 bg-[#FDB913] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contributions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
                            >
                                <div className="w-16 h-16 bg-[#1A6B96]/10 text-[#1A6B96] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FDB913] group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#1A6B96] mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote and CTA */}
            <section className="py-24 px-6 bg-[#1A6B96] text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <Users className="absolute bottom-10 right-10 w-64 h-64" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                            "You don’t need to wear a cape to be a hero. Just lend a hand."
                        </h2>
                        <a
                            href="tel:+918750075006"
                            className="inline-flex items-center gap-3 bg-[#FDB913] text-[#1A6B96] px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Become a Volunteer <ArrowRight size={24} />
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GetInvolvedPage;
