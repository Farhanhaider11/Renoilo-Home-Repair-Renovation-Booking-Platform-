import type { Config } from 'tailwindcss';

export default {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './features/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: '#111315',
                    orange: '#F97316',
                    cream: '#1D2125',
                    border: '#2F3742',
                },
            },
            boxShadow: {
                soft: '0 20px 60px rgba(2, 6, 23, 0.35)',
                card: '0 10px 30px rgba(2, 6, 23, 0.22)',
            },
            fontFamily: {
                sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
