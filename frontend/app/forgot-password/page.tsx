"use client";

import Link from 'next/link';
import type { Route } from 'next';
import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle, Mail } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const emailIsValid = useMemo(() => /.+@.+\..+/.test(email), [email]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setMessage('');

        if (!emailIsValid) {
            setError('Enter a valid email address so we can help you recover access.');
            return;
        }

        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
            setMessage('If that email exists, a secure recovery link will arrive shortly.');
        }, 900);
    };

    return (
        <AuthShell
            icon={<Mail size={24} />}
            eyebrow="Forgot Password"
            title="Reset access to your account."
            description="We’ll guide you through a secure recovery step without connecting to any live backend yet."
            footer={
                <>
                    <span className="mr-2">Remembered it?</span>
                    <Link href={'/login' as Route} className="font-medium text-brand-orange transition hover:text-[#fb923c]">
                        Return to sign in
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error ? <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div> : null}
                {message ? <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{message}</div> : null}

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

                <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit" disabled={loading} className="min-w-[180px]">
                        {loading ? <><LoaderCircle size={16} className="animate-spin" /> Sending reset link...</> : <><CheckCircle2 size={16} /> Send reset link</>}
                    </Button>
                    <Link href={'/reset-password' as Route}>
                        <Button variant="secondary">Open reset form</Button>
                    </Link>
                </div>
            </form>
        </AuthShell>
    );
}
