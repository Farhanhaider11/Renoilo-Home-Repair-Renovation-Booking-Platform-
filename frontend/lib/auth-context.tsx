'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getCurrentUser, login as loginRequest, logout as logoutRequest, signup as signupRequest } from '@/lib/api/auth';

interface AuthUser {
    id: number;
    name: string;
    email: string;
}

interface AuthContextValue {
    user: AuthUser | null;
    isAuthenticated: boolean;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readStoredUser() {
    if (typeof window === 'undefined') return null;
    try {
        const raw = window.localStorage.getItem('renoilo-auth-user');
        return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
        return null;
    }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshSession = async () => {
        try {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
            window.localStorage.setItem('renoilo-auth-user', JSON.stringify(currentUser));
        } catch {
            setUser(null);
            window.localStorage.removeItem('renoilo-auth-user');
        }
    };

    useEffect(() => {
        const stored = readStoredUser();
        if (stored) {
            setUser(stored);
        }
        void refreshSession().finally(() => setLoading(false));
    }, []);

    const login = async (email: string, password: string) => {
        const result = await loginRequest(email, password);
        if (result.user) {
            setUser(result.user);
            window.localStorage.setItem('renoilo-auth-user', JSON.stringify(result.user));
        }
    };

    const signup = async (name: string, email: string, password: string) => {
        const result = await signupRequest(name, email, password);
        if (result.user) {
            setUser(result.user);
            window.localStorage.setItem('renoilo-auth-user', JSON.stringify(result.user));
        }
    };

    const logout = async () => {
        try {
            await logoutRequest();
        } catch {
            // Ignore and clear local storage for a seamless client-side logout.
        }
        setUser(null);
        window.localStorage.removeItem('renoilo-auth-user');
    };

    const value = useMemo<AuthContextValue>(() => ({
        user,
        isAuthenticated: Boolean(user),
        loading,
        login,
        signup,
        logout,
        refreshSession,
    }), [user, loading]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
