import { BookingForm } from '@/components/booking/booking-form';

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-[#0f1113] px-6 py-20 lg:px-8">
            <section className="mx-auto max-w-7xl space-y-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Booking</p>
                    <h1 className="mt-4 text-4xl font-semibold text-slate-50 sm:text-5xl">Book your repair with confidence.</h1>
                    <p className="mt-4 text-lg leading-8 text-slate-400">A premium, step-by-step experience that keeps the booking structure ready for the existing backend contract.</p>
                </div>

                <BookingForm />
            </section>
        </main>
    );
}
