import React from "react";
import { Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { BUSINESS } from "../data/salonData";

const DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

export default function Contact() {
    const todayIdx = (new Date().getDay() + 6) % 7; // Monday = 0

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-24 md:py-32 bg-[#FFFAF8]"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div className="grid lg:grid-cols-12 gap-10 items-start">
                    {/* Left: Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="flourish font-script text-2xl">Come say hi</span>
                            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05] text-[#2D2D2D]">
                                Visit us in{" "}
                                <em className="italic text-[#B76E79]">BTM Layout</em>.
                            </h2>
                            <p className="mt-5 text-[#2D2D2D]/70 leading-relaxed">
                                Walk-ins welcome, but a quick call ahead helps us keep your
                                favourite stylist free.
                            </p>
                        </div>

                        {/* Info blocks */}
                        <div className="space-y-4">
                            <InfoBlock
                                icon={<Phone size={18} />}
                                label="Call us"
                                testid="contact-phone"
                                href={`tel:${BUSINESS.phoneDigits}`}
                                value={BUSINESS.phone}
                                cta="Tap to dial"
                            />
                            <InfoBlock
                                icon={<MapPin size={18} />}
                                label="Find us"
                                testid="contact-address"
                                href={BUSINESS.mapsLink}
                                value={BUSINESS.address}
                                cta="Get directions"
                                external
                            />
                            <InfoBlock
                                icon={<MessageCircle size={18} />}
                                label="WhatsApp"
                                testid="contact-whatsapp"
                                href={`https://wa.me/${BUSINESS.whatsappDigits}?text=${encodeURIComponent(
                                    "Hi LPS Beauty Salon, I'd like to book an appointment.",
                                )}`}
                                value="Chat with us"
                                cta="Message us"
                                external
                            />
                        </div>

                        {/* Hours */}
                        <div className="p-6 rounded-3xl bg-white border border-[#B76E79]/15">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#FCE9E6] text-[#B76E79] flex items-center justify-center">
                                    <Clock size={16} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-[#2D2D2D]/60">
                                        Opening hours
                                    </div>
                                    <div className="font-serif text-xl text-[#2D2D2D]">
                                        Open every day
                                    </div>
                                </div>
                            </div>
                            <ul className="space-y-2 text-sm">
                                {DAYS.map((d, i) => (
                                    <li
                                        key={d}
                                        className={`flex justify-between py-1.5 border-b border-[#B76E79]/10 last:border-0 ${
                                            i === todayIdx
                                                ? "text-[#B76E79] font-semibold"
                                                : "text-[#2D2D2D]/75"
                                        }`}
                                    >
                                        <span>
                                            {d}
                                            {i === todayIdx && (
                                                <span className="ml-2 text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#FCE9E6]">
                                                    Today
                                                </span>
                                            )}
                                        </span>
                                        <span>10:00 AM – 9:00 PM</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="lg:col-span-7 lg:sticky lg:top-28">
                        <div
                            data-testid="map-embed-container"
                            className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-[0_30px_80px_-30px_rgba(183,110,121,0.4)] h-[380px] sm:h-[520px]"
                        >
                            <iframe
                                title="LPS Beauty Salon Location"
                                src={BUSINESS.mapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <a
                                href={BUSINESS.mapsLink}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="maps-open-btn"
                                className="absolute bottom-5 right-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#2D2D2D] font-semibold text-sm shadow-lg hover:bg-[#B76E79] hover:text-white transition-colors"
                            >
                                <Navigation size={15} />
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoBlock({ icon, label, value, cta, href, external, testid }) {
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            data-testid={testid}
            className="group flex items-start gap-4 p-5 rounded-2xl border border-[#B76E79]/15 bg-white hover:border-[#B76E79]/40 hover:-translate-y-0.5 transition-all"
        >
            <div className="w-11 h-11 rounded-full bg-[#FCE9E6] text-[#B76E79] flex items-center justify-center shrink-0 group-hover:bg-[#B76E79] group-hover:text-white transition-colors">
                {icon}
            </div>
            <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.18em] text-[#2D2D2D]/55">
                    {label}
                </div>
                <div className="font-serif text-lg text-[#2D2D2D] mt-0.5 leading-snug">
                    {value}
                </div>
                <div className="text-xs text-[#B76E79] mt-1.5 opacity-80 group-hover:opacity-100">
                    {cta} →
                </div>
            </div>
        </a>
    );
}
