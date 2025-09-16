import { mainApi } from '../mainApi'

interface LoginRequest {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: { id: number; username: string };
    message: string;
}

export const authApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(_args, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (typeof window !== "undefined") {
                        localStorage.setItem("token", data.token);
                        localStorage.setItem("user", JSON.stringify(data.user));
                    }
                } catch {
                    // ignore errors
                }
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
