import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const WelcomePopup = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                    />

                    {/* Content Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300
                        }}
                        className="relative bg-white rounded-3xl shadow-2xl w-[92%] max-w-md max-h-[80vh] overflow-hidden border-2 md:border-4 border-white flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 p-1.5 md:p-2 rounded-full bg-slate-900/10 hover:bg-slate-900/20 text-slate-800 backdrop-blur-md transition-all z-20 hover:scale-110 active:scale-95 shadow-sm"
                        >
                            <X size={18} />
                        </button>

                        <div className="overflow-y-auto p-1.5 md:p-4 flex items-center justify-center bg-slate-50/50 min-h-[150px]">
                            <div className="relative w-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/Ian care default pop up.jpeg"
                                    alt="Welcome Message"
                                    className="w-full h-auto max-h-[70vh] rounded-2xl shadow-sm object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WelcomePopup;
