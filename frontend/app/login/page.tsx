"use client";

import Link from 'next/link';
import type { Route } from 'next';
import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Eye, EyeOff, Mail, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuthShell } from '@/components/auth/auth-shell';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const emailIsValid = useMemo(() => /.+@.+\..+/.test(email), [email]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        if (!emailIsValid) {
            setError('Enter a valid email address.');
            return;
        }

        if (!password.trim()) {
            setError('Password is required.');
            return;
        }

        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
            setError('');
        }, 900);
    };

    return (
        <AuthShell
            icon={<Mail size={24} />}
            eyebrow="Login"
            title="Welcome back to Renoilo."
            description="Sign in to continue your repair booking and manage your service history."
            footer={
                <>
                    <span className="mr-2">Need a fresh start?</span>
                    <Link href={'/signup' as Route} className="font-medium text-brand-orange transition hover:text-[#fb923c]">
                        Create account
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error ? (
                    <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        {error}
                    </div>
                ) : null}

                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                    <span className="text-sm font-medium text-slate-400">Email</span>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="ava@renoilo.com"
                        type="email"
                        autoComplete="email"
                    />
                    {email && !emailIsValid ? <p className="mt-2 text-xs text-red-300">Please enter a valid email address.</p> : null}
                </label>

                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                    <span className="text-sm font-medium text-slate-400">Password</span>
                    <div className="mt-3 flex items-center gap-2 rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2">
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            className="w-full bg-transparent text-sm text-slate-100 outline-none"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                        <button type="button" onClick={() => setShowPassword((current) => !current)} className="rounded-full p-2 text-slate-400 transition hover:text-slate-100">
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-brand-border bg-[#171a1d] px-4 py-3 text-sm text-slate-400">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe((current) => !current)} className="h-4 w-4 rounded border-brand-border bg-[#20252a] text-brand-orange focus:ring-brand-orange" />
                        Remember me
                    </label>
                    <Link href={'/forgot-password' as Route} className="font-medium text-brand-orange transition hover:text-[#fb923c]">
                        Forgot password?
                    </Link>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit" disabled={loading} className="min-w-[160px]">
                        {loading ? <><LoaderCircle size={16} className="animate-spin" /> Signing in...</> : <><CheckCircle2 size={16} /> Sign in</>}
                    </Button>
                    <Link href={'/signup' as Route}>
                        <Button variant="secondary">Create account</Button>
                    </Link>
                </div>
            </form>
        </AuthShell>
    );
}
