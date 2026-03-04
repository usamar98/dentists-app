"use client";

import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const socials = [
    { name: "Instagram", icon: "IG" },
    { name: "Facebook", icon: "FB" },
    { name: "TikTok", icon: "TK" },
    { name: "Google", icon: "G" },
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
                        text="Visit Our Clinic"
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Contact Info */}
                    <ScrollReveal direction="left">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-[#0A0A0A]/40 mb-3">
                                    Address
                                </h3>
                                <p className="text-lg font-medium text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>
                                    123 George Street<br />
                                    Sydney NSW 2000
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-[#0A0A0A]/40 mb-3">
                                    Contact
                                </h3>
                                <p className="text-lg text-[#0A0A0A]">
                                    <a href="tel:+61290001234" className="hover:underline">(02) 9000 1234</a>
                                </p>
                                <p className="text-lg text-[#0A0A0A]">
                                    <a href="mailto:hello@smilecraftdental.com.au" className="hover:underline">
                                        hello@smilecraftdental.com.au
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-[#0A0A0A]/40 mb-3">
                                    Hours
                                </h3>
                                <div className="space-y-1 text-sm text-[#0A0A0A]/70">
                                    <div className="flex justify-between max-w-xs">
                                        <span>Monday – Friday</span>
                                        <span className="font-medium text-[#0A0A0A]">8:00 AM – 7:00 PM</span>
                                    </div>
                                    <div className="flex justify-between max-w-xs">
                                        <span>Saturday – Sunday</span>
                                        <span className="font-medium text-[#0A0A0A]">9:00 AM – 4:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.name}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-xs font-bold hover:bg-[#333] transition-colors"
                                        aria-label={s.name}
                                    >
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Google Maps Embed */}
                    <ScrollReveal direction="right">
                        <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[350px] rounded-2xl overflow-hidden border border-[#0A0A0A]/[0.06] shadow-lg shadow-black/5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.834040253791!2d151.20695871521096!3d-33.86539298065613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x6ee8a1f7bb5db71e!2s123%20George%20St%2C%20The%20Rocks%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: "350px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SmileCraft Dental Clinic Location - 123 George Street, Sydney"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
