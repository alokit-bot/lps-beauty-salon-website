import React from "react";
import { Star, Scissors, Sparkles, HeartHandshake } from "lucide-react";
import { WHY_US, BUSINESS } from "../data/salonData";

const ICONS = { Star, Scissors, Sparkles, HeartHandshake };

export default function WhyUs() {
    return (
        <section
            id="why"
            data-testid="why-us-section"
            className="relative py-24 md:py-32 bg-[#2D2D2D] text-[#FFFAF8] overflow-hidden"
        >
            {/* Decorative */}
            <svg
                className="absolute -top-20 -right-20 w-[420px] h-[420px] opacity-10"
                viewBox="0 0 200 200"
            >
                <circle cx="100" cy="100" r="90" fill="none" stroke="#B76E79" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#B76E79" strokeWidth="0.6" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="#B76E79" strokeWidth="0.6" />
            </svg>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
                <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
                    <div className="lg:col-span-7">
                        <span className="flourish font-script text-2xl text-[#F9D6D2]">
                            Why neighbours choose us
                        </span>
                        <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05]">
                            Small details.
                            <br />
                            <em className="text-[#F9D6D2] italic">Big difference.</em>
                        </h2>
                    </div>
                    <div className="lg:col-span-5 text-[#FFFAF8]/75 text-lg leading-relaxed">
                        Hundreds of repeat clients don't happen by accident. Here's what we quietly
                        obsess over, every single day.
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {WHY_US.map((w, idx) => {
                        const Icon = ICONS[w.icon];
                        return (
                            <div
                                key={w.title}
                                data-testid={`why-us-card-${idx}`}
                                className="group relative p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#B76E79]/20 text-[#F9D6D2] flex items-center justify-center mb-6 group-hover:bg-[#B76E79] group-hover:text-white transition-colors">
                                    <Icon size={20} strokeWidth={1.8} />
                                </div>
                                <div className="font-serif text-2xl text-[#FFFAF8] leading-tight">
                                    {w.title}
                                </div>
                                <div className="mt-2 text-sm text-[#FFFAF8]/60">{w.sub}</div>
                                <span className="absolute top-6 right-6 font-serif italic text-white/10 text-3xl">
                                    0{idx + 1}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Stats row */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
                    <Stat value="4.8★" label="Google rating" />
                    <Stat value={`${BUSINESS.reviewCount}+`} label="Client reviews" />
                    <Stat value="11hrs" label="Open daily" />
                    <Stat value="20+" label="Signature services" />
                </div>
            </div>
        </section>
    );
}

function Stat({ value, label }) {
    return (
        <div data-testid={`stat-${label.toLowerCase().replace(/\s/g, "-")}`}>
            <div className="font-serif text-4xl sm:text-5xl text-[#F9D6D2]">{value}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#FFFAF8]/60">
                {label}
            </div>
        </div>
    );
}
