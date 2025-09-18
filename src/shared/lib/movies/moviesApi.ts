import { mainApi } from "../mainApi";

export const moviesApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        addFavorite: builder.mutation<{ message: string }, number>({
            query: (id) => ({
                url: `/movies/${id}/favorite`,
                method: "POST",
            }),
        }),
        removeFavorite: builder.mutation<{ message: string }, number>({
            query: (id) => ({
                url: `/movies/${id}/favorite`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
} = moviesApi;