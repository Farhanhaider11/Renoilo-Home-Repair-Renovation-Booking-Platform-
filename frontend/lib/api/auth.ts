import { apiClient } from './client';

export interface AuthUser {
    id: number;
    name: string;
    email: string;
}

export interface AuthResponse {
    success: boolean;
    message?: string;
    user?: AuthUser;
}

export async function login(email: string, password: string) {
    const { data } = await apiClient.post<AuthResponse>('/api/v1/auth/login', { email, password });
    return data;
}

export async function signup(name: string, email: string, password: string) {
    const { data } = await apiClient.post<AuthResponse>('/api/v1/auth/signup', { name, email, password });
    return data;
}

export async function forgotPassword(email: string) {
    const { data } = await apiClient.post<AuthResponse>('/api/v1/auth/forgot-password', { email });
    return data;
}

export async function resetPassword(token: string, password: string) {
    const { data } = await apiClient.post<AuthResponse>('/api/v1/auth/reset-password', { token, password });
    return data;
}

export async function getCurrentUser() {
    const { data } = await apiClient.get<{ user: AuthUser }>('/api/v1/auth/me');
    return data.user;
}

export async function logout() {
    const { data } = await apiClient.post<AuthResponse>('/api/v1/auth/logout');
    return data;
}
