"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "user" | "ai";
    text: string;
}

const responses: Record<string, string> = {
    default:
        "Thank you for your question! I'd be happy to help. For the most accurate advice, I recommend booking a consultation with one of our expert dentists. Shall I find an available appointment for you?",
    hello:
        "Hello! Welcome to SmileCraft Dental. How can I help you today? I can assist with booking appointments, treatment information, or pricing enquiries.",
    hi: "Hi there! Welcome to SmileCraft. How may I assist you today?",
    cost: "Our treatments range from $150 for a standard check-up to $5,000+ for implants. We offer flexible payment plans and accept all major health funds including Medibank, Bupa, HCF, and NIB.",
    price: "Our treatments range from $150 for a standard check-up to $5,000+ for implants. We offer flexible payment plans with Afterpay and Zip available.",
    book: "I'd love to help you book! You can use our online booking system by scrolling to the booking section, or I can help you find the next available slot.",
    pain: "I'm sorry you're in pain. We offer same-day emergency appointments 7 days a week. Would you like me to help you book an urgent appointment?",
    whitening: "Professional teeth whitening starts from $450 AUD. Results can brighten your smile by up to 8 shades! Shall I book a consultation?",
    emergency: "For dental emergencies, we offer same-day appointments. Please call (02) 9000 1234 or use our online booking for the next available emergency slot.",
    hours: "We're open Monday–Friday 8am–7pm and Saturday–Sunday 9am–4pm at 123 George Street, Sydney.",
    insurance: "We accept all major health funds including Medibank, Bupa, HCF, NIB, and CBHS. We process claims instantly with HICAPS.",
};

function getResponse(input: string): string {
    const lower = input.toLowerCase();
    for (const [key, val] of Object.entries(responses)) {
        if (key !== "default" && lower.includes(key)) return val;
    }
    return responses.default;
}

export default function ChatPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([
        { role: "ai", text: "Hi! I'm the SmileCraft AI assistant. How can I help you today? 😊" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, { role: "user", text: input.trim() }]);
        const userInput = input.trim();
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            setMessages((prev) => [...prev, { role: "ai", text: getResponse(userInput) }]);
            setIsTyping(false);
        }, 800 + Math.random() * 600);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-[#0A0A0A]/10 overflow-hidden"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {/* Header */}
                    <div className="px-5 py-4 bg-[#0A0A0A] text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                                AI
                            </div>
                            <div>
                                <p className="text-sm font-semibold">SmileCraft AI</p>
                                <p className="text-[10px] text-white/50">Typically replies instantly</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-white/50 hover:text-white transition-colors" aria-label="Close chat">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={chatRef} className="h-[320px] overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "none" }}>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div
                                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${msg.role === "user"
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
                                <div className="bg-[#F5F5F5] px-3.5 py-2.5 rounded-2xl rounded-bl-sm flex gap-1">
                                    <motion.span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} />
                                    <motion.span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
                                    <motion.span className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]/30" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="px-4 py-3 border-t border-[#0A0A0A]/[0.06]">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Type a message..."
                                className="flex-1 px-3.5 py-2.5 text-sm rounded-full border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/30 focus:outline-none transition-colors"
                                aria-label="Chat message"
                            />
                            <button
                                onClick={handleSend}
                                className="w-10 h-10 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center hover:bg-[#333] transition-colors"
                                aria-label="Send"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
