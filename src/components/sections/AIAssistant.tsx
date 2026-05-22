"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

interface Message {
    role: "user" | "ai";
    text: string;
}

const preloadedConversation: Message[] = [
    { role: "user", text: "I have tooth pain and need an appointment." },
    {
        role: "ai",
        text: "I can help you contact the clinic. For urgent pain, tap Call or WhatsApp so the team can advise the next available visit.",
    },
    { role: "user", text: "Can I send a WhatsApp message?" },
    {
        role: "ai",
        text: "Yes. The WhatsApp enquiry assistant can collect your name, preferred time, and treatment concern.",
    },
];

const responses: Record<string, string> = {
    default:
        "Thanks for your enquiry. For the quickest response, call +679 700 1234 or continue through WhatsApp.",
    hello:
        "Bula! Welcome to SmileCraft Dental Fiji. I can help with appointments, opening hours, location, or service enquiries.",
    hi: "Bula! How can I help with your dental enquiry today?",
    cost: "Treatment costs depend on your needs. Please request a clinic quote before treatment begins.",
    price: "Treatment costs depend on your needs. Please request a clinic quote before treatment begins.",
    book: "To book, call +679 700 1234 or tap WhatsApp so the clinic can confirm a time.",
    appointment: "To book, call +679 700 1234 or tap WhatsApp so the clinic can confirm a time.",
    emergency: "For urgent dental pain, swelling, or a broken tooth, call +679 700 1234 or send a WhatsApp enquiry now.",
    hours: "Opening hours: Mon-Fri 8 AM - 5 PM, Sat 8 AM - 1 PM, Sun closed. Address: Central Suva, Fiji.",
    address: "Address: Central Suva, Fiji. This demo also highlights Suva, Nadi, and Lautoka service areas.",
};

function getAIResponse(input: string): string {
    const lower = input.toLowerCase();
    for (const [key, val] of Object.entries(responses)) {
        if (key !== "default" && lower.includes(key)) return val;
    }
    return responses.default;
}

const features = [
    {
        label: "For normal dentists",
        title: "WhatsApp enquiry assistant",
        desc: "Routes appointment, service, opening-hours, and location questions into a simple WhatsApp enquiry flow.",
    },
    {
        label: "For premium dentists",
        title: "AI patient enquiry demo",
        desc: "Shows a premium patient enquiry demo without presenting it as clinical advice.",
    },
    {
        label: "Human follow-up",
        title: "Clinic confirmation",
        desc: "Every enquiry can still go to clinic staff for confirmation before any appointment is final.",
    },
];

export default function AIAssistant() {
    const [messages, setMessages] = useState<Message[]>(preloadedConversation);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
        setIsTyping(true);

        setTimeout(() => {
            const response = getAIResponse(userMsg);
            setMessages((prev) => [...prev, { role: "ai", text: response }]);
            setIsTyping(false);
        }, 900);
    };

    return (
        <section id="ai-assistant" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Optional Enquiry Tool
                    </p>
                    <TextScramble
                        text="Assistant Options"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <p className="mt-4 max-w-2xl mx-auto text-[#0A0A0A]/50">
                        Keep the enquiry flow simple for standard clinics or add a premium AI patient enquiry demo.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {features.map((feature, i) => (
                            <ScrollReveal key={feature.title} delay={i * 0.1} direction="left">
                                <div className="p-5 rounded-2xl border border-[#0A0A0A]/[0.06] bg-white">
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#0A0A0A]/40 mb-2">{feature.label}</p>
                                    <h4
                                        className="text-sm font-semibold text-[#0A0A0A] mb-1"
                                        style={{ fontFamily: "var(--font-jakarta)" }}
                                    >
                                        {feature.title}
                                    </h4>
                                    <p className="text-xs text-[#0A0A0A]/50">{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal className="lg:col-span-8">
                        <div className="rounded-3xl border border-[#0A0A0A]/10 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                            <div className="px-6 py-4 border-b border-[#0A0A0A]/[0.06] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center text-white text-xs font-bold">
                                    AI
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>
                                        AI patient enquiry demo
                                    </p>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        <span className="text-xs text-[#0A0A0A]/40">Optional premium feature</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                ref={chatRef}
                                className="h-[400px] overflow-y-auto p-6 space-y-4 scroll-smooth"
                            >
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={i}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div
                                            className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                                    ? "bg-[#0A0A0A] text-white rounded-br-sm"
                                                    : "bg-[#F5F5F5] text-[#0A0A0A] rounded-bl-sm"
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-[#F5F5F5] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                                            <motion.span className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
                                            <motion.span className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
                                            <motion.span className="w-2 h-2 rounded-full bg-[#0A0A0A]/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="px-4 py-4 border-t border-[#0A0A0A]/[0.06]">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                        placeholder="Ask about appointments, hours, location..."
                                        className="flex-1 px-4 py-3 text-sm rounded-full border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/30 focus:outline-none transition-colors bg-transparent"
                                        aria-label="Type your message"
                                    />
                                    <button
                                        onClick={handleSend}
                                        className="px-5 py-3 bg-[#0A0A0A] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
                                        aria-label="Send message"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
