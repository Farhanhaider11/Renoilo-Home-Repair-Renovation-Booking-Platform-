import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BookingSuccessPage() {
    return (
        <main className="min-h-screen bg-[#0f1113] px-6 py-20 lg:px-8">
            <section className="mx-auto flex max-w-5xl flex-col items-center rounded-[36px] border border-brand-border bg-[#171a1d] p-10 text-center shadow-soft lg:p-16">
                <div className="rounded-full bg-emerald-100 p-4 text-emerald-700">
                    <CheckCircle2 size={28} />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Booking confirmed</p>
                <h1 className="mt-3 text-4xl font-semibold text-slate-50 sm:text-5xl">Your repair request is on its way.</h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">A verified professional will contact you shortly to confirm the visit, timeline, and any final details.</p>

                <div className="mt-10 w-full max-w-2xl rounded-[28px] border border-brand-border bg-[#20252a] p-6 text-left shadow-sm">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>Booking reference</span>
                        <span className="font-semibold text-slate-100">RN-2048</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                        <span>Service</span>
                        <span className="font-semibold text-slate-100">Electrical Repair</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                        <span>Estimated arrival</span>
                        <span className="font-semibold text-slate-100">Within 24 hours</span>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <Link href="/my-bookings">
                        <Button>
                            View bookings <ArrowRight size={16} />
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="secondary">Back home</Button>
                    </Link>
                </div>

                <div className="mt-8 flex items-center gap-2 rounded-full border border-brand-border bg-[#20252a] px-4 py-2 text-sm text-slate-300">
                    <Sparkles size={16} className="text-brand-orange" />
                    This screen is ready for backend confirmation data.
                </div>
            </section>
        </main>
    );
}
