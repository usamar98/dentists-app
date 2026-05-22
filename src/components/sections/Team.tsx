"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const team = [
    {
        role: "Lead Dentist",
        bio: "Placeholder profile for general dentistry, treatment planning, and patient consultations.",
        image: "/images/doctor-sarah.png",
    },
    {
        role: "Family Dental Clinician",
        bio: "Placeholder profile for family check-ups, preventive care, and child-friendly visits.",
        image: "/images/doctor-aisha.png",
    },
    {
        role: "Cosmetic Dentistry Clinician",
        bio: "Placeholder profile for whitening, veneers, bonding, and smile enhancement enquiries.",
        image: "/images/doctor-michael.png",
    },
    {
        role: "Emergency Care Contact",
        bio: "Placeholder profile for tooth pain, swelling, broken teeth, and urgent visit enquiries.",
        image: "/images/doctor-james.png",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-24 md:py-32 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Dental Team
                    </p>
                    <TextScramble
                        text="Clinic Team Placeholders"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <p className="mt-4 max-w-2xl mx-auto text-[#0A0A0A]/50">
                        Add real doctor names, qualifications, and photos only after the Fiji clinic provides approved details.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <ScrollReveal key={member.role} delay={i * 0.1}>
                            <motion.div
                                className="group rounded-2xl overflow-hidden bg-white border border-[#0A0A0A]/[0.06] cursor-pointer"
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={`${member.role} placeholder`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-6">
                                        <p className="text-white/90 text-xs leading-relaxed">{member.bio}</p>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3
                                        className="text-base font-semibold text-[#0A0A0A] mb-1"
                                        style={{ fontFamily: "var(--font-jakarta)" }}
                                    >
                                        {member.role}
                                    </h3>
                                    <p className="text-sm text-[#0A0A0A]/50">Fiji dental clinic team</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
