"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingElementsProps {
    onOpenChat: () => void;
}

export default function FloatingElements({ onOpenChat }: FloatingElementsProps) {
    const [showBookNow, setShowBookNow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBookNow(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* AI Chat Bubble - Bottom Right */}
            <motion.button
                className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center shadow-xl hover:bg-[#333] transition-colors"
                onClick={onOpenChat}
                aria-label="Open AI Chat"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                {/* Pulse Ring */}
                <span className="absolute inset-0 rounded-full border-2 border-[#0A0A0A]" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
            </motion.button>

            {/* Book Now - Mobile, Bottom Left */}
            <AnimatePresence>
                {showBookNow && (
                    <motion.a
                        href="#booking"
                        className="fixed bottom-6 left-6 z-40 md:hidden px-5 py-3 rounded-full bg-[#0A0A0A] text-white text-sm font-medium shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        Book Now
                    </motion.a>
                )}
            </AnimatePresence>
        </>
    );
}
