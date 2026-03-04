"use client";

export default function Marquee() {
    const text =
        "GENTLE CARE • MODERN TECHNOLOGY • BEAUTIFUL SMILES • TRUSTED BY 15,000+ AUSTRALIANS • AI-POWERED DIAGNOSTICS • ";

    return (
        <section className="bg-[#0A0A0A] py-5 overflow-hidden" aria-label="Features marquee">
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
