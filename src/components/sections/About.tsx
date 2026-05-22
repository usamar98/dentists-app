"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const points = [
    "Fiji-focused copy for Suva, Nadi, Lautoka, and nearby communities",
    "WhatsApp enquiry assistant for normal dentist websites",
    "AI patient enquiry demo available for premium dentist packages",
    "Clear address, opening hours, phone, WhatsApp, and Google Maps contact flow",
];

const seoTerms = [
    "Dentist in Fiji",
    "Dental clinic in Suva",
    "Emergency dentist in Fiji",
    "Family dental care in Fiji",
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <ScrollReveal direction="left">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                            <Image
                                src="/images/dental-clinic.png"
                                alt="Dental clinic in Suva Fiji"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-5 py-4 shadow-xl shadow-black/10">
                                <p className="text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/40 mb-1">Service Area</p>
                                <p className="text-sm font-semibold text-[#0A0A0A]">Suva / Nadi / Lautoka / Fiji</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div>
                        <ScrollReveal>
                            <p
                                className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                Why Choose Us
                            </p>
                            <TextScramble
                                text="Built for Fiji Dental Clinics"
                                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight mb-8"
                                as="h2"
                            />
                        </ScrollReveal>

                        <div className="space-y-5 mb-12">
                            {points.map((point, i) => (
                                <ScrollReveal key={point} delay={i * 0.1}>
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-[#0A0A0A] flex items-center justify-center"
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </motion.div>
                                        <p className="text-[#0A0A0A]/70 text-base leading-relaxed">{point}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {seoTerms.map((term, i) => (
                        <ScrollReveal key={term} delay={i * 0.1} className="text-center">
                            <div className="rounded-2xl bg-white border border-[#0A0A0A]/[0.06] px-5 py-6">
                                <p className="text-sm font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>
                                    {term}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
