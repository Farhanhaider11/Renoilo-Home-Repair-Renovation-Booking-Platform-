# Renoilo Product Architecture

## Product vision
Renoilo is a premium home repair and renovation booking experience for customers who want trusted professionals without friction. The frontend must remain aligned with the existing Odoo backend and reuse its current booking model rather than introducing a new schema.

## Core principles
- Reuse backend fields exactly as provided: bedrooms, bathrooms, clean_level, addons, notes, date, time_slot, customer, address, pricing.
- Present those fields through user-friendly labels: Bedrooms, Bathrooms, Repair Level, Extra Services, Describe the Issue, Date, Time Slot, Customer Details, Address, Pricing.
- Use a premium, minimal SaaS experience with high-quality typography, spacing, motion, and trust signals.

## Page map
- Landing page
- Services
- Service details
- Booking flow
- Checkout
- Booking success
- My bookings
- Profile
- Login
- Signup

## Frontend architecture
- Next.js App Router for route-based composition
- Feature-based organization for domain-specific UI and logic
- Reusable UI primitives and shared forms
- Service layer prepared for Odoo-backed API integration via Axios
- Strong TypeScript typing and modular component boundaries
