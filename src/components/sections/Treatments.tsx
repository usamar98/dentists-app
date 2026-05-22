"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";

const treatments = [
    {
        label: "Routine Care",
        title: "Check-ups & Cleaning",
        desc: "Routine exams, scale and polish, fillings, and preventive advice for adults and children.",
        image: "/images/general-dentistry.png",
    },
    {
        label: "Smile Design",
        title: "Cosmetic Smile Care",
        desc: "Whitening enquiries, bonding, veneers, and smile enhancement consultations.",
        image: "/images/cosmetic-dentistry.png",
    },
    {
        label: "Restorative",
        title: "Dental Implants",
        desc: "Consultations for missing teeth, implant suitability, and restorative treatment planning.",
        image: "/images/dental-implant.png",
    },
    {
        label: "Alignment",
        title: "Braces & Aligner Enquiries",
        desc: "Orthodontic guidance for teens and adults exploring braces or clear aligners.",
        image: "/images/orthodontics.png",
    },
    {
        label: "Urgent Care",
        title: "Emergency Dental Care",
        desc: "Prompt help for tooth pain, swelling, broken teeth, chips, and urgent dental concerns.",
        image: "/images/emergency-dental.png",
    },
    {
        label: "Family Visits",
        title: "Family Dental Care",
        desc: "Gentle dental visits for children, parents, and ongoing family oral health.",
        image: "/images/hero-smile.png",
    },
];

const whatsappBase = "https://wa.me/6797001234?text=";

export default function Treatments() {
    return (
        <section id="treatments" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-16 md:mb-20">
                    <p
                        className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        Our Treatments
                    </p>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                        Dental Treatments in Fiji
                    </h2>
                    <p className="mt-4 text-[#0A0A0A]/50 max-w-2xl mx-auto">
                        Choose the care you need, then call or WhatsApp the clinic for availability in Suva, Nadi, Lautoka, and Fiji.
                    </p>
                    <div className="mt-4 w-16 h-[2px] bg-[#0A0A0A] mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {treatments.map((treatment, i) => (
                        <ScrollReveal key={treatment.title} delay={i * 0.08}>
                            <motion.div
                                className="group flex h-full flex-col rounded-2xl border border-[#0A0A0A]/[0.06] bg-white transition-shadow duration-300 overflow-hidden"
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: "0 20px 60px rgba(10, 10, 10, 0.08)",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={treatment.image}
                                        alt={treatment.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0A0A0A] backdrop-blur">
                                        {treatment.label}
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-8 md:p-10">
                                    <div className="w-10 h-10 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center text-xs font-bold text-[#0A0A0A]/50 mb-6">
                                        {String(i + 1).padStart(2, "0")}
                                    </div>
                                    <h3
                                        className="text-xl font-semibold text-[#0A0A0A] mb-3"
                                        style={{ fontFamily: "var(--font-jakarta)" }}
                                    >
                                        {treatment.title}
                                    </h3>
                                    <p className="text-[#0A0A0A]/50 text-sm leading-relaxed mb-8">
                                        {treatment.desc}
                                    </p>
                                    <a
                                        href={`${whatsappBase}${encodeURIComponent(`I would like to ask about ${treatment.title}`)}`}
                                        className="mt-auto inline-flex w-fit items-center rounded-full border border-[#0A0A0A]/10 px-4 py-2 text-sm font-medium text-[#0A0A0A] transition-all duration-300 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white"
                                    >
                                        Ask on WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
