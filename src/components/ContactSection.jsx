import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="py-12 md:py-24 px-4 md:px-6 bg-slate-50">
            <div className="max-w-[1600px] mx-auto px-0 md:px-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Left Side: Contact Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-3xl shadow-2xl shadow-blue-900/5 border border-white/50"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A6B96] mb-8 md:mb-10">Get in Touch</h2>

                        <div className="space-y-8 md:space-y-10">
                            <a
                                href="https://maps.app.goo.gl/jfwsMhEVGwTU9kcX6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 md:gap-6 group cursor-pointer"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#1A6B96]/10 flex items-center justify-center text-[#1A6B96] group-hover:bg-[#1A6B96] group-hover:text-white transition-all duration-300 shrink-0">
                                    <MapPin size={24} className="md:w-7 md:h-7" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2">Our Foundation</h4>
                                    <address className="not-italic text-slate-800 text-base md:text-lg font-medium leading-relaxed group-hover:text-[#1A6B96] transition-colors break-words">
                                        Sarva Dharma Sangama Campus<br />
                                        Quila, Kinnigoli, Dakshina Kannada – 574150
                                    </address>
                                    <p className="text-[#1A6B96] text-sm mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click for directions →</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 md:gap-6 group">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FDB913]/10 flex items-center justify-center text-[#FDB913] group-hover:bg-[#FDB913] group-hover:text-white transition-all duration-300 shrink-0">
                                    <Phone size={24} className="md:w-7 md:h-7" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2">Call Us</h4>
                                    <div className="text-slate-800 text-base md:text-lg font-medium break-all">
                                        +91 97402 96297
                                    </div>
                                    <p className="text-slate-400 text-sm mt-1">Available for emergency & enquiries</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 md:gap-6 group">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#1A6B96]/10 flex items-center justify-center text-[#1A6B96] group-hover:bg-[#1A6B96] group-hover:text-white transition-all duration-300 shrink-0">
                                    <Mail size={24} className="md:w-7 md:h-7" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-slate-500 font-bold text-xs md:text-sm uppercase tracking-widest mb-1 md:mb-2">Email Us</h4>
                                    <div className="text-slate-800 text-base md:text-lg font-medium break-all">
                                        iancaresfoundation@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Google Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/5 border-8 border-white relative group"
                    >
                        <a
                            href="https://maps.app.goo.gl/jfwsMhEVGwTU9kcX6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 cursor-pointer"
                            aria-label="Get directions to Ian Cares Foundation"
                        >
                            <div className="absolute inset-0 bg-[#1A6B96]/0 group-hover:bg-[#1A6B96]/10 transition-all duration-300 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 bg-white text-[#1A6B96] px-6 py-3 rounded-full font-bold shadow-xl transition-all duration-300 transform group-hover:scale-105">
                                    Open in Google Maps
                                </span>
                            </div>
                        </a>
                        <iframe
                            title="Ian Cares Foundation Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.45427188734!2d74.832!3d13.048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzUyLjgiTiA3NMKwNTAnMjIuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="pointer-events-none"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
