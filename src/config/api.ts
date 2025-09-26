// Configuración de la API
export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
    ENDPOINTS: {
        LOGIN: "/api/login",
        REGISTER: "/api/register",
        USER: "/api/user",
        LOGOUT: "/api/logout",
        SESSIONS: "/api/sessions",
        RESERVE_SESSION: "/api/reserve-session",
        CANCEL_RESERVATION: "/api/cancel-reservation",
    },
};
