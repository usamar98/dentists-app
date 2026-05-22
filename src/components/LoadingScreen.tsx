"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex overflow-hidden">
                        <motion.span
                            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            SmileCraft
                        </motion.span>
                        <motion.span
                            className="text-4xl md:text-6xl font-light text-white tracking-tight"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            Fiji
                        </motion.span>
                    </div>
                    <motion.div
                        className="absolute bottom-12 w-12 h-[1px] bg-white/30 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.4, delay: 0.6, ease: "linear" }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
