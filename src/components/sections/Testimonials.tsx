"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const testimonials = [
    {
        stars: 5,
        quote: "SmileCraft completely transformed my smile. The AI consultation was spot-on and the team made me feel so comfortable throughout the entire process. Couldn't recommend them more highly!",
        name: "Sarah Mitchell",
        treatment: "Cosmetic Veneers",
        image: "/images/cosmetic-dentistry.png",
    },
    {
        stars: 5,
        quote: "I was terrified of the dentist for years, but the team at SmileCraft changed everything. The sedation options and gentle approach made it completely pain-free. Best dental experience ever.",
        name: "James Chen",
        treatment: "Dental Implants",
        image: "/images/dental-implant.png",
    },
    {
        stars: 5,
        quote: "The online booking system is incredibly convenient, and the AI assistant answered all my questions at 11pm when I had a dental emergency. Truly modern dental care at its finest.",
        name: "Priya Sharma",
        treatment: "Emergency Care",
        image: "/images/emergency-dental.png",
    },
    {
        stars: 5,
        quote: "After trying multiple clinics across Sydney, SmileCraft is hands down the best. The technology they use is next-level, and Dr. Williams is an absolute perfectionist. Worth every cent.",
        name: "Tom O'Brien",
        treatment: "Invisalign Treatment",
        image: "/images/orthodontics.png",
    },
    {
        stars: 5,
        quote: "From the moment I walked in, I knew this was different. The clinic is beautiful, the staff are warm and professional, and the results speak for themselves. My teeth have never looked better!",
        name: "Emily Watson",
        treatment: "Teeth Whitening",
        image: "/images/general-dentistry.png",
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        let animationId: number;
        let scrollPos = 0;

        const scroll = () => {
            if (!isPaused && el) {
                scrollPos += 0.5;
                if (scrollPos >= el.scrollWidth / 2) {
                    scrollPos = 0;
                }
                el.scrollLeft = scrollPos;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const allTestimonials = [...testimonials, ...testimonials];

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Patient Stories
                    </p>
                    <TextScramble
                        text="What Our Patients Say"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                </ScrollReveal>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-hidden px-6 cursor-grab"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {allTestimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className="group flex-shrink-0 w-[350px] md:w-[420px] rounded-2xl border border-[#0A0A0A]/[0.06] bg-white overflow-hidden"
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Service-related Image with Hover Text */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={t.image}
                                alt={`${t.treatment} - ${t.name}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="420px"
                            />
                            {/* Hover overlay with quote */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-5">
                                <div>
                                    <p className="text-white/90 text-xs leading-relaxed line-clamp-4">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <p className="text-white/50 text-[10px] mt-2 font-medium uppercase tracking-wider">
                                        {t.treatment}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                            {/* Stars */}
                            <div className="flex gap-1 mb-3">
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <span key={j} className="text-[#0A0A0A] text-sm">★</span>
                                ))}
                            </div>

                            <p className="text-sm text-[#0A0A0A]/70 leading-relaxed mb-5 line-clamp-3">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>
                                        {t.name}
                                    </p>
                                    <p className="text-xs text-[#0A0A0A]/40">{t.treatment}</p>
                                </div>
                                <span className="text-[10px] font-medium text-[#0A0A0A]/30 border border-[#0A0A0A]/10 px-2.5 py-1 rounded-full">
                                    Verified Patient
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${i === 0 ? "bg-[#0A0A0A]" : "bg-[#0A0A0A]/20"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
