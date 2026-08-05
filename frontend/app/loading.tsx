export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0f1113] px-6 py-20">
            <div className="rounded-[32px] border border-brand-border bg-[#171a1d] px-8 py-10 text-center">
                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-brand-orange border-t-transparent" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Loading experience</p>
                <p className="mt-2 text-sm text-slate-400">Preparing your booking workspace…</p>
            </div>
        </main>
    );
}
