"use client";

import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Filter, Search, Sparkles, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockBookings = [
    {
        id: 1,
        reference: 'RN-2048',
        service: 'Electrical Repair',
        date: '2026-08-12',
        status: 'Confirmed',
        amount: '$240',
    },
    {
        id: 2,
        reference: 'RN-2051',
        service: 'Plumbing',
        date: '2026-08-18',
        status: 'Pending',
        amount: '$180',
    },
    {
        id: 3,
        reference: 'RN-2055',
        service: 'Painting',
        date: '2026-08-24',
        status: 'Cancelled',
        amount: '$320',
    },
];

export default function MyBookingsPage() {
    const [bookings, setBookings] = useState(mockBookings);
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState<'All' | 'Confirmed' | 'Pending' | 'Cancelled'>('All');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = window.setTimeout(() => setLoading(false), 700);
        return () => window.clearTimeout(timer);
    }, []);

    const filteredBookings = useMemo(() => {
        const normalized = query.toLowerCase();
        return bookings.filter((booking) => {
            const matchesQuery = [booking.reference, booking.service, booking.status].some((value) => value.toLowerCase().includes(normalized));
            const matchesFilter = filter === 'All' || booking.status === filter;
            return matchesQuery && matchesFilter;
        });
    }, [bookings, filter, query]);

    const pageSize = 2;
    const totalPages = Math.max(1, Math.ceil(filteredBookings.length / pageSize));
    const paginated = filteredBookings.slice((page - 1) * pageSize, page * pageSize);

    useEffect(() => {
        setPage(1);
    }, [query, filter]);

    const handleCancel = (id: number) => {
        setBookings((current) => current.map((booking) => (booking.id === id ? { ...booking, status: 'Cancelled' } : booking)));
    };

    return (
        <main className="min-h-screen bg-[#0f1113] px-6 py-20 lg:px-8">
            <section className="mx-auto max-w-6xl rounded-[36px] border border-brand-border bg-[#171a1d] p-8 shadow-soft lg:p-12">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">My Bookings</p>
                        <h1 className="mt-3 text-4xl font-semibold text-slate-50">Your repair dashboard.</h1>
                        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">Stay on top of every booking, from confirmation to completion and cancellation.</p>
                    </div>
                    <div className="rounded-full border border-brand-border bg-[#20252a] px-4 py-2 text-sm text-slate-300">
                        <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange" />{bookings.length} active records
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 rounded-[28px] border border-brand-border bg-[#20252a] p-4 lg:flex-row lg:items-center lg:justify-between">
                    <label className="flex flex-1 items-center gap-3 rounded-2xl border border-brand-border bg-[#171a1d] px-4 py-3">
                        <Search size={16} className="text-slate-400" />
                        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by reference or service" className="w-full bg-transparent text-sm text-slate-100 outline-none" />
                    </label>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 rounded-2xl border border-brand-border bg-[#171a1d] px-3 py-2 text-sm text-slate-300">
                            <Filter size={16} className="text-brand-orange" />
                            <select value={filter} onChange={(event) => setFilter(event.target.value as 'All' | 'Confirmed' | 'Pending' | 'Cancelled')} className="bg-transparent outline-none">
                                <option value="All">All</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Pending">Pending</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="mt-8 flex items-center justify-center rounded-[24px] border border-brand-border bg-[#20252a] px-6 py-14 text-slate-300">
                        <div className="flex flex-col items-center gap-3">
                            <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-orange border-t-transparent" />
                            <p>Loading your bookings…</p>
                        </div>
                    </div>
                ) : filteredBookings.length === 0 ? (
                    <div className="mt-8 rounded-[24px] border border-dashed border-brand-border bg-[#20252a] p-10 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                            <Sparkles size={20} />
                        </div>
                        <h2 className="mt-4 text-xl font-semibold text-slate-50">No bookings match your filters.</h2>
                        <p className="mt-2 text-sm leading-7 text-slate-400">Try a wider search or reset the status filter to see more results.</p>
                    </div>
                ) : (
                    <div className="mt-8 space-y-4">
                        {paginated.map((booking) => (
                            <article key={booking.id} className="rounded-[24px] border border-brand-border bg-[#20252a] p-5 lg:flex lg:items-center lg:justify-between">
                                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
                                    <div className="rounded-2xl bg-[#171a1d] p-3 text-brand-orange">
                                        <CalendarDays size={18} />
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h2 className="text-lg font-semibold text-slate-50">{booking.service}</h2>
                                            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${booking.status === 'Confirmed' ? 'bg-emerald-500/15 text-emerald-300' : booking.status === 'Pending' ? 'bg-amber-500/15 text-amber-300' : 'bg-red-500/15 text-red-300'}`}>
                                                {booking.status}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm text-slate-400">Reference {booking.reference} • {booking.date}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-4 lg:mt-0">
                                    <div className="text-right">
                                        <p className="text-sm text-slate-400">Amount</p>
                                        <p className="text-lg font-semibold text-slate-50">{booking.amount}</p>
                                    </div>
                                    {booking.status !== 'Cancelled' ? (
                                        <Button variant="secondary" onClick={() => handleCancel(booking.id)} className="border-red-500/20 text-red-300 hover:border-red-400 hover:text-red-200">
                                            <XCircle size={16} /> Cancel
                                        </Button>
                                    ) : null}
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {!loading && filteredBookings.length > 0 ? (
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-slate-400">Page {page} of {totalPages}</p>
                        <div className="flex items-center gap-2">
                            <Button variant="secondary" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1}>Previous</Button>
                            <Button variant="secondary" onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages}>Next</Button>
                        </div>
                    </div>
                ) : null}
            </section>
        </main>
    );
}
