'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0f1113] px-6 py-20">
            <div className="max-w-md rounded-[32px] border border-brand-border bg-[#171a1d] p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Unexpected issue</p>
                <h1 className="mt-3 text-2xl font-semibold text-slate-50">Something went wrong while loading this page.</h1>
                <p className="mt-3 text-sm leading-7 text-slate-400">The frontend can recover automatically. Try again in a moment.</p>
                <button onClick={() => reset()} className="mt-6 inline-flex rounded-full bg-brand-orange px-5 py-3 text-sm font-medium text-white">
                    Try again
                </button>
            </div>
        </main>
    );
}
