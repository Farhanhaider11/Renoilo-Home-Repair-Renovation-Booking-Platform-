"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Eye, EyeOff, LoaderCircle, ShieldCheck } from 'lucide-react';
import { AuthShell } from '@/components/auth/auth-shell';
import { Button } from '@/components/ui/button';

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

export default function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const strength = useMemo(() => getPasswordStrength(password), [password]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        setMessage('');

        if (password.length < 8) {
            setError('Choose a password with at least 8 characters.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        window.setTimeout(() => {
            setLoading(false);
            setMessage('Your password has been updated. You can now sign in securely.');
        }, 900);
    };

    return (
        <AuthShell
            icon={<ShieldCheck size={24} />}
            eyebrow="Reset Password"
            title="Choose a new password."
            description="Create a secure password and confirm it before you continue."
            footer={
                <>
                    <span className="mr-2">Back to sign in?</span>
                    <Link href="/login" className="font-medium text-brand-orange transition hover:text-[#fb923c]">
                        Return to login
                    </Link>
                </>
            }
        >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {error ? <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</div> : null}
                {message ? <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{message}</div> : null}

                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                    <span className="text-sm font-medium text-slate-400">New password</span>
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

                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                    <span className="text-sm font-medium text-slate-400">Confirm password</span>
                    <input value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} type={showPassword ? 'text' : 'password'} className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="Re-enter the password" autoComplete="new-password" />
                </label>

                <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit" disabled={loading} className="min-w-[180px]">
                        {loading ? <><LoaderCircle size={16} className="animate-spin" /> Updating password...</> : <><CheckCircle2 size={16} /> Save password</>}
                    </Button>
                    <Link href="/login">
                        <Button variant="secondary">Cancel</Button>
                    </Link>
                </div>
            </form>
        </AuthShell>
    );
}
