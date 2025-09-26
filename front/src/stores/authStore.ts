import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "@/lib/api";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

interface AuthActions {
    login: (email: string, password: string) => Promise<boolean>;
    register: (
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    ) => Promise<boolean>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
    clearError: () => void;
    setUser: (user: User | null) => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            // Estado inicial
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,

            // Acciones
            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });

                try {
                    const response = await api.login(email, password);

                    if (response.success) {
                        set({
                            user: response.user,
                            isAuthenticated: true,
                            isLoading: false,
                            error: null,
                        });
                        return true;
                    } else {
                        set({
                            error: response.message || "Error en el login",
                            isLoading: false,
                        });
                        return false;
                    }
                } catch (error) {
                    const errorMessage =
                        error instanceof Error
                            ? error.message
                            : "Error de conexión";
                    set({
                        error: errorMessage,
                        isLoading: false,
                    });
                    return false;
                }
            },

            register: async (
                name: string,
                email: string,
                password: string,
                password_confirmation: string
            ) => {
                set({ isLoading: true, error: null });

                try {
                    const response = await api.register(
                        name,
                        email,
                        password,
                        password_confirmation
                    );

                    if (response.success) {
                        set({
                            user: response.user,
                            isAuthenticated: true,
                            isLoading: false,
                            error: null,
                        });
                        return true;
                    } else {
                        set({
                            error: response.message || "Error en el registro",
                            isLoading: false,
                        });
                        return false;
                    }
                } catch (error) {
                    const errorMessage =
                        error instanceof Error
                            ? error.message
                            : "Error de conexión";
                    set({
                        error: errorMessage,
                        isLoading: false,
                    });
                    return false;
                }
            },

            logout: async () => {
                set({ isLoading: true });

                try {
                    await api.logout();
                } catch (error) {
                    console.error("Error al cerrar sesión:", error);
                } finally {
                    set({
                        user: null,
                        isAuthenticated: false,
                        isLoading: false,
                        error: null,
                    });
                }
            },

            checkAuth: async () => {
                set({ isLoading: true });

                try {
                    const response = await api.getUser();

                    if (response.success) {
                        set({
                            user: response.user,
                            isAuthenticated: true,
                            isLoading: false,
                        });
                    } else {
                        set({
                            user: null,
                            isAuthenticated: false,
                            isLoading: false,
                        });
                    }
                } catch (error) {
                    set({
                        user: null,
                        isAuthenticated: false,
                        isLoading: false,
                    });
                }
            },

            clearError: () => {
                set({ error: null });
            },

            setUser: (user: User | null) => {
                set({
                    user,
                    isAuthenticated: !!user,
                });
            },
        }),
        {
            name: "auth-storage", // nombre del localStorage
            partialize: (state) => ({
                user: state.user,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
