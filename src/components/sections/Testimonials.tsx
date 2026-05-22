"use client";

import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const testimonials = [
    {
        title: "Family Dental Care",
        image: "/images/general-dentistry.png",
        quote:
            "The team made the booking process simple, explained each step clearly, and helped us feel comfortable from the first enquiry.",
        detail: "Sample family care testimonial",
    },
    {
        title: "Emergency Dental Enquiry",
        image: "/images/emergency-dental.png",
        quote:
            "I could call or send a WhatsApp message quickly, which made it easier to ask about tooth pain and the next available appointment.",
        detail: "Sample emergency care testimonial",
    },
    {
        title: "Cosmetic Dentistry",
        image: "/images/cosmetic-dentistry.png",
        quote:
            "The consultation felt professional and calm. I understood the available options before deciding what treatment to discuss next.",
        detail: "Sample cosmetic care testimonial",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Patient Stories
                    </p>
                    <TextScramble
                        text="Professional Testimonials"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <p className="mt-4 max-w-2xl mx-auto text-[#0A0A0A]/50">
                        Sample testimonials for demo only. Replace with approved patient reviews before launch.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <ScrollReveal key={testimonial.title} delay={i * 0.1}>
                            <article className="group h-full rounded-3xl border border-[#0A0A0A]/[0.06] bg-white overflow-hidden shadow-[0_12px_40px_rgba(10,10,10,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(10,10,10,0.08)]">
                                <div className="relative aspect-[16/11] overflow-hidden bg-[#F5F5F5]">
                                    <Image
                                        src={testimonial.image}
                                        alt={`${testimonial.title} sample testimonial image`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0A0A0A]/60">
                                        Demo Only
                                    </span>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white text-lg font-semibold" style={{ fontFamily: "var(--font-jakarta)" }}>
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 md:p-7 flex flex-col">
                                    <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/35">
                                        Sample Review
                                    </p>
                                    <blockquote className="text-base text-[#0A0A0A]/75 leading-relaxed mb-6">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div className="mt-auto pt-5 border-t border-[#0A0A0A]/[0.06]">
                                        <p className="text-sm font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>
                                            Sample testimonial for demo only
                                        </p>
                                        <p className="text-xs text-[#0A0A0A]/40 mt-1">{testimonial.detail}</p>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
