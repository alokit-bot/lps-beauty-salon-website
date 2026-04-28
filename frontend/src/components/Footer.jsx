import React from "react";
import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";
import { BUSINESS } from "../data/salonData";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative bg-[#2D2D2D] text-[#FFFAF8] pt-20 pb-10 overflow-hidden"
        >
            <div className="absolute -top-10 -right-20 w-[300px] h-[300px] rounded-full bg-[#B76E79]/20 blur-3xl" />
            <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
                <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            <span className="font-serif italic text-4xl text-[#F9D6D2]">LPS</span>
                            <span className="w-px h-8 bg-white/20" />
                            <span className="text-[11px] uppercase tracking-[0.22em] text-[#FFFAF8]/70 font-medium">
                                Beauty & Nail Art
                            </span>
                        </div>
                        <p className="mt-5 font-script text-2xl text-[#F9D6D2]">
                            Your beauty, our passion.
                        </p>
                        <p className="mt-4 text-[#FFFAF8]/60 text-sm max-w-sm leading-relaxed">
                            {BUSINESS.tagline}. Hair, skin, nails and bridal looks — handled with
                            warmth, hygiene, and zero rush.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <div className="text-xs uppercase tracking-[0.2em] text-[#F9D6D2]/80 mb-4">
                            Visit
                        </div>
                        <a
                            href={BUSINESS.mapsLink}
                            target="_blank"
                            rel="noreferrer"
                            data-testid="footer-address"
                            className="flex items-start gap-3 text-[#FFFAF8]/80 hover:text-white transition-colors text-sm leading-relaxed"
                        >
                            <MapPin size={16} className="mt-0.5 shrink-0 text-[#F9D6D2]" />
                            <span>{BUSINESS.address}</span>
                        </a>
                        <div className="mt-4 text-xs text-[#FFFAF8]/60">
                            {BUSINESS.hoursText}
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <div className="text-xs uppercase tracking-[0.2em] text-[#F9D6D2]/80 mb-4">
                            Reach out
                        </div>
                        <div className="space-y-3">
                            <a
                                href={`tel:${BUSINESS.phoneDigits}`}
                                data-testid="footer-call"
                                className="flex items-center gap-3 text-lg font-serif hover:text-[#F9D6D2] transition-colors"
                            >
                                <Phone size={16} className="text-[#F9D6D2]" />
                                {BUSINESS.phone}
                            </a>
                            <a
                                href={`https://wa.me/${BUSINESS.whatsappDigits}`}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="footer-whatsapp"
                                className="flex items-center gap-3 text-sm text-[#FFFAF8]/80 hover:text-white transition-colors"
                            >
                                <MessageCircle size={15} className="text-[#F9D6D2]" />
                                WhatsApp us
                            </a>
                            <a
                                href={`https://www.instagram.com/`}
                                target="_blank"
                                rel="noreferrer"
                                data-testid="footer-instagram"
                                className="flex items-center gap-3 text-sm text-[#FFFAF8]/80 hover:text-white transition-colors"
                            >
                                <Instagram size={15} className="text-[#F9D6D2]" />
                                Follow our work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#FFFAF8]/45">
                    <div>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</div>
                    <div className="font-script text-sm text-[#F9D6D2]/70">
                        Handcrafted with care in Bengaluru
                    </div>
                </div>
            </div>
        </footer>
    );
}
