import { Movie } from "@/src/types/movie";
import { mainApi } from "../mainApi";

export const moviesApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<{
            movies: Movie[],
            pagination: {
                page: number,
                limit: number,
                total: number,
                totalPages: number,
                hasNext: boolean,
                hasPrev: boolean
            },
            authenticated: boolean
        }, { page?: number; limit?: number }>({
            query: ({ page = 1, limit = 8 }) => `/movies?page=${page}&limit=${limit}`,
        }),
        getMovie: builder.query<Movie, number>({
            query: (id) => `/movies/${id}`,
        }),
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
    useGetMoviesQuery,
    useGetMovieQuery,
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
} = moviesApi;