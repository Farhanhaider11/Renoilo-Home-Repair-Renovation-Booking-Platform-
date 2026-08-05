import { apiClient } from './client';

export interface CatalogPayload {
    pricing: Array<{ id: number; name: string; label: string; base_price: number }>;
    levels: Array<{ id: number; name: string; description: string; base_price: number }>;
    addons: Array<{ id: number; name: string; price: number }>;
    frequencies: Array<{ id: number; name: string; code: string }>;
    bathroom_options: Array<{ value: number; name: string; surcharge: number }>;
    bedroom_options: Array<{ value: number; name: string; surcharge: number }>;
    access_methods: Array<{ code: string; name: string }>;
    contact_preferences: Array<{ code: string; name: string }>;
}

export async function getCatalog() {
    const { data } = await apiClient.get<CatalogPayload>('/api/v1/catalog');
    return data;
}

export async function getAvailability(date: string) {
    const { data } = await apiClient.get<{ date: string; slots: Array<{ id: number; name: string; available: number }> }>(`/api/v1/availability?date=${date}`);
    return data;
}
