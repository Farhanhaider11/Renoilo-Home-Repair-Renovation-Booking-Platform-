import { CheckoutCard } from '@/components/checkout/checkout-card';

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-[#0f1113] px-6 py-20 lg:px-8">
            <section className="mx-auto max-w-7xl space-y-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Checkout</p>
                    <h1 className="mt-4 text-4xl font-semibold text-slate-50 sm:text-5xl">Complete your booking in seconds.</h1>
                    <p className="mt-4 text-lg leading-8 text-slate-400">The experience is tailored for a premium repair experience with clear transparency and trusted confirmation.</p>
                </div>

                <CheckoutCard />
            </section>
        </main>
    );
}
