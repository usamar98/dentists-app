"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "../animations/MagneticButton";
import ScrollReveal from "../animations/ScrollReveal";

const words = ["Your", "Smile,", "Our", "Passion."];

const trustBadges = [
    { icon: "★", label: "4.9 Google Rating" },
    { icon: "✓", label: "ADA Certified" },
    { icon: "♥", label: "15,000+ Patients" },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
        >
            {/* Gradient Mesh Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[#0A0A0A]/[0.03] blur-3xl"
                    style={{ animation: "meshMove 20s ease-in-out infinite" }}
                />
                <div
                    className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-[#0A0A0A]/[0.02] blur-3xl"
                    style={{ animation: "meshMove 25s ease-in-out infinite reverse" }}
                />
                <div
                    className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#0A0A0A]/[0.02] blur-2xl"
                    style={{ animation: "meshMove 18s ease-in-out infinite 2s" }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Headline */}
                        <div className="mb-8 overflow-hidden">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
                                style={{ fontFamily: "var(--font-jakarta)" }}
                            >
                                {words.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-block"
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 2.5 + i * 0.12,
                                            ease: [0.25, 0.1, 0.25, 1],
                                        }}
                                    >
                                        {word}{i < words.length - 1 ? "\u00A0" : ""}
                                    </motion.span>
                                ))}
                            </h1>
                        </div>

                        {/* Subtext */}
                        <motion.p
                            className="text-lg md:text-xl text-[#0A0A0A]/60 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
                            style={{ fontFamily: "var(--font-inter)" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 3.1 }}
                        >
                            Award-winning dental care in the heart of Sydney. Experience gentle,
                            modern dentistry powered by cutting-edge AI technology.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 3.3 }}
                        >
                            <MagneticButton
                                href="#booking"
                                className="inline-flex items-center justify-center px-8 py-4 bg-[#0A0A0A] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-all duration-300 w-full sm:w-auto"
                            >
                                Book Appointment
                            </MagneticButton>
                            <MagneticButton
                                href="#team"
                                className="inline-flex items-center justify-center px-8 py-4 border border-[#0A0A0A]/20 text-[#0A0A0A] text-sm font-medium rounded-full hover:border-[#0A0A0A] transition-all duration-300 w-full sm:w-auto"
                            >
                                Meet Our Team
                            </MagneticButton>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 3.5 }}
                        >
                            {trustBadges.map((badge, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 text-sm text-[#0A0A0A]/50"
                                >
                                    <span className="text-[#0A0A0A]/70">{badge.icon}</span>
                                    <span>{badge.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Hero Image */}
                    <motion.div
                        className="relative hidden lg:block"
                        initial={{ opacity: 0, scale: 0.9, x: 40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 3.0, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-[#0A0A0A]/[0.06]" />
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border-2 border-[#0A0A0A]/[0.08]" />
                            <div className="absolute top-8 -left-3 w-6 h-6 rounded-full bg-[#0A0A0A]/[0.06]" />

                            {/* Main Image */}
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                                <Image
                                    src="/images/hero-smile.png"
                                    alt="Beautiful smile - SmileCraft Dental"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-xl shadow-black/5 px-5 py-3 border border-[#0A0A0A]/[0.06]"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <p className="text-xs font-medium text-[#0A0A0A]/40 mb-0.5">Since 2004</p>
                                <p className="text-sm font-bold text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>20+ Years</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-[#0A0A0A]/20 rounded-full flex justify-center pt-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-1 h-2 bg-[#0A0A0A]/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
