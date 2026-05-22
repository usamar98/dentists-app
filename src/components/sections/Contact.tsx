"use client";

import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const whatsappHref = "https://wa.me/6797001234?text=I%20would%20like%20to%20book%20a%20dental%20appointment";
const mapsHref = "https://www.google.com/maps/search/?api=1&query=Central%20Suva%2C%20Fiji";

const socials = [
    { name: "WhatsApp", icon: "WA", href: whatsappHref },
    { name: "Instagram", icon: "IG", href: "#" },
    { name: "Google Maps", icon: "GM", href: mapsHref },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Get In Touch
                    </p>
                    <TextScramble
                        text="Contact SmileCraft Fiji"
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <p className="mt-4 text-[#0A0A0A]/50">
                        Call, WhatsApp, or find the clinic on Google Maps.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <ScrollReveal direction="left">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-[#0A0A0A]/40 mb-3">
                                    Address
                                </h3>
                                <p className="text-lg font-medium text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>
                                    Address: Central Suva, Fiji<br />
                                    Serving Suva, Nadi, Lautoka
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-[#0A0A0A]/40 mb-3">
                                    Contact
                                </h3>
                                <p className="text-lg text-[#0A0A0A]">
                                    <a href="tel:+6797001234" className="hover:underline">+679 700 1234</a>
                                </p>
                                <p className="text-lg text-[#0A0A0A]">
                                    <a href="mailto:hello@smilecraftfiji.com" className="hover:underline">
                                        hello@smilecraftfiji.com
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-[#0A0A0A]/40 mb-3">
                                    Opening Hours
                                </h3>
                                <div className="space-y-1 text-sm text-[#0A0A0A]/70">
                                    <div className="flex justify-between max-w-xs">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium text-[#0A0A0A]">8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between max-w-xs">
                                        <span>Saturday</span>
                                        <span className="font-medium text-[#0A0A0A]">8:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="flex justify-between max-w-xs">
                                        <span>Sunday</span>
                                        <span className="font-medium text-[#0A0A0A]">Closed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href={whatsappHref} className="px-6 py-3 bg-[#0A0A0A] text-white text-sm font-medium rounded-full text-center hover:bg-[#333] transition-colors">
                                    WhatsApp
                                </a>
                                <a href="tel:+6797001234" className="px-6 py-3 border border-[#0A0A0A]/20 text-[#0A0A0A] text-sm font-medium rounded-full text-center hover:border-[#0A0A0A] transition-colors">
                                    Call
                                </a>
                            </div>

                            <div className="flex gap-3">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-xs font-bold hover:bg-[#333] transition-colors"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[350px] rounded-2xl overflow-hidden border border-[#0A0A0A]/[0.06] shadow-lg shadow-black/5">
                            <iframe
                                src="https://www.google.com/maps?q=Central%20Suva%2C%20Fiji&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "350px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SmileCraft Fiji Google Maps"
                            />
                            <div className="absolute left-4 top-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#0A0A0A]/10 px-4 py-3 shadow-lg shadow-black/5">
                                <p className="text-sm font-semibold text-[#0A0A0A]">Google Maps</p>
                                <p className="text-xs text-[#0A0A0A]/50">Central Suva, Fiji</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
