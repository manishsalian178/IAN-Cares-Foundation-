import React, { useState } from 'react';
import { Heart, Phone, MapPin, Mail, Facebook, Instagram, Linkedin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [showCopyPopup, setShowCopyPopup] = useState(false);
    const email = "iancaresfoundation@gmail.com";

    const handleMailClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
            setShowCopyPopup(true);
            setTimeout(() => setShowCopyPopup(false), 3000);
        });
    };

    return (
        <footer id="contact" className="pt-16 md:pt-20 pb-10 px-6 bg-slate-900 text-white rounded-t-[30px] md:rounded-t-[50px] relative">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 mb-20">
                <div className="md:col-span-5">
                    <div className="flex items-center gap-4 mb-8">
                        <img
                            src="https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772446233/ian_cares_foundation/logo.png"
                            alt="Ian Cares Foundation Logo"
                            className="h-12 md:h-16 w-auto object-contain"
                        />
                        <span className="text-xl md:text-2xl font-bold tracking-tight text-white">IAN CARES</span>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed mb-10">
                        A peer-supported rehabilitation community dedicated to restorative healing and long-term sobriety. We walk with you toward a second chance.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[#FDB913] group-hover:bg-[#FDB913] group-hover:text-white transition-all">
                                <Phone size={22} />
                            </div>
                            <div>
                                <div className="text-slate-400 text-sm">Emergency Support</div>
                                <a href="tel:+918750075006" className="font-bold text-lg hover:text-[#FDB913] transition-colors tracking-wide">+91 87500 75006</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-[#FDB913] group-hover:bg-[#FDB913] group-hover:text-white transition-all">
                                <Phone size={22} />
                            </div>
                            <div>
                                <div className="text-slate-400 text-sm">Office Enquiries</div>
                                <a href="tel:+919740296297" className="font-bold text-lg hover:text-[#FDB913] transition-colors tracking-wide">+91 97402 96297</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7 grid sm:grid-cols-2 gap-6 md:gap-10 bg-slate-800/50 p-6 md:p-10 rounded-[24px] md:rounded-[40px] border border-slate-700">
                    <div>
                        <h4 className="text-[#FDB913] font-bold mb-6 text-lg uppercase tracking-widest">Our Home</h4>
                        <a
                            href="https://maps.app.goo.gl/jfwsMhEVGwTU9kcX6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 group cursor-pointer"
                        >
                            <MapPin className="text-[#FDB913] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                            <address className="not-italic text-slate-300 text-base leading-relaxed group-hover:text-white transition-colors break-words">
                                Quila, Kinnigoli Town Panchayat,<br />
                                Dakshina Kannada Dist.,<br />
                                Karnataka, 574150
                                <span className="block text-[#FDB913] text-sm mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Click for directions →</span>
                            </address>
                        </a>
                    </div>
                    <div>
                        <h4 className="text-[#FDB913] font-bold mb-6 text-lg uppercase tracking-widest">Write To Us</h4>
                        <div className="flex items-center gap-4">
                            <Mail className="text-[#FDB913] shrink-0" />
                            <span className="text-slate-300 text-base break-all">{email}</span>
                        </div>
                        <div className="mt-8">
                            <button
                                onClick={handleMailClick}
                                className="w-full bg-[#1A6B96] text-white py-4 rounded-2xl font-bold hover:bg-[#155a82] transition-all inline-block text-center cursor-pointer"
                            >
                                Send a Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copy Status Popup */}
                <AnimatePresence>
                    {showCopyPopup && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, x: '-50%' }}
                            animate={{ opacity: 1, y: 0, x: '-50%' }}
                            exit={{ opacity: 0, y: 20, x: '-50%' }}
                            className="fixed bottom-10 left-1/2 z-50 bg-[#1A6B96] text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 border border-white/20 backdrop-blur-md"
                        >
                            <CheckCircle size={20} className="text-[#FDB913]" />
                            mail id copied
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Ian Cares Foundation. All Rights Reserved.</p>

                <div className="flex items-center gap-6">
                    <a href="https://www.facebook.com/IanCaresFoundation/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                        <Facebook size={18} />
                    </a>
                    <a href="https://www.instagram.com/iancaresfoundation/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                        <Instagram size={18} />
                    </a>
                    <a href="https://www.linkedin.com/company/ian-cares-foundation/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                </div>

                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
