import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40 disabled:pointer-events-none disabled:opacity-60',
    {
        variants: {
            variant: {
                default: 'bg-brand-orange text-white shadow-sm hover:bg-[#fb923c] hover:shadow-md',
                secondary: 'border border-brand-border bg-[#171a1d] text-slate-100 hover:border-brand-orange hover:text-brand-orange',
                ghost: 'bg-transparent text-slate-100 hover:bg-[#20252a]',
            },
            size: {
                default: 'h-11 px-5 py-3',
                sm: 'h-10 px-4',
                lg: 'h-12 px-6',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
