"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: "user" | "ai";
    text: string;
}

const responses: Record<string, string> = {
    default:
        "Thanks for your message. For the quickest reply, call +679 700 1234 or continue through WhatsApp.",
    hello:
        "Bula! Welcome to SmileCraft Dental Fiji. I can help with appointments, services, opening hours, or location.",
    hi: "Bula! How can I help with your dental enquiry today?",
    cost: "Treatment costs depend on your needs. Please request a clinic quote before treatment begins.",
    price: "Treatment costs depend on your needs. Please request a clinic quote before treatment begins.",
    book: "To book, call +679 700 1234 or tap WhatsApp so the clinic can confirm a time.",
    appointment: "To book, call +679 700 1234 or tap WhatsApp so the clinic can confirm a time.",
    pain: "For urgent dental pain, swelling, or a broken tooth, call +679 700 1234 or send a WhatsApp enquiry now.",
    emergency: "For urgent dental pain, swelling, or a broken tooth, call +679 700 1234 or send a WhatsApp enquiry now.",
    hours: "Opening hours: Mon-Fri 8 AM - 5 PM, Sat 8 AM - 1 PM, Sun closed.",
    address: "Address: Central Suva, Fiji. We also highlight enquiries from Suva, Nadi, and Lautoka.",
    location: "Address: Central Suva, Fiji. Use the Google Maps section for directions.",
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
        { role: "ai", text: "Bula! I am the WhatsApp enquiry assistant. How can we help?" },
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
        }, 800);
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
                    <div className="px-5 py-4 bg-[#0A0A0A] text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                                WA
                            </div>
                            <div>
                                <p className="text-sm font-semibold">WhatsApp enquiry assistant</p>
                                <p className="text-[10px] text-white/50">Routes enquiries to clinic staff</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-white/50 hover:text-white transition-colors" aria-label="Close chat">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

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
                        <a
                            href="https://wa.me/6797001234?text=I%20would%20like%20to%20make%20a%20dental%20enquiry"
                            className="mt-3 flex items-center justify-center rounded-full border border-[#0A0A0A]/10 py-2 text-xs font-medium text-[#0A0A0A] hover:border-[#0A0A0A]/30 transition-colors"
                        >
                            Continue on WhatsApp
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
