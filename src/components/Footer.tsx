"use client";

import { useState } from "react";
import ScrollReveal from "./animations/ScrollReveal";

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
                    {/* Quick Links */}
                    <ScrollReveal>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {["Home", "Services", "About Us", "Our Team", "FAQ", "Contact"].map(
                                (link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                                            className="text-sm text-white/50 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </ScrollReveal>

                    {/* Services */}
                    <ScrollReveal delay={0.1}>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "General Dentistry",
                                "Cosmetic Dentistry",
                                "Dental Implants",
                                "Orthodontics",
                                "Emergency Care",
                                "AI Smile Analysis",
                            ].map((s) => (
                                <li key={s}>
                                    <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    {/* Contact */}
                    <ScrollReveal delay={0.2}>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-white/50">
                            <li>123 George Street</li>
                            <li>Sydney NSW 2000</li>
                            <li>
                                <a href="tel:+61290001234" className="hover:text-white transition-colors">
                                    (02) 9000 1234
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@smilecraftdental.com.au" className="hover:text-white transition-colors">
                                    hello@smilecraftdental.com.au
                                </a>
                            </li>
                        </ul>
                    </ScrollReveal>

                    {/* Newsletter */}
                    <ScrollReveal delay={0.3}>
                        <h4
                            className="text-sm font-semibold mb-6 tracking-wider"
                            style={{ fontFamily: "var(--font-jakarta)" }}
                        >
                            Newsletter
                        </h4>
                        <p className="text-sm text-white/50 mb-4">
                            Get dental tips and exclusive offers delivered to your inbox.
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
                                ✓ Thanks for subscribing!
                            </p>
                        )}
                    </ScrollReveal>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/30">
                        © 2025 SmileCraft Dental. All rights reserved.
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
                        Website powered by AI Technology
                    </p>
                </div>
            </div>
        </footer>
    );
}
