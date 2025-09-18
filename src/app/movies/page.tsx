import Link from "next/link";
import { MoviesResponse } from "../../types/movie";
import Pagination from "@/src/components/Pagination";
import MovieCard from "@/src/components/MovieCard";

async function getMovies(page: number): Promise<MoviesResponse> {
    const res = await fetch(
        `${process.env.API_URL || "https://movie-api-decs.onrender.com/api"}/movies?page=${page}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch movies");
    }

    return res.json();
}

export default async function MoviesPage({
                                             searchParams,
                                         }: {
    searchParams?: { page?: string };
}) {
    const page = parseInt(searchParams?.page || "1", 10);
    const validPage = isNaN(page) || page < 1 ? 1 : page;

    let data: MoviesResponse;
    try {
        data = await getMovies(validPage);
    } catch (err) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                    Error Loading Movies
                </h2>
                <p className="text-gray-600 mb-6">
                    {err instanceof Error ? err.message : "Unknown error"}
                </p>
                <Link
                    href="/movies"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Try Again
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Movie Collection</h1>
                    <p className="text-gray-600">
                        Showing {data.movies.length} of {data.pagination.total} movies
                    </p>
                </div>
                <Link
                    href="/"
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                    ← Back to Home
                </Link>
            </header>

            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {data.movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

                <Pagination
                    currentPage={data.pagination.page}
                    totalPages={data.pagination.totalPages}
                    baseUrl="/movies"
                />

                <div className="text-center text-gray-600 mt-4">
                    Page {data.pagination.page} of {data.pagination.totalPages}
                </div>
            </main>
        </div>
    );
}
