import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AuthShellProps = {
    icon: ReactNode;
    eyebrow: string;
    title: string;
    description: string;
    children: ReactNode;
    footer?: ReactNode;
    accent?: 'orange' | 'navy';
};

export function AuthShell({ icon, eyebrow, title, description, children, footer, accent = 'orange' }: AuthShellProps) {
    const accentClasses = accent === 'navy'
        ? 'bg-brand-navy text-white'
        : 'bg-brand-orange/10 text-brand-orange';

    return (
        <main className="min-h-screen bg-[#0f1113] px-6 py-20 lg:px-8">
            <section className="mx-auto flex max-w-5xl flex-col items-center rounded-[36px] border border-brand-border bg-[#171a1d] p-8 shadow-soft sm:p-10 lg:p-16">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-full p-4 ${accentClasses}`}
                >
                    {icon}
                </motion.div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">{eyebrow}</p>
                <h1 className="mt-3 text-4xl font-semibold text-slate-50 sm:text-5xl">{title}</h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">{description}</p>

                <div className="mt-10 w-full max-w-2xl rounded-[28px] border border-brand-border bg-[#20252a] p-6 shadow-sm sm:p-8">
                    {children}
                </div>

                {footer ? <div className="mt-6 text-sm text-slate-400">{footer}</div> : null}
            </section>
        </main>
    );
}
