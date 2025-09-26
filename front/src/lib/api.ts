import { API_CONFIG } from "@/config/api";

export const api = {
    baseURL: API_CONFIG.BASE_URL,

    // Métodos de autenticación
    login: async (email: string, password: string) => {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGIN}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            }
        );

        return response.json();
    },

    register: async (
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    ) => {
        try {
            const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.REGISTER}`;
            console.log("Making request to:", url);

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                },
                credentials: "include",
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    password_confirmation,
                }),
            });

            console.log("Response status:", response.status);
            console.log("Response headers:", response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Error response:", errorText);
                throw new Error(
                    `HTTP error! status: ${response.status} - ${errorText}`
                );
            }

            return response.json();
        } catch (error) {
            console.error("Fetch error:", error);
            if (
                error instanceof TypeError &&
                error.message.includes("Failed to fetch")
            ) {
                throw new Error(
                    "No se pudo conectar con el servidor. Verifica que el backend esté ejecutándose en http://localhost:8888/tacte/public"
                );
            }
            throw error;
        }
    },

    getUser: async () => {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USER}`,
            {
                credentials: "include",
            }
        );

        return response.json();
    },

    logout: async () => {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.LOGOUT}`,
            {
                method: "POST",
                credentials: "include",
            }
        );

        return response.json();
    },

    getSessions: async ({
        type,
        datefrom,
        dateto,
        user_id,
    }: {
        type?: string;
        datefrom?: string;
        dateto?: string;
        user_id?: string;
    }) => {
        const queryParams = new URLSearchParams();
        if (type) queryParams.append("type", type);
        if (datefrom) queryParams.append("datefrom", datefrom);
        if (dateto) queryParams.append("dateto", dateto);
        if (user_id) queryParams.append("user_id", user_id);

        const response = await fetch(
            `${API_CONFIG.BASE_URL}${
                API_CONFIG.ENDPOINTS.SESSIONS
            }?${queryParams.toString()}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
            }
        );

        return response.json();
    },

    reserveSession: async (userId: string, sessionId: string, type: string) => {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.RESERVE_SESSION}?user_id=${userId}&session_id=${sessionId}&type=${type}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
            }
        );

        return response.json();
    },

    cancelReservation: async (
        userId: string,
        sessionId: string,
        type: string
    ) => {
        const response = await fetch(
            `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CANCEL_RESERVATION}?user_id=${userId}&session_id=${sessionId}&type=${type}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                credentials: "include",
            }
        );

        return response.json();
    },
};
