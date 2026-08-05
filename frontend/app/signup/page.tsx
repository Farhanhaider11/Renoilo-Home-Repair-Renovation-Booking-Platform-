"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Eye, EyeOff, LoaderCircle, ShieldCheck, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthShell } from '@/components/auth/auth-shell';

function getPasswordStrength(password: string) {
    if (!password) return { label: 'Enter a password', score: 0, tone: 'text-slate-400' };
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) return { label: 'Weak', score, tone: 'text-red-300' };
    if (score <= 2) return { label: 'Fair', score, tone: 'text-amber-300' };
    if (score === 3) return { label: 'Good', score, tone: 'text-sky-300' };
    return { label: 'Strong', score, tone: 'text-emerald-300' };
}

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const emailIsValid = useMemo(() => /.+@.+\..+/.test(email), [email]);
    const strength = useMemo(() => getPasswordStrength(password), [password]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        if (!name.trim()) {
            setError('Please add your full name.');
            return;
        }

        if (!emailIsValid) {
            setError('Please enter a valid email address.');
            return;
        }

        if (strength.score < 3) {
            setError('Use at least 8 characters with a number and uppercase letter.');
            return;
        }

        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
        }, 900);
    };

    return (
        <AuthShell
            icon={<UserRound size={24} />}
            eyebrow="Signup"
            title="Create your Renoilo account."
            description="Manage bookings, save preferences, and receive updates in one calm workspace."
            accent="navy"
            footer={
                <>
                    <span className="mr-2">Already have an account?</span>
                    <Link href="/login" className="font-medium text-brand-orange transition hover:text-[#fb923c]">
                        Sign in
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error ? <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div> : null}

                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                    <span className="text-sm font-medium text-slate-400">Full name</span>
                    <input value={name} onChange={(event) => setName(event.target.value)} className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="Ava Carter" autoComplete="name" />
                </label>

                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                    <span className="text-sm font-medium text-slate-400">Email</span>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="ava@renoilo.com" type="email" autoComplete="email" />
                    {email && !emailIsValid ? <p className="mt-2 text-xs text-red-300">Please enter a valid email address.</p> : null}
                </label>

                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                    <span className="text-sm font-medium text-slate-400">Password</span>
                    <div className="mt-3 flex items-center gap-2 rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2">
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? 'text' : 'password'} className="w-full bg-transparent text-sm text-slate-100 outline-none" placeholder="Create a secure password" autoComplete="new-password" />
                        <button type="button" onClick={() => setShowPassword((current) => !current)} className="rounded-full p-2 text-slate-400 transition hover:text-slate-100">
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                        <span className={strength.tone}>Password strength: {strength.label}</span>
                        <span>{password.length}/12</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-[#20252a]">
                        <div className="h-2 rounded-full bg-brand-orange transition-all duration-300" style={{ width: `${Math.min((strength.score / 4) * 100, 100)}%` }} />
                    </div>
                </label>

                <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit" disabled={loading} className="min-w-[180px]">
                        {loading ? <><LoaderCircle size={16} className="animate-spin" /> Creating account...</> : <><CheckCircle2 size={16} /> Create account</>}
                    </Button>
                    <Link href="/login">
                        <Button variant="secondary">Already have an account</Button>
                    </Link>
                </div>
            </form>
        </AuthShell>
    );
}
