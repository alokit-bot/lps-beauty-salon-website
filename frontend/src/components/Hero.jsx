import React from "react";
import { Phone, Star, MapPin, Sparkles } from "lucide-react";
import { BUSINESS } from "../data/salonData";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden grain"
            style={{
                background:
                    "radial-gradient(1200px 600px at 85% -10%, #F9D6D2 0%, transparent 60%), radial-gradient(900px 500px at 10% 110%, #FCE9E6 0%, transparent 60%), #FFFAF8",
            }}
        >
            {/* Decorative SVG arcs */}
            <svg
                className="absolute top-20 right-[-80px] w-[340px] h-[340px] opacity-40 animate-float"
                viewBox="0 0 200 200"
                aria-hidden
            >
                <circle cx="100" cy="100" r="80" fill="none" stroke="#B76E79" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#B76E79" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#B76E79" strokeWidth="0.5" />
            </svg>
            <svg
                className="absolute bottom-10 left-[-60px] w-[260px] h-[260px] opacity-50"
                viewBox="0 0 200 200"
                aria-hidden
            >
                <path
                    d="M30 100 Q100 20 170 100 Q100 180 30 100"
                    fill="none"
                    stroke="#B76E79"
                    strokeWidth="0.6"
                />
            </svg>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-12 gap-12 items-center">
                {/* Text side */}
                <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-[#B76E79]/20 backdrop-blur-sm mb-8">
                        <Star size={14} className="fill-[#D4A574] text-[#D4A574]" />
                        <span className="text-[12px] tracking-[0.14em] uppercase text-[#2D2D2D]/80 font-semibold">
                            {BUSINESS.rating}★ · {BUSINESS.reviewCount}+ Google Reviews
                        </span>
                    </div>

                    <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-[5.2rem] leading-[1.02] text-[#2D2D2D] tracking-tight">
                        Your beauty,
                        <br />
                        <span className="italic text-[#B76E79]">our passion.</span>
                        <span className="font-script text-3xl sm:text-4xl lg:text-5xl ml-3 text-[#D4A574] align-top">
                            ♡
                        </span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg sm:text-xl text-[#2D2D2D]/75 leading-relaxed">
                        A warm, women-loved salon tucked into BTM Layout — where careful hands look
                        after your hair, skin, and nails like it's their own. Walk in stressed,
                        float out glowing.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <a
                            href={`tel:${BUSINESS.phoneDigits}`}
                            data-testid="hero-book-btn"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full cta-gleam text-white font-semibold text-base shadow-[0_18px_40px_-12px_rgba(183,110,121,0.55)] animate-pulse-ring"
                        >
                            <Phone size={18} strokeWidth={2.2} />
                            Book Your Appointment
                            <span className="w-6 h-px bg-white/70 group-hover:w-10 transition-all duration-300" />
                        </a>
                        <a
                            href="#services"
                            data-testid="hero-services-btn"
                            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#B76E79]/40 text-[#2D2D2D] hover:bg-white/80 transition-all font-medium"
                        >
                            <Sparkles size={16} className="text-[#B76E79]" />
                            View Services & Prices
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#2D2D2D]/70">
                        <div className="flex items-center gap-2">
                            <MapPin size={15} className="text-[#B76E79]" />
                            <span>BTM Layout 2nd Stage, Bengaluru</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            <span>Open today · 10 AM – 9 PM</span>
                        </div>
                    </div>
                </div>

                {/* Image collage side */}
                <div
                    className="lg:col-span-5 relative h-[480px] sm:h-[560px] animate-fade-up"
                    style={{ animationDelay: "0.3s" }}
                >
                    {/* Main image */}
                    <div className="absolute top-0 right-0 w-[78%] h-[62%] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-30px_rgba(183,110,121,0.4)] border-8 border-white rotate-1">
                        <img
                            src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&auto=format&fit=crop&q=80"
                            alt="Woman receiving a hair treatment at LPS Beauty Salon"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>

                    {/* Secondary image */}
                    <div className="absolute bottom-0 left-0 w-[62%] h-[52%] rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-25px_rgba(183,110,121,0.45)] border-8 border-white -rotate-2">
                        <img
                            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&auto=format&fit=crop&q=80"
                            alt="Detailed nail art design"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>

                    {/* Floating rating pill */}
                    <div className="absolute bottom-6 right-4 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#B76E79]/10 animate-float">
                        <div className="flex items-center gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    size={14}
                                    className="fill-[#D4A574] text-[#D4A574]"
                                />
                            ))}
                        </div>
                        <div className="text-xs text-[#2D2D2D]/60 uppercase tracking-wider">
                            Loved by
                        </div>
                        <div className="font-serif text-2xl text-[#B76E79] leading-none">
                            316+ <span className="text-sm">clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
