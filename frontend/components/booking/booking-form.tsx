"use client";

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BadgeCheck, CheckCircle2, ChevronLeft, ChevronRight, Clock3, Home, MapPin, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { BookingFormValues } from '@/types/service';
import { addonOptions, frequencies, repairLevels, serviceCatalog, timeSlots } from '@/types/service';

const initialValues: BookingFormValues = {
    pricing_id: serviceCatalog[0].name,
    bedrooms: '2',
    bathrooms: '1',
    clean_level_id: 'Standard',
    addon_ids: [],
    notes: '',
    booking_date: '',
    time_slot_id: 'Morning',
    frequency: 'One-time',
    customer: '',
    address: '',
};

const steps = [
    'Select Service',
    'Property Details',
    'Extra Services',
    'Date & Time',
    'Property Address',
    'Customer Details',
    'Review Booking',
];

export function BookingForm() {
    const [step, setStep] = useState(0);
    const [values, setValues] = useState<BookingFormValues>(initialValues);
    const [validationMessage, setValidationMessage] = useState('');

    const handleSelect = (key: keyof BookingFormValues, value: string) => {
        setValues((current) => ({ ...current, [key]: value }));
        setValidationMessage('');
    };

    const handleToggleAddon = (addon: string) => {
        setValues((current) => ({
            ...current,
            addon_ids: current.addon_ids.includes(addon)
                ? current.addon_ids.filter((item) => item !== addon)
                : [...current.addon_ids, addon],
        }));
        setValidationMessage('');
    };

    const selectedService = useMemo(() => serviceCatalog.find((service) => service.name === values.pricing_id) ?? serviceCatalog[0], [values.pricing_id]);

    const validateStep = () => {
        if (step === 0 && !values.pricing_id.trim()) {
            setValidationMessage('Choose a service to continue.');
            return false;
        }

        if (step === 1 && (!values.bedrooms.trim() || !values.bathrooms.trim())) {
            setValidationMessage('Bedrooms and bathrooms help us prepare the visit.');
            return false;
        }

        if (step === 3 && !values.booking_date.trim()) {
            setValidationMessage('Please choose a preferred date.');
            return false;
        }

        if (step === 3 && !values.time_slot_id.trim()) {
            setValidationMessage('Please choose a time slot.');
            return false;
        }

        if (step === 4 && !values.address.trim()) {
            setValidationMessage('Add the property address so the team can arrive correctly.');
            return false;
        }

        if (step === 5 && !values.customer.trim()) {
            setValidationMessage('Please add your contact details before continuing.');
            return false;
        }

        setValidationMessage('');
        return true;
    };

    const nextStep = () => {
        if (!validateStep()) {
            return;
        }

        setStep((current) => Math.min(current + 1, steps.length - 1));
    };

    const prevStep = () => {
        setValidationMessage('');
        setStep((current) => Math.max(current - 1, 0));
    };

    const progress = ((step + 1) / steps.length) * 100;

    return (
        <div className="grid gap-8 xl:grid-cols-[340px_minmax(0,1fr)]">
            <aside className="rounded-[32px] border border-brand-border/80 bg-[#171a1d] p-6 shadow-card lg:sticky lg:top-8 lg:h-fit">
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-brand-orange/10 p-3 text-brand-orange">
                        <Sparkles size={18} />
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Booking flow</p>
                        <p className="text-lg font-semibold text-slate-50">Renoilo concierge</p>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                        <span>Progress</span>
                        <span>{step + 1}/{steps.length}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-[#20252a]">
                        <div className="h-2 rounded-full bg-brand-orange transition-all duration-300" style={{ width: `${progress}%` }} />
                    </div>
                </div>

                <div className="mt-6 space-y-3">
                    {steps.map((label, index) => (
                        <div key={label} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 ${index <= step ? 'border-brand-orange/30 bg-[#20252a]' : 'border-brand-border bg-[#14171a]'}`}>
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${index <= step ? 'bg-brand-orange text-white' : 'bg-[#20252a] text-slate-400'}`}>
                                {index + 1}
                            </div>
                            <span className={`text-sm font-medium ${index <= step ? 'text-slate-100' : 'text-slate-400'}`}>{label}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-brand-border bg-[#20252a] p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
                        <ShieldCheck size={16} />
                        Booking snapshot
                    </div>
                    <p className="mt-3 text-xl font-semibold text-slate-50">{values.pricing_id}</p>
                    <div className="mt-4 space-y-2 text-sm text-slate-400">
                        <div className="flex items-center justify-between">
                            <span>Repair Level</span>
                            <span className="font-medium text-slate-100">{values.clean_level_id}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Date</span>
                            <span className="font-medium text-slate-100">{values.booking_date || 'Pending'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Time</span>
                            <span className="font-medium text-slate-100">{values.time_slot_id || 'Pending'}</span>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="rounded-[32px] border border-brand-border/80 bg-[#20252a] p-6 shadow-card sm:p-8">
                <AnimatePresence mode="wait">
                    <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }} className="space-y-6">
                        {step === 0 && (
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Step 1</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-50">Select Service</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">Choose the repair or renovation type that best matches your needs.</p>
                                </div>
                                <div className="grid gap-3 md:grid-cols-2">
                                    {serviceCatalog.map((service) => (
                                        <button
                                            key={service.id}
                                            type="button"
                                            onClick={() => handleSelect('pricing_id', service.name)}
                                            className={`min-h-[110px] rounded-[24px] border p-4 text-left transition-all ${values.pricing_id === service.name ? 'border-brand-orange bg-brand-orange/10 shadow-[0_0_0_1px_rgba(249,115,22,0.16)]' : 'border-brand-border bg-[#171a1d] hover:border-brand-orange/40 hover:bg-[#1d2126]'}`}
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="font-semibold text-slate-50">{service.name}</p>
                                                    <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                                                </div>
                                                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${service.accent}`}>{service.badge}</span>
                                            </div>
                                            <p className="mt-4 text-sm font-medium text-brand-orange">{service.price}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 1 && (
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Step 2</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-50">Property Details</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">These details help our team prepare accurately for the visit.</p>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                        <span className="text-sm font-medium text-slate-400">Bedrooms</span>
                                        <input value={values.bedrooms} onChange={(event) => handleSelect('bedrooms', event.target.value)} className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="2" />
                                    </label>
                                    <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                        <span className="text-sm font-medium text-slate-400">Bathrooms</span>
                                        <input value={values.bathrooms} onChange={(event) => handleSelect('bathrooms', event.target.value)} className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="1" />
                                    </label>
                                </div>

                                <div className="rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <Home size={16} />
                                        Repair Level
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {repairLevels.map((level) => (
                                            <button key={level} type="button" onClick={() => handleSelect('clean_level_id', level)} className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition ${values.clean_level_id === level ? 'bg-brand-orange text-white' : 'border border-brand-border bg-[#20252a] text-slate-100 hover:border-brand-orange/40'}`}>
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Step 3</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-50">Extra Services</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">Add optional support that helps the visit feel complete and well-prepared.</p>
                                </div>

                                <div className="grid gap-3 md:grid-cols-2">
                                    {addonOptions.map((addon) => (
                                        <button key={addon} type="button" onClick={() => handleToggleAddon(addon)} className={`min-h-[56px] rounded-[20px] border px-4 py-3 text-left text-sm font-medium transition ${values.addon_ids.includes(addon) ? 'border-brand-orange bg-brand-orange/10 text-slate-50' : 'border-brand-border bg-[#171a1d] text-slate-300 hover:border-brand-orange/40'}`}>
                                            {addon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Step 4</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-50">Date & Time</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">Choose a date, time slot, and service cadence that works for you.</p>
                                </div>

                                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                    <span className="text-sm font-medium text-slate-400">Booking date</span>
                                    <input type="date" value={values.booking_date} onChange={(event) => handleSelect('booking_date', event.target.value)} className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" />
                                </label>

                                <div className="rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <Clock3 size={16} />
                                        Time Slot
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {timeSlots.map((slot) => (
                                            <button key={slot} type="button" onClick={() => handleSelect('time_slot_id', slot)} className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition ${values.time_slot_id === slot ? 'bg-brand-orange text-white' : 'border border-brand-border bg-[#20252a] text-slate-100 hover:border-brand-orange/40'}`}>
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <BadgeCheck size={16} />
                                        Frequency
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {frequencies.map((option) => (
                                            <button key={option} type="button" onClick={() => handleSelect('frequency', option)} className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition ${values.frequency === option ? 'bg-brand-orange text-white' : 'border border-brand-border bg-[#20252a] text-slate-100 hover:border-brand-orange/40'}`}>
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                    <span className="text-sm font-medium text-slate-400">Describe the Issue</span>
                                    <textarea value={values.notes} onChange={(event) => handleSelect('notes', event.target.value)} className="mt-3 min-h-28 w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="Describe the issue, symptoms, or desired outcome." />
                                </label>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Step 5</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-50">Property Address</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">Share the location so the visit can be scheduled smoothly.</p>
                                </div>

                                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <MapPin size={16} />
                                        Property Address
                                    </div>
                                    <textarea value={values.address} onChange={(event) => handleSelect('address', event.target.value)} className="mt-3 min-h-28 w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="Apartment, street, city, postal code" />
                                </label>
                            </div>
                        )}

                        {step === 5 && (
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Step 6</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-50">Customer Details</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">These details keep the booking experience personal and professional.</p>
                                </div>

                                <label className="block rounded-[20px] border border-brand-border bg-[#171a1d] p-4">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <UserRound size={16} />
                                        Customer Details
                                    </div>
                                    <input value={values.customer} onChange={(event) => handleSelect('customer', event.target.value)} className="mt-3 min-h-[48px] w-full rounded-2xl border border-brand-border bg-[#20252a] px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20" placeholder="Name, phone, email" />
                                </label>
                            </div>
                        )}

                        {step === 6 && (
                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">Step 7</p>
                                    <h2 className="mt-2 text-2xl font-semibold text-slate-50">Review Booking</h2>
                                    <p className="mt-2 text-sm leading-7 text-slate-400">Make sure everything looks right before you continue to checkout.</p>
                                </div>

                                <div className="rounded-[24px] border border-brand-border bg-[#171a1d] p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="text-sm font-medium text-slate-400">Service</p>
                                            <p className="mt-1 font-semibold text-slate-100">{values.pricing_id}</p>
                                        </div>
                                        <div className="rounded-full bg-[#20252a] px-3 py-2 text-sm font-semibold text-brand-orange">{values.clean_level_id}</div>
                                    </div>

                                    <div className="mt-5 space-y-3 text-sm text-slate-400">
                                        <div className="flex items-center justify-between"><span>Bedrooms</span><span className="font-medium text-slate-100">{values.bedrooms}</span></div>
                                        <div className="flex items-center justify-between"><span>Bathrooms</span><span className="font-medium text-slate-100">{values.bathrooms}</span></div>
                                        <div className="flex items-center justify-between"><span>Date</span><span className="font-medium text-slate-100">{values.booking_date || 'Pending'}</span></div>
                                        <div className="flex items-center justify-between"><span>Time slot</span><span className="font-medium text-slate-100">{values.time_slot_id}</span></div>
                                        <div className="flex items-center justify-between"><span>Extra services</span><span className="font-medium text-slate-100">{values.addon_ids.length ? values.addon_ids.join(', ') : 'None'}</span></div>
                                    </div>
                                </div>

                                <div className="rounded-[24px] border border-brand-border bg-[#171a1d] p-5 text-white">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm text-slate-300">Estimated pricing</p>
                                            <p className="mt-1 text-2xl font-semibold">{selectedService.price}</p>
                                        </div>
                                        <div className="rounded-full bg-white/10 p-3">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {validationMessage ? (
                    <div className="mt-6 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 px-4 py-3 text-sm text-brand-orange">
                        {validationMessage}
                    </div>
                ) : null}

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button variant="secondary" onClick={prevStep} disabled={step === 0} className="w-full sm:w-auto">
                        <ChevronLeft size={16} /> Previous
                    </Button>
                    {step < steps.length - 1 ? (
                        <Button onClick={nextStep} className="w-full sm:w-auto">
                            Continue <ChevronRight size={16} />
                        </Button>
                    ) : (
                        <Button asChild className="w-full sm:w-auto">
                            <a href="/checkout">
                                Proceed to checkout <ArrowRight size={16} />
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
