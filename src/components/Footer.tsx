"use client";

import { useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Orthodontic Enquiries",
    "Emergency Dentist in Fiji",
    "Family Dental Care",
];

const seoTerms = ["Dentist in Fiji", "Dental clinic in Suva", "Emergency dentist in Fiji", "Family dental care in Fiji"];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <footer className="bg-[#0A0A0A] text-white" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
                    <ScrollReveal>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/50 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li>Central Suva, Fiji</li>
                            <li>Serving Suva, Nadi, Lautoka</li>
                            <li>
                                <a href="tel:+6797001234" className="hover:text-white transition-colors">
                                    +679 700 1234
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/6797001234?text=I%20would%20like%20to%20make%20a%20dental%20enquiry" className="hover:text-white transition-colors">
                                    WhatsApp enquiry
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@smilecraftfiji.com" className="hover:text-white transition-colors">
                                    hello@smilecraftfiji.com
                                </a>
                            </li>
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Local SEO
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {seoTerms.map((term) => (
                                <a key={term} href="#contact" className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/50 hover:text-white transition-colors">
                                    {term}
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-white/50 mb-4">
                            Get Fiji dental care updates and clinic news.
                        </p>
                        {!subscribed ? (
                            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm focus:border-white/30 focus:outline-none transition-colors text-white placeholder:text-white/30"
                                    aria-label="Email for newsletter"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-3 bg-white text-[#0A0A0A] text-sm font-medium rounded-lg hover:bg-white/90 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        ) : (
                            <p className="text-sm text-white/70">
                                Thanks for subscribing.
                            </p>
                        )}
                    </ScrollReveal>
                </div>
            </div>

            <div className="border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        Copyright 2026 SmileCraft Dental Fiji. Demo content - replace licensing details with verified clinic information before launch.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                    <p className="text-xs text-white/20">
                        WhatsApp-ready dental website
                    </p>
                </div>
            </div>
        </footer>
    );
}
