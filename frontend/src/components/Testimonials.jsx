import React from "react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/salonData";

export default function Testimonials() {
    return (
        <section
            id="reviews"
            data-testid="testimonials-section"
            className="relative py-24 md:py-32 bg-[#FFFAF8]"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
                    <div className="lg:col-span-7">
                        <span className="flourish font-script text-2xl">What clients say</span>
                        <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-[#2D2D2D]">
                            Real words from{" "}
                            <em className="italic text-[#B76E79]">real neighbours</em>.
                        </h2>
                    </div>
                    <div className="lg:col-span-5 text-[#2D2D2D]/70 text-lg leading-relaxed">
                        A few of the sweet notes we've received — from first-time visitors to
                        brides who trusted us with their biggest day.
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, idx) => (
                        <article
                            key={idx}
                            data-testid={`testimonial-${idx}`}
                            className="service-card relative p-8 rounded-3xl bg-white border border-[#B76E79]/15 flex flex-col"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <Quote
                                size={36}
                                className="text-[#F9D6D2]"
                                strokeWidth={1.4}
                            />
                            <div className="flex items-center gap-1 mt-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="fill-[#D4A574] text-[#D4A574]"
                                    />
                                ))}
                            </div>
                            <p className="mt-5 text-[#2D2D2D]/85 leading-relaxed text-[15px] flex-1">
                                "{t.text}"
                            </p>
                            <div className="mt-7 pt-6 border-t border-[#B76E79]/10 flex items-center gap-4">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#B76E79] to-[#F9D6D2] text-white flex items-center justify-center font-serif text-lg">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-serif text-lg text-[#2D2D2D] leading-tight">
                                        {t.name}
                                    </div>
                                    <div className="text-xs text-[#2D2D2D]/55 mt-0.5">
                                        {t.service} · {t.locale}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
