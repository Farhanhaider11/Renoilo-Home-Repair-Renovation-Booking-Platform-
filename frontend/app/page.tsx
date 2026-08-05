'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useState } from 'react';
import { ArrowRight, BadgeCheck, CalendarDays, Hammer, Menu, ShieldCheck, Sparkles, X } from 'lucide-react';
import { motion } from 'framer-motion';
import type { AppRoute } from '@/types/routes';

const services = [
    'Electrical Repair',
    'Plumbing',
    'Painting',
    'Carpentry',
    'AC Repair',
    'Kitchen Repair',
];

const steps = [
    'Choose a service',
    'Share your space details',
    'Book a verified pro',
];

const navLinks: Array<{ href: AppRoute; label: string }> = [
    { href: '/services', label: 'Services' },
    { href: '/booking', label: 'Book' },
    { href: '/login', label: 'Login' },
];

export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <main id="main-content" className="min-h-screen bg-transparent">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white/10 focus:px-4 focus:py-2 focus:text-sm focus:text-slate-50">
                Skip to content
            </a>

            <section className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 lg:gap-10">
                <nav className="rounded-full border border-brand-border/80 bg-[#171a1d]/90 px-3 py-3 shadow-card backdrop-blur-sm sm:px-4">
                    <div className="flex items-center justify-between gap-3">
                        <Link href="/" className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white">
                                R
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-50">Renoilo</p>
                                <p className="text-xs text-slate-400">Premium home repairs</p>
                            </div>
                        </Link>

                        <div className="hidden items-center gap-4 text-sm font-medium text-slate-300 md:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href as Route}
                                    className={link.href === '/login' ? 'rounded-full border border-brand-border px-4 py-2 transition hover:border-brand-orange hover:text-brand-orange' : 'transition hover:text-white'}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-[#20252a] text-slate-100 transition hover:border-brand-orange hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 md:hidden"
                            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-nav"
                            onClick={() => setIsMobileMenuOpen((value) => !value)}
                        >
                            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>

                    {isMobileMenuOpen ? (
                        <div id="mobile-nav" className="mt-3 flex flex-col gap-2 border-t border-brand-border/70 pt-3 md:hidden">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href as Route}
                                    className="rounded-2xl border border-brand-border/70 bg-[#20252a] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-brand-orange hover:text-brand-orange"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </nav>

                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-3 py-2 text-sm font-medium text-brand-orange">
                            <Sparkles size={16} /> Trusted repair experts for every home upgrade
                        </div>

                        <div className="space-y-5">
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                                Premium home repair, reimagined.
                            </h1>
                            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                                Book vetted professionals for electrical, plumbing, carpentry, renovation, and maintenance work with a seamless experience from discovery to delivery.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link href={'/booking' as Route} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 font-medium text-white transition hover:bg-[#fb923c] sm:w-auto">
                                Book a repair <ArrowRight size={18} />
                            </Link>
                            <Link href={'/services' as Route} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-border bg-[#171a1d] px-5 py-3 font-medium text-slate-100 transition hover:border-brand-orange hover:text-brand-orange sm:w-auto">
                                Explore services
                            </Link>
                        </div>

                        <div className="grid gap-3 pt-2 sm:grid-cols-3">
                            <div className="rounded-2xl border border-brand-border/70 bg-[#171a1d]/80 p-4">
                                <p className="text-2xl font-semibold text-slate-50">24/7</p>
                                <p className="mt-1 text-sm text-slate-400">Flexible support</p>
                            </div>
                            <div className="rounded-2xl border border-brand-border/70 bg-[#171a1d]/80 p-4">
                                <p className="text-2xl font-semibold text-slate-50">4.9/5</p>
                                <p className="mt-1 text-sm text-slate-400">Client satisfaction</p>
                            </div>
                            <div className="rounded-2xl border border-brand-border/70 bg-[#171a1d]/80 p-4">
                                <p className="text-2xl font-semibold text-slate-50">100%</p>
                                <p className="mt-1 text-sm text-slate-400">Verified experts</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45 }} className="rounded-[32px] border border-brand-border/80 bg-[#20252a]/90 p-5 shadow-soft sm:p-8">
                        <div className="rounded-[24px] border border-brand-border/70 bg-[#171a1d] p-5 shadow-sm sm:p-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-medium text-slate-400">Next available</p>
                                    <p className="mt-1 text-xl font-semibold text-slate-50">Today · 4:30 PM</p>
                                </div>
                                <div className="rounded-full bg-emerald-500/10 p-3 text-emerald-400">
                                    <BadgeCheck size={20} />
                                </div>
                            </div>

                            <div className="mt-6 space-y-3">
                                {services.slice(0, 4).map((service) => (
                                    <div key={service} className="flex items-center justify-between rounded-2xl border border-brand-border/70 bg-[#171a1d] px-4 py-3">
                                        <span className="font-medium text-slate-100">{service}</span>
                                        <span className="text-sm text-slate-400">Verified team</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl border border-brand-border/70 bg-[#20252a] p-4 text-sm text-slate-400">
                                <p className="font-medium text-slate-200">Why customers choose Renoilo</p>
                                <p className="mt-2 leading-7">Clear pricing, verified experts, and a calm booking journey built for modern homes.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="how-it-works" className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">How it works</p>
                        <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">A calm, guided booking journey.</h2>
                    </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={step} className="rounded-[24px] border border-brand-border bg-[#20252a] p-6 shadow-card transition hover:-translate-y-0.5">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-sm font-semibold text-white">
                                0{index + 1}
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-slate-50">{step}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-400">A polished flow designed around the existing booking model and premium service expectations.</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="why-renoilo" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
                <div className="rounded-[32px] border border-brand-border/80 bg-[#1d2125]/90 p-7 text-white shadow-soft sm:p-10">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Why Renoilo</p>
                            <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">Elegance meets trust for every home project.</h2>
                            <p className="mt-4 text-base leading-8 text-slate-300">From urgent fixes to full renovations, Renoilo combines premium design with dependable service execution.</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                                <div className="flex items-center gap-2 text-sm font-medium"><ShieldCheck size={16} /> Verified professionals</div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                                <div className="flex items-center gap-2 text-sm font-medium"><CalendarDays size={16} /> Flexible scheduling</div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                                <div className="flex items-center gap-2 text-sm font-medium"><Hammer size={16} /> Full-service support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
