import { apiClient } from './client';

export interface BookingSummary {
    id: number;
    reference: string;
    state: string;
    amount_total: number;
}

export interface BookingPayload {
    pricing_id: string;
    booking_date: string;
    time_slot_id: string;
    frequency?: string;
    bedrooms?: number;
    bathrooms?: number;
    notes?: string;
    customer?: { name?: string; email?: string; phone?: string };
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    postcode?: string;
    access_method_code?: string;
    contact_preference_code?: string;
    addon_ids?: string[];
    clean_level_id?: string;
}

export async function createBooking(payload: BookingPayload) {
    const { data } = await apiClient.post<{ booking: BookingSummary }>('/api/v1/booking', payload);
    return data.booking;
}

export async function getBooking(bookingId: number) {
    const { data } = await apiClient.get<{ booking: unknown }>(`/api/v1/booking/${bookingId}`);
    return data.booking;
}

export async function getBookings() {
    const { data } = await apiClient.get<{ bookings?: unknown[] }>('/api/v1/booking');
    return data.bookings || [];
}
