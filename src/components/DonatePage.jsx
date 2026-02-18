import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Landmark, QrCode, Copy, Check } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const DonatePage = () => {
    const [copied, setCopied] = React.useState(null);

    const bankDetails = {
        accountName: "Ian Cares Foundation",
        accountNumber: "123456789012",
        ifsc: "SBIN0001234",
        bankName: "State Bank of India",
        branch: "Mangalore Main Branch"
    };

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopied(field);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-[#E8F6FD]">
            <Navbar />

            {/* Hero Section - Contained and Premium */}
            <section className="relative pt-24 md:pt-32 pb-12 px-4 md:px-6">
                <div className="max-w-[1600px] mx-auto relative h-[60vh] md:h-[75vh] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] md:rounded-tr-[12rem] shadow-2xl group">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            src="/images/donate.png"
                            alt="Support Our Cause Hero"
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
                            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-8 inline-block border border-white/30">
                                Support Our Cause
                            </span>
                            <h1 className="text-4xl md:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-lg">
                                Make a <br /> Difference
                            </h1>
                            <p className="text-lg md:text-2xl text-blue-50 leading-relaxed max-w-2xl mb-10 drop-shadow-md">
                                Your contribution helps us provide rehabilitation, counseling, and support to those in need. Every donation counts toward a better tomorrow.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Donation Content Section */}
            <section className="py-24 px-6 bg-[#E8F6FD]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Bank Details Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A6B96]/5 rounded-bl-full -mr-8 -mt-8"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[#1A6B96]/10 rounded-2xl flex items-center justify-center text-[#1A6B96]">
                                    <Landmark size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-[#1A6B96]">Bank Transfer Details</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="group">
                                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Account Name</label>
                                    <div className="flex items-center justify-between text-lg font-medium text-slate-700">
                                        {bankDetails.accountName}
                                        <button onClick={() => handleCopy(bankDetails.accountName, 'name')} className="text-slate-400 hover:text-[#1A6B96] transition-colors">
                                            {copied === 'name' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="h-px bg-slate-100"></div>

                                <div className="group">
                                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Account Number</label>
                                    <div className="flex items-center justify-between text-lg font-medium text-slate-700">
                                        {bankDetails.accountNumber}
                                        <button onClick={() => handleCopy(bankDetails.accountNumber, 'acc')} className="text-slate-400 hover:text-[#1A6B96] transition-colors">
                                            {copied === 'acc' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="h-px bg-slate-100"></div>

                                <div className="group">
                                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1 block">IFSC Code</label>
                                    <div className="flex items-center justify-between text-lg font-medium text-slate-700">
                                        {bankDetails.ifsc}
                                        <button onClick={() => handleCopy(bankDetails.ifsc, 'ifsc')} className="text-slate-400 hover:text-[#1A6B96] transition-colors">
                                            {copied === 'ifsc' ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="h-px bg-slate-100"></div>

                                <div className="group">
                                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Bank Name</label>
                                    <div className="text-lg font-medium text-slate-700">{bankDetails.bankName}</div>
                                </div>
                                <div className="h-px bg-slate-100"></div>

                                <div className="group">
                                    <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1 block">Branch</label>
                                    <div className="text-lg font-medium text-slate-700">{bankDetails.branch}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* QR Code Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-[#1A6B96] rounded-3xl shadow-xl p-8 md:p-10 text-white relative flex flex-col items-center justify-center text-center overflow-hidden h-full min-h-[500px]"
                        >
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                                <QrCode size={32} />
                            </div>

                            <h2 className="text-3xl font-bold mb-2">Scan to Donate</h2>
                            <p className="text-blue-100 mb-8">Use any UPI app to make a contribution directly.</p>

                            <div className="bg-white p-4 rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300">
                                <img
                                    src="/images/qr_code_dummy.png"
                                    alt="Donation QR Code"
                                    className="w-48 h-48 md:w-64 md:h-64 object-contain"
                                />
                            </div>

                            <div className="mt-8 flex gap-3 text-sm font-medium text-blue-200">
                                <span className="flex items-center gap-1"><CreditCard size={14} /> UPI</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Landmark size={14} /> Bank Transfer</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default DonatePage;
