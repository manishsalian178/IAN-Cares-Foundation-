import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Image, FileText, Map, Phone, Heart, Globe, LogOut, Star } from 'lucide-react';

const AdminNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUsername');
        navigate('/login');
    };

    const navLinks = [
        { name: 'Dashboard', href: '/' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="https://res.cloudinary.com/dzzhtglaj/image/upload/q_auto/f_auto/v1772446233/ian_cares_foundation/logo.png"
                            alt="Ian Cares Foundation Logo"
                            className="h-12 w-auto object-contain"
                        />
                        <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#1A6B96]' : 'text-slate-900'}`}>
                            ADMIN PANEL
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-8 border-r border-slate-200 pr-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`font-semibold hover:text-[#1A6B96] transition-colors ${location.pathname === link.href ? 'text-[#1A6B96]' : 'text-slate-600'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <Link
                                to="/gallery"
                                className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-5 py-2 rounded-full font-bold shadow-sm hover:shadow-md hover:bg-[#1A6B96] hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                            >
                                <Image size={16} />
                                Gallery
                            </Link>
                            <Link
                                to="/blog"
                                className="bg-[#FDB913] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:bg-[#e5a811] transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                            >
                                <FileText size={16} />
                                Blog
                            </Link>
                            <Link
                                to="/journey"
                                className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-5 py-2 rounded-full font-bold shadow-sm hover:shadow-md hover:bg-[#1A6B96] hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                            >
                                <Map size={16} />
                                Journey
                            </Link>
                            <Link
                                to="/live-touch"
                                className="bg-gradient-to-r from-[#1A6B96] to-[#0f4664] text-white px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                            >
                                <Globe size={16} />
                                Live Touch
                            </Link>
                            <Link
                                to="/client-rating"
                                className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-5 py-2 rounded-full font-bold shadow-sm hover:shadow-md hover:bg-[#1A6B96] hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                            >
                                <Star size={16} />
                                Client Rating
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="bg-red-50 text-red-600 border-2 border-red-100 px-5 py-2 rounded-full font-bold shadow-sm hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 text-sm"
                            >
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    </div>

                    <button
                        className="md:hidden text-slate-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 bg-white z-[40] flex flex-col justify-start pt-24 items-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-2xl font-bold text-[#1A6B96]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/gallery"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2"
                        >
                            <Image size={24} />
                            Gallery
                        </Link>
                        <Link
                            to="/blog"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-[#FDB913] text-white px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2"
                        >
                            <FileText size={24} />
                            Blog
                        </Link>
                        <Link
                            to="/journey"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2"
                        >
                            <Map size={24} />
                            Journey
                        </Link>
                        <Link
                            to="/live-touch"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-gradient-to-r from-[#1A6B96] to-[#0f4664] text-white px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2 shadow-xl"
                        >
                            <Globe size={24} />
                            Live Touch
                        </Link>
                        <Link
                            to="/client-rating"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-white text-[#1A6B96] border-2 border-[#1A6B96] px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2"
                        >
                            <Star size={24} />
                            Client Rating
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="bg-red-50 text-red-600 border-2 border-red-100 px-10 py-4 rounded-full font-bold text-xl flex items-center gap-2"
                        >
                            <LogOut size={24} />
                            Logout
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AdminNavbar;
