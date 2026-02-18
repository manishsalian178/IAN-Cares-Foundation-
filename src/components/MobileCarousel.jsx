import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MobileCarousel = ({ items, renderItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) newIndex = items.length - 1;
        if (newIndex >= items.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full overflow-hidden py-4 md:hidden">
            <div className="relative h-[450px] w-full flex items-center justify-center">
                <AnimatePresence initial={false} custom={direction} mode='popLayout'>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full h-full px-4 flex items-center justify-center"
                    >
                        {renderItem(items[currentIndex])}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg text-[#1A6B96] hover:bg-white"
                    onClick={() => paginate(-1)}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg text-[#1A6B96] hover:bg-white"
                    onClick={() => paginate(1)}
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#1A6B96] w-6' : 'bg-slate-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileCarousel;
