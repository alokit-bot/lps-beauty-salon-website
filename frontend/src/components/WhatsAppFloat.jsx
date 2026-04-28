import React from "react";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "../data/salonData";

export default function WhatsAppFloat() {
    const msg = encodeURIComponent(
        "Hi LPS Beauty Salon, I'd like to book an appointment.",
    );
    return (
        <a
            href={`https://wa.me/${BUSINESS.whatsappDigits}?text=${msg}`}
            target="_blank"
            rel="noreferrer"
            data-testid="whatsapp-float-btn"
            aria-label="Chat with LPS Beauty Salon on WhatsApp"
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 group"
        >
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-pulse-ring" />
                <div className="relative w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_12px_30px_-8px_rgba(34,197,94,0.6)] group-hover:scale-105 transition-transform">
                    <MessageCircle size={24} strokeWidth={2} />
                </div>
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-full bg-[#2D2D2D] text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Chat on WhatsApp
                </span>
            </div>
        </a>
    );
}
