"use client";

export default function Marquee() {
    const text =
        "DENTIST IN FIJI - DENTAL CLINIC IN SUVA - EMERGENCY DENTIST IN FIJI - FAMILY DENTAL CARE IN FIJI - WHATSAPP ENQUIRIES - ";

    return (
        <section className="bg-[#0A0A0A] py-5 overflow-hidden" aria-label="Local SEO phrases">
            <div className="marquee-track">
                {[...Array(4)].map((_, i) => (
                    <span
                        key={i}
                        className="text-white/90 text-sm md:text-base font-medium tracking-[0.2em] whitespace-nowrap px-2"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        {text}
                    </span>
                ))}
            </div>
        </section>
    );
}
