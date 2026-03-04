"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import CounterAnimation from "../animations/CounterAnimation";
import TextScramble from "../animations/TextScramble";

const points = [
    "State-of-the-art AI diagnostic technology",
    "Pain-free procedures with sedation options",
    "Flexible payment plans & all health funds accepted",
    "Open 7 days including evenings",
];

const stats = [
    { value: 20, suffix: "+", label: "Years Experience" },
    { value: 15000, suffix: "+", label: "Happy Patients" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
    { value: 50, suffix: "+", label: "Industry Awards" },
];

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Clinic Image */}
                    <ScrollReveal direction="left">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                            <Image
                                src="/images/dental-clinic.png"
                                alt="SmileCraft Dental Clinic Interior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            {/* Decorative Corner */}
                            <div className="absolute top-6 right-6 w-20 h-20 border border-white/20 rounded-xl" />
                            <div className="absolute bottom-6 left-6 w-16 h-16 border border-white/20 rounded-full" />
                        </div>
                    </ScrollReveal>

                    {/* Content */}
                    <div>
                        <ScrollReveal>
                            <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4"
                                style={{ fontFamily: "var(--font-inter)" }}>
                                Why Choose Us
                            </p>
                            <TextScramble
                                text="Why 15,000+ Australians Trust SmileCraft"
                                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-tight mb-8"
                                as="h2"
                            />
                        </ScrollReveal>

                        <div className="space-y-5 mb-12">
                            {points.map((point, i) => (
                                <ScrollReveal key={i} delay={i * 0.1}>
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

                {/* Stats Row */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                            <div
                                className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-2"
                                style={{ fontFamily: "var(--font-jakarta)" }}
                            >
                                <CounterAnimation
                                    target={stat.value}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <p className="text-sm text-[#0A0A0A]/50 font-medium">{stat.label}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
