"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const faqs = [
    {
        q: "What health funds do you accept?",
        a: "We accept all major Australian health funds including Medibank, Bupa, HCF, NIB, CBHS, Teachers Health, and many more. We have HICAPS on-site for instant claims processing, so you only pay the gap on the day.",
    },
    {
        q: "How does the AI dental assistant work?",
        a: "Our AI assistant uses advanced natural language processing to understand your dental concerns, provide preliminary information, and help schedule appointments. It's available 24/7 through our website and can answer questions about treatments, pricing, and availability. It's designed to supplement — not replace — our expert clinical team.",
    },
    {
        q: "Is the online booking system real-time?",
        a: "Yes! Our booking system shows live availability and confirms your appointment instantly. You'll receive an email and SMS confirmation, along with automated reminders before your visit. You can also reschedule or cancel online up to 24 hours before your appointment.",
    },
    {
        q: "Do you offer payment plans?",
        a: "Absolutely. We understand dental care is an investment. We offer interest-free payment plans starting from $25/week through our partnership with Afterpay and Zip. We also provide custom payment arrangements for larger treatments like implants and orthodontics.",
    },
    {
        q: "What COVID-safe measures are in place?",
        a: "Patient safety is our top priority. We follow all ADA guidelines including enhanced sterilisation protocols, HEPA air filtration, PPE for all staff, pre-appointment screening, and reduced waiting room capacity. Our clinic undergoes regular deep cleaning and all equipment is sterilised between patients.",
    },
    {
        q: "How do I prepare for my first visit?",
        a: "Please arrive 10 minutes early to complete any paperwork. Bring your health fund card, photo ID, and any relevant dental records or X-rays from previous dentists. If you have dental anxiety, let us know when booking — we have special measures to ensure your comfort, including sedation options.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                        <ScrollReveal key={i} delay={i * 0.05}>
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
