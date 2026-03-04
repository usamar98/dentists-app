"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";
import TextScramble from "../animations/TextScramble";

const serviceOptions = [
    { id: "general", title: "General Dentistry", icon: "🦷" },
    { id: "cosmetic", title: "Cosmetic Dentistry", icon: "✨" },
    { id: "implants", title: "Dental Implants", icon: "🔩" },
    { id: "orthodontics", title: "Orthodontics", icon: "😁" },
    { id: "emergency", title: "Emergency Dental", icon: "🚨" },
    { id: "ai-analysis", title: "AI Smile Analysis", icon: "🤖" },
];

const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Booking() {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState("");
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [form, setForm] = useState({ name: "", email: "", phone: "", concerns: "" });
    const [confirmed, setConfirmed] = useState(false);

    // Calendar: current month
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const monthName = now.toLocaleString("en-AU", { month: "long", year: "numeric" });

    const calendarDays = useMemo(() => {
        const firstDay = new Date(year, month, 1);
        let startDay = firstDay.getDay() - 1;
        if (startDay < 0) startDay = 6;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = now.getDate();

        const days: { day: number; available: boolean; past: boolean }[] = [];
        for (let i = 0; i < startDay; i++) {
            days.push({ day: 0, available: false, past: true });
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const dayOfWeek = new Date(year, month, d).getDay();
            const isPast = d < today;
            days.push({
                day: d,
                available: !isPast && dayOfWeek !== 0,
                past: isPast,
            });
        }
        return days;
    }, [year, month]);

    const serviceName = serviceOptions.find(s => s.id === selectedService)?.title || "";

    const handleConfirm = () => {
        setConfirmed(true);
    };

    const canProceed = (s: number) => {
        if (s === 1) return !!selectedService;
        if (s === 2) return selectedDate !== null && !!selectedTime;
        if (s === 3) return form.name && form.email && form.phone;
        return true;
    };

    const nextStep = () => {
        if (canProceed(step) && step < 4) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <section id="booking" className="py-24 md:py-32 bg-[#F5F5F5]">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#0A0A0A]/40 mb-4">
                        Book Online
                    </p>
                    <TextScramble
                        text="Book Your Visit in 60 Seconds"
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A]"
                        as="h2"
                    />
                </ScrollReveal>

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-3">
                        {["Service", "Date & Time", "Details", "Confirm"].map((label, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-500 ${step > i + 1
                                            ? "bg-[#0A0A0A] text-white"
                                            : step === i + 1
                                                ? "bg-[#0A0A0A] text-white"
                                                : "bg-[#E5E5E5] text-[#0A0A0A]/40"
                                        }`}
                                >
                                    {step > i + 1 ? "✓" : i + 1}
                                </div>
                                <span className="text-xs font-medium text-[#0A0A0A]/50 hidden sm:block">{label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#0A0A0A] rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((step - 1) / 3) * 100}%` }}
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                    </div>
                </div>

                {/* Steps */}
                <div className="bg-white rounded-3xl border border-[#0A0A0A]/[0.06] p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                    <AnimatePresence mode="wait">
                        {/* Step 1 */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
                                    Select a Service
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {serviceOptions.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => setSelectedService(s.id)}
                                            className={`p-5 rounded-xl border text-left transition-all duration-300 ${selectedService === s.id
                                                    ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                                                    : "bg-white text-[#0A0A0A] border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30"
                                                }`}
                                        >
                                            <span className="text-2xl mb-2 block">{s.icon}</span>
                                            <span className="text-sm font-medium">{s.title}</span>
                                            {selectedService === s.id && (
                                                <span className="block mt-1 text-xs opacity-70">✓ Selected</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
                                    Choose Date & Time
                                </h3>

                                {/* Calendar */}
                                <div className="mb-8">
                                    <p className="text-sm font-medium text-[#0A0A0A] mb-4">{monthName}</p>
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {daysOfWeek.map((d) => (
                                            <div key={d} className="text-center text-xs font-medium text-[#0A0A0A]/40 py-2">
                                                {d}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-7 gap-1">
                                        {calendarDays.map((d, i) => (
                                            <button
                                                key={i}
                                                disabled={!d.available || d.day === 0}
                                                onClick={() => d.available && setSelectedDate(d.day)}
                                                className={`aspect-square rounded-lg text-sm font-medium transition-all duration-200 ${d.day === 0
                                                        ? "invisible"
                                                        : selectedDate === d.day
                                                            ? "bg-[#0A0A0A] text-white"
                                                            : d.available
                                                                ? "hover:bg-[#F5F5F5] text-[#0A0A0A]"
                                                                : "text-[#0A0A0A]/20 cursor-not-allowed"
                                                    }`}
                                            >
                                                {d.day || ""}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Time Slots */}
                                {selectedDate && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <p className="text-sm font-medium text-[#0A0A0A] mb-3">Available Times</p>
                                        <div className="flex flex-wrap gap-2">
                                            {timeSlots.map((t, i) => {
                                                const unavailable = i === 3 || i === 7 || i === 11;
                                                return (
                                                    <button
                                                        key={t}
                                                        disabled={unavailable}
                                                        onClick={() => !unavailable && setSelectedTime(t)}
                                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedTime === t
                                                                ? "bg-[#0A0A0A] text-white"
                                                                : unavailable
                                                                    ? "bg-[#F5F5F5] text-[#0A0A0A]/20 cursor-not-allowed"
                                                                    : "bg-[#F5F5F5] text-[#0A0A0A] hover:bg-[#E5E5E5]"
                                                            }`}
                                                    >
                                                        {t}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
                                    Your Details
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Full Name</label>
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/40 focus:outline-none transition-colors text-sm"
                                            placeholder="John Smith"
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
                                                placeholder="john@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium text-[#0A0A0A]/60 mb-1.5 block">Phone</label>
                                            <input
                                                type="tel"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-[#0A0A0A]/10 focus:border-[#0A0A0A]/40 focus:outline-none transition-colors text-sm"
                                                placeholder="04XX XXX XXX"
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
                            </motion.div>
                        )}

                        {/* Step 4 */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {!confirmed ? (
                                    <>
                                        <h3 className="text-lg font-semibold text-[#0A0A0A] mb-6" style={{ fontFamily: "var(--font-jakarta)" }}>
                                            Confirm Your Booking
                                        </h3>
                                        <div className="bg-[#F5F5F5] rounded-2xl p-6 space-y-4 mb-8">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-[#0A0A0A]/50">Service</span>
                                                <span className="text-sm font-medium text-[#0A0A0A]">{serviceName}</span>
                                            </div>
                                            <div className="w-full h-[1px] bg-[#0A0A0A]/[0.06]" />
                                            <div className="flex justify-between">
                                                <span className="text-sm text-[#0A0A0A]/50">Date</span>
                                                <span className="text-sm font-medium text-[#0A0A0A]">
                                                    {selectedDate} {now.toLocaleString("en-AU", { month: "long" })} {year}
                                                </span>
                                            </div>
                                            <div className="w-full h-[1px] bg-[#0A0A0A]/[0.06]" />
                                            <div className="flex justify-between">
                                                <span className="text-sm text-[#0A0A0A]/50">Time</span>
                                                <span className="text-sm font-medium text-[#0A0A0A]">{selectedTime}</span>
                                            </div>
                                            <div className="w-full h-[1px] bg-[#0A0A0A]/[0.06]" />
                                            <div className="flex justify-between">
                                                <span className="text-sm text-[#0A0A0A]/50">Patient</span>
                                                <span className="text-sm font-medium text-[#0A0A0A]">{form.name}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleConfirm}
                                            className="w-full py-4 bg-[#0A0A0A] text-white text-sm font-semibold rounded-full hover:bg-[#333] transition-colors"
                                        >
                                            Confirm Booking
                                        </button>
                                        <p className="text-xs text-[#0A0A0A]/40 text-center mt-3">
                                            SMS & email reminders will be sent automatically
                                        </p>
                                    </>
                                ) : (
                                    <motion.div
                                        className="text-center py-8"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    >
                                        <motion.div
                                            className="w-20 h-20 rounded-full bg-[#0A0A0A] mx-auto mb-6 flex items-center justify-center"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: "spring" }}
                                        >
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <motion.polyline
                                                    points="20 6 9 17 4 12"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.5 }}
                                                />
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                                            Booking Confirmed!
                                        </h3>
                                        <p className="text-[#0A0A0A]/50 text-sm mb-6">
                                            Check your email for details. We look forward to seeing you!
                                        </p>
                                        <p className="text-xs text-[#0A0A0A]/30">
                                            SMS & email reminders will be sent automatically
                                        </p>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    {!confirmed && (
                        <div className="flex justify-between mt-8 pt-6 border-t border-[#0A0A0A]/[0.06]">
                            <button
                                onClick={prevStep}
                                className={`px-6 py-2.5 text-sm font-medium rounded-full border border-[#0A0A0A]/10 transition-colors ${step === 1 ? "opacity-0 pointer-events-none" : "hover:border-[#0A0A0A]/30"
                                    }`}
                            >
                                ← Back
                            </button>
                            {step < 4 && (
                                <button
                                    onClick={nextStep}
                                    disabled={!canProceed(step)}
                                    className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all ${canProceed(step)
                                            ? "bg-[#0A0A0A] text-white hover:bg-[#333]"
                                            : "bg-[#E5E5E5] text-[#0A0A0A]/30 cursor-not-allowed"
                                        }`}
                                >
                                    Next →
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
