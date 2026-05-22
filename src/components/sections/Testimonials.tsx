"use client";

import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Patient Stories
                    </p>
                    <TextScramble
                        text="Testimonials"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <p className="mt-4 max-w-2xl mx-auto text-[#0A0A0A]/50">
                        Replace this demo section with verified patient feedback after clinic approval.
                    </p>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="max-w-3xl mx-auto rounded-3xl border border-[#0A0A0A]/[0.06] bg-[#F5F5F5] p-8 md:p-12 text-center">
                        <p className="text-2xl md:text-3xl font-bold text-[#0A0A0A] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
                            Sample testimonials for demo only.
                        </p>
                        <p className="text-sm md:text-base text-[#0A0A0A]/60 leading-relaxed">
                            This section is ready for Google review excerpts, patient stories, or clinic-approved testimonials once the client provides them.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
