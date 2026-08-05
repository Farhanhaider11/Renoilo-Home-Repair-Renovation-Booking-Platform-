import Link from 'next/link';
import { ArrowRight, Bell, Home, MapPin, ShieldCheck, UserRound, Sparkles, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-[#0f1113] px-6 py-20 lg:px-8">
            <section className="mx-auto max-w-7xl space-y-8">
                <div className="rounded-[36px] border border-brand-border bg-[#171a1d] p-8 shadow-soft sm:p-10 lg:p-14">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-white">
                                <UserRound size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Profile</p>
                                <h1 className="mt-2 text-3xl font-semibold text-slate-50">Ava Carter</h1>
                                <p className="mt-2 text-sm text-slate-400">Premium member · 3 active bookings</p>
                            </div>
                        </div>
                        <Link href="/my-bookings">
                            <Button>
                                View bookings <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-6">
                        <div className="rounded-[32px] border border-brand-border bg-[#20252a] p-8 shadow-soft">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-brand-orange/10 p-3 text-brand-orange">
                                    <Home size={18} />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-slate-50">Personal information</p>
                                    <p className="text-sm text-slate-400">Preferred contact info and service preferences</p>
                                </div>
                            </div>

                            <div className="mt-8 grid gap-4 md:grid-cols-2">
                                <div className="rounded-[24px] border border-brand-border bg-[#171a1d] p-4">
                                    <p className="text-sm text-slate-400">Email</p>
                                    <p className="mt-1 font-semibold text-slate-100">ava@renoilo.com</p>
                                </div>
                                <div className="rounded-[24px] border border-brand-border bg-[#171a1d] p-4">
                                    <p className="text-sm text-slate-400">Phone</p>
                                    <p className="mt-1 font-semibold text-slate-100">+971 50 123 4567</p>
                                </div>
                                <div className="rounded-[24px] border border-brand-border bg-[#171a1d] p-4">
                                    <p className="text-sm text-slate-400">Preferred service</p>
                                    <p className="mt-1 font-semibold text-slate-100">Electrical Repair & Renovation</p>
                                </div>
                                <div className="rounded-[24px] border border-brand-border bg-[#171a1d] p-4">
                                    <p className="text-sm text-slate-400">Membership tier</p>
                                    <p className="mt-1 font-semibold text-slate-100">Premium</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-brand-border bg-[#20252a] p-8 shadow-soft">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-brand-orange/10 p-3 text-brand-orange">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-slate-50">Address management</p>
                                    <p className="text-sm text-slate-400">Saved properties for faster future bookings</p>
                                </div>
                            </div>

                            <div className="mt-8 rounded-[24px] border border-dashed border-brand-border bg-[#171a1d] p-6 text-center">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">No saved addresses yet</p>
                                <p className="mt-2 text-sm text-slate-400">Add a property address to make future bookings quicker.</p>
                                <Button variant="secondary" className="mt-5">Add address</Button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-[32px] border border-brand-border bg-[#171a1d] p-8 text-white shadow-soft">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-white/10 p-3 text-brand-orange">
                                    <ShieldCheck size={18} />
                                </div>
                                <p className="text-lg font-semibold">Security & account settings</p>
                            </div>
                            <div className="mt-8 space-y-4">
                                <div className="rounded-[24px] border border-white/10 bg-white/10 p-4">
                                    <p className="font-semibold">Two-factor authentication</p>
                                    <p className="mt-2 text-sm text-slate-300">Add an extra layer of security for your account.</p>
                                </div>
                                <div className="rounded-[24px] border border-white/10 bg-white/10 p-4">
                                    <p className="font-semibold">Password reset</p>
                                    <p className="mt-2 text-sm text-slate-300">Update your password anytime from a secure recovery flow.</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-brand-border bg-[#20252a] p-8 shadow-soft">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-brand-orange/10 p-3 text-brand-orange">
                                    <Bell size={18} />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-slate-50">Notifications</p>
                                    <p className="text-sm text-slate-400">Stay informed without unnecessary noise</p>
                                </div>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center justify-between rounded-[20px] border border-brand-border bg-[#171a1d] px-4 py-3">
                                    <div>
                                        <p className="font-medium text-slate-100">Booking reminders</p>
                                        <p className="text-sm text-slate-400">Email and SMS updates</p>
                                    </div>
                                    <div className="rounded-full bg-brand-orange/10 px-3 py-1 text-sm font-medium text-brand-orange">On</div>
                                </div>
                                <div className="flex items-center justify-between rounded-[20px] border border-brand-border bg-[#171a1d] px-4 py-3">
                                    <div>
                                        <p className="font-medium text-slate-100">Promotions</p>
                                        <p className="text-sm text-slate-400">Seasonal offers and service tips</p>
                                    </div>
                                    <div className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-slate-300">Off</div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[32px] border border-brand-border bg-[#171a1d] p-8 shadow-soft">
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-brand-orange/10 p-3 text-brand-orange">
                                    <Settings2 size={18} />
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-slate-50">Account settings</p>
                                    <p className="text-sm text-slate-400">Tailor the experience to your preferences</p>
                                </div>
                            </div>
                            <div className="mt-8 flex items-center gap-3 rounded-[20px] border border-brand-border bg-[#20252a] px-4 py-3">
                                <Sparkles size={16} className="text-brand-orange" />
                                <p className="text-sm text-slate-300">Your preferences are ready for future onboarding improvements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
