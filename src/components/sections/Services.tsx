"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const services = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
        ),
        title: "General Dentistry",
        desc: "Comprehensive checkups, professional cleanings & preventive care for the whole family.",
        image: "/images/general-dentistry.png",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: "Cosmetic Dentistry",
        desc: "Porcelain veneers, teeth whitening & complete smile makeovers tailored to you.",
        image: "/images/cosmetic-dentistry.png",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Dental Implants",
        desc: "Permanent, natural-looking tooth replacement solutions with titanium implants.",
        image: "/images/dental-implant.png",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
        ),
        title: "Orthodontics",
        desc: "Invisalign clear aligners & modern braces for straighter, confident smiles.",
        image: "/images/orthodontics.png",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Emergency Dental",
        desc: "Same-day urgent dental care when you need it most. Available 7 days a week.",
        image: "/images/emergency-dental.png",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <path d="M7 8l3 3 7-7" />
            </svg>
        ),
        title: "AI Smile Analysis",
        desc: "Upload a photo and receive instant AI-powered recommendations for your smile.",
        image: "/images/ai-dental-scan.png",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4"
                        style={{ fontFamily: "var(--font-inter)" }}>
                        What We Offer
                    </p>
                    <TextScramble
                        text="Our Services"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <div className="mt-4 w-16 h-[2px] bg-[#0A0A0A] mx-auto" />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <motion.div
                                className="group rounded-2xl border border-[#0A0A0A]/[0.06] bg-white cursor-pointer transition-shadow duration-300 overflow-hidden"
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: "0 20px 60px rgba(10, 10, 10, 0.08)",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Service Image with Hover Overlay*/}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Hover text overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-5">
                                        <div>
                                            <p className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-jakarta)" }}>
                                                {service.title}
                                            </p>
                                            <p className="text-white/80 text-xs leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-8 md:p-10">
                                    <div className="text-[#0A0A0A]/60 mb-6 group-hover:text-[#0A0A0A] transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3
                                        className="text-xl font-semibold text-[#0A0A0A] mb-3"
                                        style={{ fontFamily: "var(--font-jakarta)" }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="text-[#0A0A0A]/50 text-sm leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                    <span className="text-sm font-medium text-[#0A0A0A] group-hover:tracking-wider transition-all duration-300">
                                        Learn More →
                                    </span>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
