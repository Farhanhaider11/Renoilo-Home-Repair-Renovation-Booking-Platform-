export type ServiceCategory = {
    id: string;
    name: string;
    description: string;
    badge: string;
    price: string;
    accent: string;
};

export type BookingFormValues = {
    pricing_id: string;
    bedrooms: string;
    bathrooms: string;
    clean_level_id: 'Basic' | 'Standard' | 'Premium';
    addon_ids: string[];
    notes: string;
    booking_date: string;
    time_slot_id: string;
    frequency: 'One-time' | 'Weekly' | 'Monthly';
    customer: string;
    address: string;
};

export const serviceCatalog: ServiceCategory[] = [
    {
        id: 'electrical',
        name: 'Electrical Repair',
        description: 'Fast diagnostics and safe fixes for lighting, outlets, panels, and switches.',
        badge: 'Urgent support',
        price: 'Starting at $140',
        accent: 'bg-amber-50 text-amber-700',
    },
    {
        id: 'plumbing',
        name: 'Plumbing',
        description: 'Leak repairs, pipe replacement, fixture upgrades, and water pressure fixes.',
        badge: 'Same-day availability',
        price: 'Starting at $120',
        accent: 'bg-cyan-50 text-cyan-700',
    },
    {
        id: 'painting',
        name: 'Painting',
        description: 'Interior refreshes and surface-ready finishes for walls and trim.',
        badge: 'Premium finish',
        price: 'Starting at $180',
        accent: 'bg-violet-50 text-violet-700',
    },
    {
        id: 'carpentry',
        name: 'Carpentry',
        description: 'Custom installations, cabinet repairs, and durable woodwork solutions.',
        badge: 'Crafted detail',
        price: 'Starting at $190',
        accent: 'bg-orange-50 text-orange-700',
    },
    {
        id: 'ac-repair',
        name: 'AC Repair',
        description: 'Cooling system maintenance, filter replacements, and seasonal tune-ups.',
        badge: 'Comfort-first',
        price: 'Starting at $160',
        accent: 'bg-sky-50 text-sky-700',
    },
    {
        id: 'appliance-repair',
        name: 'Appliance Repair',
        description: 'Trusted help for kitchen and laundry appliances that need quick attention.',
        badge: 'Household focus',
        price: 'Starting at $130',
        accent: 'bg-emerald-50 text-emerald-700',
    },
    {
        id: 'kitchen-repair',
        name: 'Kitchen Repair',
        description: 'Countertop fixes, cabinet updates, fixture service, and functional upgrades.',
        badge: 'Space optimization',
        price: 'Starting at $220',
        accent: 'bg-rose-50 text-rose-700',
    },
    {
        id: 'bathroom-repair',
        name: 'Bathroom Repair',
        description: 'Waterproofing, fixture replacement, tiling support, and surface repairs.',
        badge: 'Water-safe',
        price: 'Starting at $200',
        accent: 'bg-indigo-50 text-indigo-700',
    },
    {
        id: 'false-ceiling',
        name: 'False Ceiling',
        description: 'Modern ceiling enhancements with clean finishing and durable installation.',
        badge: 'Design-ready',
        price: 'Starting at $260',
        accent: 'bg-stone-50 text-stone-700',
    },
    {
        id: 'waterproofing',
        name: 'Waterproofing',
        description: 'Protection across wet areas with durable, long-term treatment solutions.',
        badge: 'Long-term protection',
        price: 'Starting at $240',
        accent: 'bg-lime-50 text-lime-700',
    },
    {
        id: 'interior-renovation',
        name: 'Interior Renovation',
        description: 'Thoughtful transformation for interiors that need a more refined finish.',
        badge: 'Transformation',
        price: 'Starting at $320',
        accent: 'bg-fuchsia-50 text-fuchsia-700',
    },
    {
        id: 'home-renovation',
        name: 'Home Renovation',
        description: 'Comprehensive planning and execution for larger home upgrade projects.',
        badge: 'Full-scope',
        price: 'Starting at $420',
        accent: 'bg-slate-50 text-slate-700',
    },
];

export const repairLevels = ['Basic', 'Standard', 'Premium'] as const;

export const addonOptions = ['Material delivery', 'Site cleanup', 'Warranty coverage', 'Furniture protection'];

export const timeSlots = ['Morning', 'Afternoon', 'Evening', 'Weekend'];

export const frequencies = ['One-time', 'Weekly', 'Monthly'] as const;
