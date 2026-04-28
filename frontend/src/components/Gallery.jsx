import React from "react";
import { GALLERY } from "../data/salonData";

export default function Gallery() {
    return (
        <section
            id="gallery"
            data-testid="gallery-section"
            className="relative py-24 md:py-32"
            style={{
                background:
                    "linear-gradient(180deg, #FFFAF8 0%, #FCE9E6 100%)",
            }}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div>
                        <span className="flourish font-script text-2xl">A little peek</span>
                        <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-[#2D2D2D]">
                            From our <em className="italic text-[#B76E79]">chair</em> to yours.
                        </h2>
                    </div>
                    <p className="max-w-sm text-[#2D2D2D]/70 leading-relaxed">
                        A snapshot of recent work — hair, skin, and nails we're proud of.
                    </p>
                </div>

                {/* Asymmetric gallery grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {GALLERY.map((g, idx) => {
                        const spanClasses = [
                            "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full",
                            "aspect-[4/5]",
                            "aspect-[4/5]",
                            "col-span-2 aspect-[16/10]",
                            "aspect-[4/5]",
                            "aspect-[4/5]",
                        ];
                        return (
                            <figure
                                key={g.label}
                                data-testid={`gallery-item-${idx}`}
                                className={`group relative overflow-hidden rounded-2xl border border-white/60 shadow-[0_18px_40px_-20px_rgba(183,110,121,0.35)] ${spanClasses[idx] || ""}`}
                            >
                                <img
                                    src={g.image}
                                    alt={`${g.label} — work by LPS Beauty Salon`}
                                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                <figcaption className="absolute bottom-4 left-4 right-4 text-white">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs tracking-[0.16em] uppercase">
                                        {g.label}
                                    </span>
                                </figcaption>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
