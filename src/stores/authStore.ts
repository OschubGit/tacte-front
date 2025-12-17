import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "@/lib/api";
import { mapMessageToError } from "@/lib/functions";

interface User {
  id: number;
  name: string;
  email: string;
  can_reserve: boolean;
  accepted_legal_terms: number;
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
    password_confirmation: string,
    accepted_legal_terms: boolean
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
              error: mapMessageToError(response.message) || "Error en el login",
              isLoading: false,
            });
            return false;
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Error de conexión";
          set({
            error: mapMessageToError(errorMessage),
            isLoading: false,
          });
          return false;
        }
      },

      register: async (
        name: string,
        email: string,
        password: string,
        password_confirmation: string,
        accepted_legal_terms: boolean
      ) => {
        set({ isLoading: true, error: null });

        try {
          const response = await api.register(
            name,
            email,
            password,
            password_confirmation,
            accepted_legal_terms
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
              error:
                mapMessageToError(response.message) || "Error en el registro",
              isLoading: false,
            });
            return false;
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Error de conexión";
          set({
            error: mapMessageToError(errorMessage),
            isLoading: false,
          });
          return false;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      },

      checkAuth: async () => {
        set({ isLoading: true });

        try {
          const response = await api.getUser(get().user?.id.toString() || "");

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
