"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const team = [
    {
        name: "Dr. Sarah Williams",
        title: "Principal Dentist",
        bio: "With over 20 years of experience, Dr. Williams leads our team with a passion for excellence and patient-centred care.",
        image: "/images/doctor-sarah.png",
    },
    {
        name: "Dr. Michael Chang",
        title: "Cosmetic Specialist",
        bio: "A pioneer in cosmetic dentistry, Dr. Chang has transformed thousands of smiles with veneers, whitening, and makeovers.",
        image: "/images/doctor-michael.png",
    },
    {
        name: "Dr. Aisha Patel",
        title: "Orthodontist",
        bio: "Dr. Patel specialises in Invisalign and modern orthodontics, making straighter smiles accessible for all ages.",
        image: "/images/doctor-aisha.png",
    },
    {
        name: "Dr. James Morrison",
        title: "Oral Surgeon",
        bio: "Fellowship-trained oral surgeon with expertise in implants, wisdom teeth, and complex surgical procedures.",
        image: "/images/doctor-james.png",
    },
];

export default function Team() {
    return (
        <section id="team" className="py-24 md:py-32 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Our Professionals
                    </p>
                    <TextScramble
                        text="Meet Our Experts"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <motion.div
                                className="group rounded-2xl overflow-hidden bg-white border border-[#0A0A0A]/[0.06] cursor-pointer"
                                whileHover={{ y: -6 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {/* Team Member Image */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />

                                    {/* Hover overlay with bio */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-6">
                                        <p className="text-white/90 text-xs leading-relaxed">{member.bio}</p>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3
                                        className="text-base font-semibold text-[#0A0A0A] mb-1"
                                        style={{ fontFamily: "var(--font-jakarta)" }}
                                    >
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-[#0A0A0A]/50">{member.title}</p>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
