import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://movie-api-decs.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
        const token =
            typeof window !== "undefined"
                ? localStorage.getItem("token")
                : null;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
        return headers;
    },
});

export const mainApi = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: () => ({}), // Will be extended by feature APIs
});
