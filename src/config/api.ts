// Configuración de la API
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
  ENDPOINTS: {
    LOGIN: "/login",
    REGISTER: "/register",
    USER: "/user",
    LOGOUT: "/logout",
    SESSIONS: "/sessions",
    RESERVE_SESSION: "/reserve-session",
    CANCEL_RESERVATION: "/cancel-reservation",
    PUBLIC_SESSIONS: "/sessions-public",
    RECOVERY_PASSWORD: "/recovery-password",
  },
};
