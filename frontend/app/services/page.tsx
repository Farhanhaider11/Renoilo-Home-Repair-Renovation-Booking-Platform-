import Link from 'next/link';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceGrid } from '@/components/sections/service-grid';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0f1113] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <section className="mx-auto flex max-w-7xl flex-col gap-8">
                <div className="rounded-[36px] border border-brand-border/80 bg-[#171a1d]/95 p-7 shadow-soft sm:p-8 lg:p-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Services</p>
                            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                                Premium repair services for every home upgrade.
                            </h1>
                            <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                                Choose from trusted specialists for repairs, maintenance, and thoughtful renovations, all arranged around your schedule.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                            <Link href="/booking" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-3 font-medium text-white transition hover:bg-[#fb923c] sm:w-auto lg:w-full">
                                Start booking <ArrowRight size={16} />
                            </Link>
                            <div className="flex items-center gap-2 rounded-full border border-brand-border bg-[#20252a] px-4 py-2 text-sm text-slate-300">
                                <BadgeCheck size={16} className="text-brand-orange" />
                                Verified professionals
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-brand-border/70 bg-[#20252a] p-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                                <ShieldCheck size={16} className="text-brand-orange" /> Flexible booking
                            </div>
                            <p className="mt-2 text-sm leading-7 text-slate-400">Choose a time that fits your routine.</p>
                        </div>
                        <div className="rounded-2xl border border-brand-border/70 bg-[#20252a] p-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                                <Sparkles size={16} className="text-brand-orange" /> Premium finish
                            </div>
                            <p className="mt-2 text-sm leading-7 text-slate-400">High-quality craftsmanship with calm coordination.</p>
                        </div>
                        <div className="rounded-2xl border border-brand-border/70 bg-[#20252a] p-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                                <BadgeCheck size={16} className="text-brand-orange" /> Trusted experts
                            </div>
                            <p className="mt-2 text-sm leading-7 text-slate-400">Every service is matched to seasoned professionals.</p>
                        </div>
                    </div>
                </div>

                <ServiceGrid />
            </section>
        </main>
    );
}
