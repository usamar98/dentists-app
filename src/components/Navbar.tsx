"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Assistant", href: "#ai-assistant" },
    { label: "Booking", href: "#booking" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
                    : "bg-transparent"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-1" aria-label="SmileCraft Dental Fiji Home">
                            <span
                                className="text-xl font-bold tracking-tight text-[#0A0A0A]"
                                style={{ fontFamily: "var(--font-jakarta)" }}
                            >
                                SmileCraft
                            </span>
                            <span
                                className="text-xl font-light tracking-tight text-[#0A0A0A]"
                                style={{ fontFamily: "var(--font-jakarta)" }}
                            >
                                Fiji
                            </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A] transition-colors duration-300"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA + Hamburger */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://wa.me/6797001234?text=I%20would%20like%20to%20book%20a%20dental%20appointment"
                                className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-[#0A0A0A] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-300"
                            >
                                WhatsApp
                            </a>

                            {/* Hamburger */}
                            <button
                                className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle Menu"
                            >
                                <motion.span
                                    className="w-6 h-[1.5px] bg-[#0A0A0A] block"
                                    animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    className="w-6 h-[1.5px] bg-[#0A0A0A] block"
                                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-6 h-[1.5px] bg-[#0A0A0A] block"
                                    animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {menuItems.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    className="text-3xl font-semibold text-[#0A0A0A]"
                                    style={{ fontFamily: "var(--font-jakarta)" }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="https://wa.me/6797001234?text=I%20would%20like%20to%20book%20a%20dental%20appointment"
                                className="mt-4 px-10 py-4 bg-[#0A0A0A] text-white text-lg font-medium rounded-full"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                onClick={() => setMobileOpen(false)}
                            >
                                WhatsApp Enquiry
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
