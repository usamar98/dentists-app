"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const serviceOptions = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Orthodontic Enquiries",
    "Emergency Dental Care",
    "WhatsApp Enquiry",
];

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

export default function Booking() {
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [form, setForm] = useState({ name: "", email: "", phone: "", concerns: "" });
    const [confirmed, setConfirmed] = useState(false);

    const canConfirm = service && date && time && form.name && form.phone;

    return (
        <section id="booking" className="py-24 md:py-32 bg-[#F5F5F5]">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Book Online
                    </p>
                    <TextScramble
                        text="Book Your Dental Visit"
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                    <p className="mt-4 text-[#0A0A0A]/50">
                        Choose a service, preferred time, and contact details for clinic follow-up.
                    </p>
                </ScrollReveal>

                <div className="bg-white rounded-3xl border border-[#0A0A0A]/[0.06] p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <AnimatePresence mode="wait">
                        {!confirmed ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0A0A0A] mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
                                        Select a Service
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {serviceOptions.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => setService(option)}
                                                className={`p-4 rounded-xl border text-left transition-all duration-300 ${service === option
                                                        ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                                                        : "bg-white text-[#0A0A0A] border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30"
                                                    }`}
                                            >
                                                <span className="text-sm font-medium">{option}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Preferred Date</label>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/40 focus:outline-none transition-colors text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Preferred Time</label>
                                        <div className="flex flex-wrap gap-2">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot}
                                                    onClick={() => setTime(slot)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${time === slot
                                                            ? "bg-[#0A0A0A] text-white"
                                                            : "bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E5E5]"
                                                        }`}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Full Name</label>
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/40 focus:outline-none transition-colors text-sm"
                                            placeholder="Full name"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Email</label>
                                            <input
                                                type="email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/40 focus:outline-none transition-colors text-sm"
                                                placeholder="name@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Phone or WhatsApp</label>
                                            <input
                                                type="tel"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/40 focus:outline-none transition-colors text-sm"
                                                placeholder="+679 7XX XXXX"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Any concerns? (Optional)</label>
                                        <textarea
                                            value={form.concerns}
                                            onChange={(e) => setForm({ ...form, concerns: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/40 focus:outline-none transition-colors text-sm resize-none h-24"
                                            placeholder="Tell us about any dental concerns..."
                                        />
                                    </div>
                                </div>

                                <div className="bg-[#F5F5F5] rounded-2xl p-5 text-sm text-[#0A0A0A]/60">
                                    <p><strong className="text-[#0A0A0A]">Service:</strong> {service || "Not selected"}</p>
                                    <p><strong className="text-[#0A0A0A]">Date:</strong> {date || "Not selected"}</p>
                                    <p><strong className="text-[#0A0A0A]">Time:</strong> {time || "Not selected"}</p>
                                </div>

                                <button
                                    onClick={() => canConfirm && setConfirmed(true)}
                                    disabled={!canConfirm}
                                    className={`w-full py-4 text-sm font-semibold rounded-full transition-colors ${canConfirm
                                            ? "bg-[#0A0A0A] text-white hover:bg-[#333]"
                                            : "bg-[#E5E5E5] text-[#0A0A0A]/30 cursor-not-allowed"
                                        }`}
                                >
                                    Confirm Enquiry
                                </button>
                                <p className="text-xs text-[#0A0A0A]/40 text-center">
                                    The clinic can confirm by phone or WhatsApp.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="confirmed"
                                className="text-center py-8"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
                                <div className="w-20 h-20 rounded-full bg-[#0A0A0A] mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                                    OK
                                </div>
                                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                                    Enquiry Received
                                </h3>
                                <p className="text-[#0A0A0A]/50 text-sm mb-6">
                                    Thank you, {form.name}. The clinic can confirm by phone or WhatsApp.
                                </p>
                                <button
                                    onClick={() => {
                                        setConfirmed(false);
                                        setService("");
                                        setDate("");
                                        setTime("");
                                        setForm({ name: "", email: "", phone: "", concerns: "" });
                                    }}
                                    className="px-6 py-3 border border-[#0A0A0A]/10 rounded-full text-sm font-medium text-[#0A0A0A] hover:border-[#0A0A0A]/30 transition-colors"
                                >
                                    Send Another Enquiry
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
