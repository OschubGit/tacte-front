import { useAuthStore } from "@/stores/authStore";

export const useAuth = () => {
    const {
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        register,
        logout,
        checkAuth,
        clearError,
        setUser,
    } = useAuthStore();

    return {
        // Estado
        user,
        isAuthenticated,
        isLoading,
        error,

        // Acciones
        login,
        register,
        logout,
        checkAuth,
        clearError,
        setUser,

        // Helpers
        isLoggedIn: isAuthenticated,
        userName: user?.name || "",
        userEmail: user?.email || "",
        userId: user?.id || null,
    };
};
