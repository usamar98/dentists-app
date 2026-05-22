"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const services = [
    {
        title: "General Dentistry",
        desc: "Check-ups, cleanings, fillings, and preventive care for patients in Fiji.",
        image: "/images/general-dentistry.png",
    },
    {
        title: "Cosmetic Dentistry",
        desc: "Veneers, bonding, whitening enquiries, and smile improvement consultations.",
        image: "/images/cosmetic-dentistry.png",
    },
    {
        title: "Dental Implants",
        desc: "Restorative consultations for missing teeth and implant treatment options.",
        image: "/images/dental-implant.png",
    },
    {
        title: "Orthodontic Enquiries",
        desc: "Clear aligner and braces enquiries for teens and adults.",
        image: "/images/orthodontics.png",
    },
    {
        title: "Emergency Dentist in Fiji",
        desc: "Fast call or WhatsApp enquiries for tooth pain, swelling, chips, and broken teeth.",
        image: "/images/emergency-dental.png",
    },
    {
        title: "Family Dental Care",
        desc: "Friendly dental care for children, adults, and families across Suva and Fiji.",
        image: "/images/ai-dental-scan.png",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <p
                        className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        What We Offer
                    </p>
                    <TextScramble
                        text="Fiji Dental Services"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <p className="mt-4 text-[#0A0A0A]/50 max-w-2xl mx-auto">
                        Fiji-relevant dental services with clear enquiry paths for WhatsApp, phone, and clinic visits.
                    </p>
                    <div className="mt-4 w-16 h-[2px] bg-[#0A0A0A] mx-auto" />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ScrollReveal key={service.title} delay={i * 0.1}>
                            <motion.div
                                className="group rounded-2xl border border-[#0A0A0A]/[0.06] bg-white cursor-pointer transition-shadow duration-300 overflow-hidden"
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    boxShadow: "0 20px 60px rgba(10, 10, 10, 0.08)",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
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

                                <div className="p-8 md:p-10">
                                    <div className="w-10 h-10 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center text-xs font-bold text-[#0A0A0A]/50 mb-6">
                                        {String(i + 1).padStart(2, "0")}
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
                                        Enquire Now -&gt;
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
