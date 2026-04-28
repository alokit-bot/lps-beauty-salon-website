import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "../data/salonData";

const NAV = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="site-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#FFFAF8]/80 border-b border-[#B76E79]/10 py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
                <a href="#top" data-testid="logo-link" className="flex items-center gap-2 group">
                    <span className="font-serif text-2xl sm:text-[26px] italic text-[#B76E79] leading-none">
                        LPS
                    </span>
                    <span className="hidden sm:block w-px h-6 bg-[#B76E79]/30" />
                    <span className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-[#2D2D2D]/70 font-medium">
                        Beauty & Nail Art
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-9">
                    {NAV.map((n) => (
                        <a
                            key={n.href}
                            href={n.href}
                            data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                            className="text-[13px] uppercase tracking-[0.18em] text-[#2D2D2D]/80 hover:text-[#B76E79] link-underline transition-colors"
                        >
                            {n.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href={`tel:${BUSINESS.phoneDigits}`}
                        data-testid="navbar-call-btn"
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full cta-gleam text-white text-sm font-semibold shadow-[0_10px_30px_-12px_rgba(183,110,121,0.6)]"
                    >
                        <Phone size={15} strokeWidth={2.2} />
                        Call to Book
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        data-testid="mobile-menu-toggle"
                        className="lg:hidden p-2 rounded-full border border-[#B76E79]/20 text-[#B76E79] bg-white/70"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="lg:hidden absolute top-full left-0 right-0 bg-[#FFFAF8] border-t border-[#B76E79]/10 shadow-lg animate-fade-up"
                >
                    <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-4">
                        {NAV.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setOpen(false)}
                                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                                className="text-[#2D2D2D] text-base font-medium py-2 border-b border-[#B76E79]/10 flex items-center justify-between"
                            >
                                <span>{n.label}</span>
                                <span className="text-[#B76E79] text-xs">→</span>
                            </a>
                        ))}
                        <a
                            href={`tel:${BUSINESS.phoneDigits}`}
                            onClick={() => setOpen(false)}
                            data-testid="mobile-call-btn"
                            className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full cta-gleam text-white font-semibold"
                        >
                            <Phone size={16} /> Call {BUSINESS.phone}
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
