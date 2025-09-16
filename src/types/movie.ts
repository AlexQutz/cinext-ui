export interface Movie {
    id: number;
    title: number;
    year: number;
    genre: string;
    director: string;
    rating: number;
    poster: string;
    description: string;
    favorite?: boolean;
}

export interface MoviesResponse {
    movies: Movie[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
    authenticated: boolean;
}