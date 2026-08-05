import Link from 'next/link';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CheckoutCard() {
    return (
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-brand-border/80 bg-[#20252a] p-8 shadow-card">
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-brand-orange/10 p-3 text-brand-orange">
                        <ShieldCheck size={18} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Checkout</p>
                        <h2 className="text-2xl font-semibold text-slate-50">Secure booking summary</h2>
                    </div>
                </div>

                <div className="mt-8 rounded-[24px] border border-brand-border bg-[#171a1d] p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-400">Service</p>
                            <p className="mt-1 font-semibold text-slate-100">Electrical Repair</p>
                        </div>
                        <div className="rounded-full bg-[#20252a] px-3 py-2 text-sm font-semibold text-brand-orange">Premium</div>
                    </div>
                    <div className="mt-6 space-y-3 text-sm text-slate-400">
                        <div className="flex items-center justify-between"><span>Bedrooms</span><span className="font-medium text-slate-100">2</span></div>
                        <div className="flex items-center justify-between"><span>Bathrooms</span><span className="font-medium text-slate-100">1</span></div>
                        <div className="flex items-center justify-between"><span>Date</span><span className="font-medium text-slate-100">2026-08-12</span></div>
                        <div className="flex items-center justify-between"><span>Time slot</span><span className="font-medium text-slate-100">Morning</span></div>
                        <div className="flex items-center justify-between"><span>Repair Level</span><span className="font-medium text-slate-100">Standard</span></div>
                    </div>
                </div>

                <div className="mt-6 rounded-[24px] border border-brand-border bg-[#171a1d] p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">Payment</p>
                            <p className="mt-1 text-sm text-slate-400">Card ending in 4242</p>
                        </div>
                        <div className="rounded-full bg-brand-orange/10 p-2 text-brand-orange">
                            <Sparkles size={16} />
                        </div>
                    </div>
                    <div className="mt-4 rounded-2xl border border-dashed border-brand-border bg-[#20252a] px-4 py-3 text-sm text-slate-400">
                        Payment integration is intentionally left as a placeholder for the backend-ready flow.
                    </div>
                </div>
            </div>

            <div className="rounded-[32px] border border-brand-border/80 bg-[#171a1d] p-8 text-white shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Amount due</p>
                <p className="mt-4 text-4xl font-semibold">$240</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">A verified professional will confirm your booking shortly after payment is processed.</p>

                <div className="mt-8 space-y-4 rounded-[24px] border border-white/10 bg-white/10 p-5">
                    <div className="flex items-center justify-between text-sm"><span>Service fee</span><span>$180</span></div>
                    <div className="flex items-center justify-between text-sm"><span>Materials</span><span>$40</span></div>
                    <div className="flex items-center justify-between text-sm"><span>Tax</span><span>$20</span></div>
                    <div className="mt-4 h-px bg-white/10" />
                    <div className="flex items-center justify-between font-semibold"><span>Total</span><span>$240</span></div>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-[20px] border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                    <BadgeCheck size={16} />
                    Confirmation and receipt will be shared after checkout.
                </div>

                <div className="mt-8 flex flex-col gap-3">
                    <Link href="/booking/success">
                        <Button className="w-full justify-center bg-brand-orange text-white hover:bg-brand-orange/90">
                            Confirm booking <ArrowRight size={16} />
                        </Button>
                    </Link>
                    <Link href="/booking">
                        <Button variant="secondary" className="w-full justify-center border-white/20 bg-transparent text-white hover:bg-white/10">
                            Review details
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
