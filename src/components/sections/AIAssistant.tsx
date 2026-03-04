"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

interface Message {
    role: "user" | "ai";
    text: string;
}

const preloadedConversation: Message[] = [
    { role: "user", text: "I have a toothache on my lower left side" },
    {
        role: "ai",
        text: "I'm sorry to hear you're experiencing discomfort. A toothache in the lower left can have several causes, including tooth decay, a cracked tooth, or gum infection. I'd recommend booking an appointment with one of our dentists for a thorough examination. Would you like me to find the next available slot?",
    },
    { role: "user", text: "What does a root canal cost?" },
    {
        role: "ai",
        text: "A root canal at SmileCraft typically ranges from $800–$1,500 AUD depending on the tooth and complexity. We offer flexible payment plans starting from $25/week, and we accept all major health funds including Medibank, Bupa, HCF, and NIB. Shall I book a consultation?",
    },
];

const responses: Record<string, string> = {
    default:
        "Thank you for your question! I'd be happy to help. For the most accurate advice, I recommend booking a consultation with one of our expert dentists. Shall I find an available appointment for you?",
    hello:
        "Hello! Welcome to SmileCraft Dental. How can I help you today? I can assist with booking appointments, treatment information, or pricing enquiries.",
    hi: "Hi there! Welcome to SmileCraft Dental. How can I assist you today?",
    cost: "Our treatments range from $150 for a standard check-up to $5,000+ for implants. We offer flexible payment plans and accept all major health funds. Which treatment are you interested in?",
    price:
        "Our treatments range from $150 for a standard check-up to $5,000+ for implants. We offer flexible payment plans and accept all major health funds. Which treatment are you interested in?",
    whitening:
        "Professional teeth whitening at SmileCraft starts from $450 AUD for in-chair treatment. We also offer take-home kits from $250. Results can brighten your smile by up to 8 shades! Would you like to book?",
    implant:
        "Dental implants at SmileCraft range from $3,000–$5,500 AUD per tooth. This includes the implant, abutment, and crown. We offer interest-free payment plans. Shall I schedule a consultation?",
    invisalign:
        "Invisalign treatment at SmileCraft starts from $4,500 AUD. Treatment typically takes 6–18 months. We offer a free initial consultation to assess your suitability. Would you like to book one?",
    emergency:
        "We understand dental emergencies can't wait. SmileCraft offers same-day emergency appointments 7 days a week. Please call (02) 9XXX XXXX or I can book the next available emergency slot for you.",
    hours:
        "SmileCraft is open Monday–Friday 8am–7pm, and Saturday–Sunday 9am–4pm. We're located at 123 George Street, Sydney NSW 2000. Would you like to book a visit?",
    insurance:
        "We accept all major Australian health funds including Medibank, Bupa, HCF, NIB, CBHS, and more. We can process your claim on the spot with HICAPS. Would you like to check your coverage?",
    book: "I'd love to help you book! You can use our online booking system right here on the website, or I can find the next available appointment for you. What service are you interested in?",
    appointment:
        "I can help you book an appointment! We have availability this week. What service are you looking for, and do you have a preferred day or time?",
    pain: "I'm sorry you're in pain. Dental pain can indicate several conditions. I recommend seeing one of our dentists as soon as possible. We offer same-day emergency appointments. Shall I book one for you?",
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
        icon: "🕐",
        title: "24/7 Patient Support",
        desc: "AI handles enquiries even after hours",
    },
    {
        icon: "📅",
        title: "Smart Scheduling",
        desc: "AI finds the best available slot",
    },
    {
        icon: "💰",
        title: "Cost Estimates",
        desc: "Instant treatment pricing information",
    },
    {
        icon: "💬",
        title: "Post-Treatment Follow-ups",
        desc: "Automated care reminders",
    },
    {
        icon: "🏥",
        title: "Insurance Verification",
        desc: "Instant health fund checks",
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
        }, 1000 + Math.random() * 500);
    };

    return (
        <section id="ai-assistant" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-16 md:mb-20">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        AI Technology
                    </p>
                    <TextScramble
                        text="Meet Your AI Dental Assistant"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Feature Cards - Left */}
                    <div className="lg:col-span-3 hidden lg:flex flex-col gap-4">
                        {features.slice(0, 3).map((f, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="left">
                                <div className="p-5 rounded-2xl border border-[#0A0A0A]/[0.06] bg-white">
                                    <span className="text-2xl mb-3 block">{f.icon}</span>
                                    <h4
                                        className="text-sm font-semibold text-[#0A0A0A] mb-1"
                                        style={{ fontFamily: "var(--font-jakarta)" }}
                                    >
                                        {f.title}
                                    </h4>
                                    <p className="text-xs text-[#0A0A0A]/50">{f.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Chat Widget - Centre */}
                    <ScrollReveal className="lg:col-span-6">
                        <div className="rounded-3xl border border-[#0A0A0A]/10 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
                            {/* Chat Header */}
                            <div className="px-6 py-4 border-b border-[#0A0A0A]/[0.06] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#0A0A0A]" style={{ fontFamily: "var(--font-jakarta)" }}>
                                        SmileCraft AI
                                    </p>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        <span className="text-xs text-[#0A0A0A]/40">Online</span>
                                    </div>
                                </div>
                            </div>

                            {/* Messages */}
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

                            {/* Input */}
                            <div className="px-4 py-4 border-t border-[#0A0A0A]/[0.06]">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                        placeholder="Ask about treatments, pricing, bookings..."
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

                        {/* Powered by label */}
                        <div className="mt-4 text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F5] text-xs text-[#0A0A0A]/50">
                                ⚡ Powered by AI • Saves 20+ hours/week for your clinic
                            </span>
                        </div>
                    </ScrollReveal>

                    {/* Feature Cards - Right */}
                    <div className="lg:col-span-3 hidden lg:flex flex-col gap-4">
                        {features.slice(3).map((f, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="right">
                                <div className="p-5 rounded-2xl border border-[#0A0A0A]/[0.06] bg-white">
                                    <span className="text-2xl mb-3 block">{f.icon}</span>
                                    <h4
                                        className="text-sm font-semibold text-[#0A0A0A] mb-1"
                                        style={{ fontFamily: "var(--font-jakarta)" }}
                                    >
                                        {f.title}
                                    </h4>
                                    <p className="text-xs text-[#0A0A0A]/50">{f.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Mobile Features */}
                    <div className="lg:hidden col-span-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {features.map((f, i) => (
                            <ScrollReveal key={i} delay={i * 0.05}>
                                <div className="p-4 rounded-xl border border-[#0A0A0A]/[0.06] text-center">
                                    <span className="text-xl mb-2 block">{f.icon}</span>
                                    <h4 className="text-xs font-semibold text-[#0A0A0A] mb-0.5">{f.title}</h4>
                                    <p className="text-[10px] text-[#0A0A0A]/50">{f.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
