import React from "react";
import { Heart, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "../data/salonData";

export default function About() {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 md:py-32 bg-[#FFFAF8]"
        >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <span className="flourish font-script text-2xl mb-6">Hello, lovely</span>
                        <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-[#2D2D2D]">
                            Your neighbourhood
                            <br />
                            <em className="text-[#B76E79] not-italic font-medium">
                                <span className="italic">beauty home</span>
                            </em>
                            <br />
                            in BTM Layout.
                        </h2>
                    </div>

                    <div className="lg:col-span-7 space-y-6 text-lg leading-[1.8] text-[#2D2D2D]/80">
                        <p>
                            <span className="font-serif text-3xl text-[#B76E79] float-left mr-3 mt-1 leading-none">
                                L
                            </span>
                            PS Beauty Salon & Nail Art Studio started with a simple idea — that
                            every woman deserves a calm corner in the city where she can exhale and
                            leave feeling a little more herself. Tucked in the lanes of BTM Layout
                            2nd Stage, we are the salon your friend tells you about.
                        </p>
                        <p>
                            From a fresh trim before that date, to bridal trials, balayage,
                            hand-painted nail art and melt-into-the-chair facials — our trained
                            team handles every service with warmth, hygiene, and zero rush. No
                            overselling, no judgment. Just honest advice and work we are proud of.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 pt-4">
                            <InfoChip
                                icon={<Heart size={16} />}
                                title="Women-loved"
                                sub="Warm, judgement-free"
                            />
                            <InfoChip
                                icon={<MapPin size={16} />}
                                title="BTM Layout"
                                sub="2nd Stage, Bengaluru"
                            />
                            <InfoChip
                                icon={<Clock size={16} />}
                                title="Open daily"
                                sub="10 AM – 9 PM"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoChip({ icon, title, sub }) {
    return (
        <div className="group flex items-start gap-3 p-4 rounded-2xl border border-[#B76E79]/15 bg-white/60 hover:bg-white transition-all hover:-translate-y-0.5">
            <div className="w-9 h-9 rounded-full bg-[#FCE9E6] text-[#B76E79] flex items-center justify-center shrink-0">
                {icon}
            </div>
            <div>
                <div className="font-serif text-lg text-[#2D2D2D]">{title}</div>
                <div className="text-sm text-[#2D2D2D]/60">{sub}</div>
            </div>
        </div>
    );
}
