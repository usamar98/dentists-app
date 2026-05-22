"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const faqs = [
    {
        q: "Where is the clinic located?",
        a: "This Fiji demo uses a Central Suva address and highlights service areas in Suva, Nadi, Lautoka, and nearby Fiji communities. Update it with the clinic's exact address before launch.",
    },
    {
        q: "How can patients make an enquiry?",
        a: "Patients can tap the WhatsApp button, call the clinic, use the booking form, or view the Google Maps location from the contact section.",
    },
    {
        q: "Do you handle emergency dental enquiries?",
        a: "Yes. The page includes emergency dentist in Fiji messaging and fast call or WhatsApp actions for tooth pain, swelling, broken teeth, or urgent dental concerns.",
    },
    {
        q: "How are treatment costs handled?",
        a: "Costs depend on the treatment and patient needs. This demo directs patients to request a clinic quote before treatment begins.",
    },
    {
        q: "Is this suitable for family dental care?",
        a: "Yes. The content is positioned for family dental care in Fiji, including check-ups, preventive care, children's visits, and general treatment enquiries.",
    },
    {
        q: "Can real doctor profiles be added later?",
        a: "Yes. The team section uses placeholders until the clinic provides approved names, qualifications, photos, and registration details.",
    },
    {
        q: "Can the enquiry assistant be optional?",
        a: "Yes. Normal dentist websites can use a WhatsApp enquiry assistant, while premium websites can show an AI patient enquiry demo.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 md:py-32 bg-white">
            <div className="max-w-3xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Common Questions
                    </p>
                    <TextScramble
                        text="Frequently Asked Questions"
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                </ScrollReveal>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={faq.q} delay={i * 0.05}>
                            <div className="border border-[#0A0A0A]/[0.06] rounded-2xl overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    aria-expanded={openIndex === i}
                                    aria-controls={`faq-answer-${i}`}
                                >
                                    <span className="text-sm md:text-base font-medium text-[#0A0A0A] pr-4" style={{ fontFamily: "var(--font-jakarta)" }}>
                                        {faq.q}
                                    </span>
                                    <motion.span
                                        className="flex-shrink-0 text-[#0A0A0A]/40"
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            id={`faq-answer-${i}`}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 text-sm text-[#0A0A0A]/60 leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
