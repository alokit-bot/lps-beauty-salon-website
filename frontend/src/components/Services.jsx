import React, { useState } from "react";
import { Phone } from "lucide-react";
import { SERVICE_CATEGORIES, BUSINESS } from "../data/salonData";

export default function Services() {
    const [active, setActive] = useState(SERVICE_CATEGORIES[0].id);
    const activeCat = SERVICE_CATEGORIES.find((c) => c.id === active);

    return (
        <section
            id="services"
            data-testid="services-section"
            className="relative py-24 md:py-32"
            style={{
                background:
                    "linear-gradient(180deg, #FFFAF8 0%, #FCE9E6 55%, #FFFAF8 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="max-w-3xl mb-14">
                    <span className="flourish font-script text-2xl">The Menu</span>
                    <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-[#2D2D2D]">
                        Services &{" "}
                        <em className="text-[#B76E79] italic">honest prices</em>
                    </h2>
                    <p className="mt-5 text-lg text-[#2D2D2D]/70 max-w-2xl">
                        Everything we do, priced clearly. Final rate depends on hair length,
                        product choice, and design complexity — we'll confirm before we start.
                    </p>
                </div>

                {/* Tabs */}
                <div
                    data-testid="service-tabs"
                    className="flex flex-wrap gap-2 sm:gap-3 mb-10 border-b border-[#B76E79]/15 pb-2"
                >
                    {SERVICE_CATEGORIES.map((c) => (
                        <button
                            key={c.id}
                            onClick={() => setActive(c.id)}
                            data-testid={`service-tab-${c.id}`}
                            className={`px-5 py-2.5 rounded-full text-sm sm:text-[15px] font-semibold transition-all ${
                                active === c.id
                                    ? "bg-[#B76E79] text-white shadow-[0_10px_24px_-10px_rgba(183,110,121,0.7)]"
                                    : "bg-white/70 text-[#2D2D2D]/70 hover:bg-white border border-[#B76E79]/15"
                            }`}
                        >
                            {c.title}
                        </button>
                    ))}
                </div>

                {/* Active category display */}
                <div
                    key={active}
                    className="grid lg:grid-cols-12 gap-10 animate-fade-up"
                    data-testid={`service-panel-${active}`}
                >
                    {/* Image + accent column */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-28 space-y-6">
                            <div className="relative rounded-[2rem] overflow-hidden h-[400px] border-8 border-white shadow-[0_30px_60px_-30px_rgba(183,110,121,0.45)]">
                                <img
                                    src={activeCat.image}
                                    alt={activeCat.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/50 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5 text-white">
                                    <span className="font-script text-xl text-[#F9D6D2]">
                                        {activeCat.accent}
                                    </span>
                                    <div className="font-serif text-3xl mt-1">
                                        {activeCat.title}
                                    </div>
                                </div>
                            </div>

                            <a
                                href={`tel:${BUSINESS.phoneDigits}`}
                                data-testid={`service-call-${active}`}
                                className="group flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-white hover:bg-[#B76E79] border border-[#B76E79]/20 transition-all text-[#2D2D2D] hover:text-white"
                            >
                                <div>
                                    <div className="text-xs uppercase tracking-[0.18em] opacity-70">
                                        Ask for this service
                                    </div>
                                    <div className="font-serif text-lg mt-0.5">
                                        Call {BUSINESS.phone}
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#FCE9E6] group-hover:bg-white text-[#B76E79] flex items-center justify-center transition-colors">
                                    <Phone size={16} />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Items list */}
                    <div className="lg:col-span-7">
                        <ul className="divide-y divide-[#B76E79]/12">
                            {activeCat.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    data-testid={`service-item-${active}-${idx}`}
                                    className="service-card group flex items-center justify-between gap-4 py-6 px-4 rounded-2xl border border-transparent hover:border-[#B76E79]/20 hover:bg-white"
                                >
                                    <div className="flex items-center gap-5 min-w-0">
                                        <span className="font-serif italic text-[#B76E79]/40 text-2xl w-10 shrink-0">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <div className="min-w-0">
                                            <div className="font-serif text-xl sm:text-2xl text-[#2D2D2D] truncate">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="price-chip px-4 py-2 rounded-full text-sm whitespace-nowrap">
                                        {item.price}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-8 text-sm text-[#2D2D2D]/55 italic">
                            * All prices in INR. Small add-ons (premium products, extra length,
                            custom art) may apply — always confirmed with you first.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
