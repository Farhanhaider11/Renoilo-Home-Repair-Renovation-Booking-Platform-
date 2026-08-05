'use client';

import Link from 'next/link';
import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Droplets, Hammer, Home, Paintbrush, Sparkles, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { serviceCatalog } from '@/types/service';

const iconMap: Record<string, ElementType> = {
    electrical: Sparkles,
    plumbing: Droplets,
    painting: Paintbrush,
    carpentry: Hammer,
    'ac-repair': Wind,
    'appliance-repair': Home,
    'kitchen-repair': Home,
    'bathroom-repair': Home,
    'false-ceiling': BadgeCheck,
    waterproofing: Droplets,
    'interior-renovation': Home,
    'home-renovation': Home,
};

export function ServiceGrid() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCatalog.map((service, index) => {
                const Icon = iconMap[service.id] ?? Sparkles;

                return (
                    <motion.article
                        key={service.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: index * 0.04 }}
                        whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                        className="group rounded-[28px] border border-brand-border/80 bg-[#20252a]/90 p-6 shadow-card hover:border-brand-orange/40 hover:shadow-soft"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${service.accent}`}>{service.badge}</span>
                            <span className="text-sm font-semibold text-brand-orange">{service.price}</span>
                        </div>

                        <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                            <Icon size={20} />
                        </div>

                        <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-50">{service.name}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>

                        <div className="mt-6 flex items-center justify-between rounded-2xl border border-brand-border/70 bg-[#171a1d] px-3 py-3 text-sm text-slate-300">
                            <span className="flex items-center gap-2">
                                <BadgeCheck size={14} className="text-brand-orange" /> Premium scheduling
                            </span>
                            <span className="font-medium text-slate-100">Fast response</span>
                        </div>

                        <div className="mt-8">
                            <Link href="/booking" className="block">
                                <Button variant="secondary" className="w-full justify-between group-hover:border-brand-orange group-hover:text-brand-orange">
                                    Book now <ArrowRight size={16} />
                                </Button>
                            </Link>
                        </div>
                    </motion.article>
                );
            })}
        </div>
    );
}
