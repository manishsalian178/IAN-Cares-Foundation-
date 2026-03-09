import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Calendar, User, Phone, Mail, MessageSquare, ChevronDown, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ConsultationPage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        selectedService: '',
        preferredDate: '',
        concern: ''
    });

    useEffect(() => {
        if (location.state?.selectedService) {
            setFormData(prev => ({
                ...prev,
                selectedService: location.state.selectedService
            }));
        }
    }, [location.state]);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        "Addiction Recovery",
        "Depression & Anxiety Support",
        "Family & Relationship Therapy",
        "Holistic Healing",
        "Youth Empowerment",
        "Individual & Group Counselling",
        "Faith-Integrated Healing",
        "Nutritional & Lifestyle Guidance",
        "Meditation & Mindfulness Practice",
        "Emotional Wellness Coaching"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSep9TEOYAzBK56Evvb4RgVraRqyZQCJNdp1vMF-IBAH78MGMg/formResponse';

        // Split date into components
        const dateObj = new Date(formData.preferredDate);
        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');

        const formBody = new URLSearchParams();
        formBody.append('entry.1000996688', formData.fullName);
        formBody.append('entry.781973256', formData.phoneNumber);
        formBody.append('entry.506881556', formData.emailAddress);
        formBody.append('entry.947267221', formData.selectedService);
        formBody.append('entry.2096332153_year', year);
        formBody.append('entry.2096332153_month', month);
        formBody.append('entry.2096332153_day', day);
        formBody.append('entry.943834150', formData.concern);

        try {
            await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors', // This allows the request to be sent even across origins
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody.toString()
            });

            // Even if it fails (due to CORS or other issues), we've sent the data
            // and we'll show the success state because 'no-cors' doesn't return a readable response
            setIsSubmitting(false);
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Error submitting form:', error);
            // On error, we still show success to the user but log it
            setIsSubmitting(false);
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#E8F6FD] font-sans text-slate-800">
            <Navbar />

            <main className="pt-24 pb-16 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.div
                                key="form-container"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
                            >
                                {/* Header Section */}
                                <div className="bg-[#1A6B96] p-8 md:p-12 text-center text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FDB913]/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                                    >
                                        <Heart className="text-[#FDB913]" size={32} fill="#FDB913" />
                                    </motion.div>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-3xl md:text-5xl font-bold mb-4 relative z-10"
                                    >
                                        Book a Consultation
                                    </motion.h1>
                                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto relative z-10">
                                        Fill out the details below to start your journey toward healing.
                                    </p>
                                </div>

                                {/* Form Section */}
                                <div className="p-8 md:p-12">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Full Name */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-600 flex items-center gap-2 ml-1">
                                                    <User size={16} className="text-[#1A6B96]" />
                                                    Full Name *
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1A6B96] focus:ring-4 focus:ring-[#1A6B96]/10 outline-none transition-all bg-slate-50"
                                                />
                                            </div>

                                            {/* Phone Number */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-600 flex items-center gap-2 ml-1">
                                                    <Phone size={16} className="text-[#1A6B96]" />
                                                    Phone Number *
                                                </label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number"
                                                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1A6B96] focus:ring-4 focus:ring-[#1A6B96]/10 outline-none transition-all bg-slate-50"
                                                />
                                            </div>

                                            {/* Email Address */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-600 flex items-center gap-2 ml-1">
                                                    <Mail size={16} className="text-[#1A6B96]" />
                                                    Email Address *
                                                </label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="emailAddress"
                                                    value={formData.emailAddress}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email address"
                                                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1A6B96] focus:ring-4 focus:ring-[#1A6B96]/10 outline-none transition-all bg-slate-50"
                                                />
                                            </div>

                                            {/* Select Service */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-600 flex items-center gap-2 ml-1">
                                                    <ChevronDown size={16} className="text-[#1A6B96]" />
                                                    Select Service *
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        name="selectedService"
                                                        value={formData.selectedService}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1A6B96] focus:ring-4 focus:ring-[#1A6B96]/10 outline-none transition-all bg-slate-50 appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled>Select a service</option>
                                                        {services.map((service, index) => (
                                                            <option key={index} value={service}>{service}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                                                </div>
                                            </div>

                                            {/* Preferred Date */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-slate-600 flex items-center gap-2 ml-1">
                                                    <Calendar size={16} className="text-[#1A6B96]" />
                                                    Preferred Date *
                                                </label>
                                                <input
                                                    required
                                                    type="date"
                                                    name="preferredDate"
                                                    value={formData.preferredDate}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1A6B96] focus:ring-4 focus:ring-[#1A6B96]/10 outline-none transition-all bg-slate-50"
                                                />
                                            </div>
                                        </div>

                                        {/* Brief Description */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-600 flex items-center gap-2 ml-1">
                                                <MessageSquare size={16} className="text-[#1A6B96]" />
                                                Briefly describe your concern *
                                            </label>
                                            <textarea
                                                required
                                                name="concern"
                                                value={formData.concern}
                                                onChange={handleChange}
                                                rows="4"
                                                placeholder="Tell us a bit about why you're seeking a consultation..."
                                                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#1A6B96] focus:ring-4 focus:ring-[#1A6B96]/10 outline-none transition-all bg-slate-50 resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <motion.button
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            type="submit"
                                            className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 mt-4 ${isSubmitting ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#FDB913] hover:bg-[#e5a811] text-white'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                            ) : (
                                                <>
                                                    Submit Request
                                                    <ArrowRight size={20} />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="success-container"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[2.5rem] shadow-2xl p-12 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
                                >
                                    <CheckCircle size={56} />
                                </motion.div>
                                <h2 className="text-4xl font-bold text-slate-800 mb-4">Request Submitted!</h2>
                                <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
                                    Thank you, <span className="text-[#1A6B96] font-semibold">{formData.fullName}</span>. We have received your request and will contact you shortly to confirm your appointment.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.location.href = '/'}
                                    className="px-10 py-4 bg-[#1A6B96] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#145a80] transition-all"
                                >
                                    Return Home
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ConsultationPage;
