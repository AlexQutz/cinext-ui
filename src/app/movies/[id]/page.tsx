import Link from "next/link";
import { notFound } from "next/navigation";
import { Movie } from "@/src/types/movie";


export default async function MoviePage({ params } : {params: Promise<{ id: number }>}) {
    const { id } = await params;


    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            notFound();
        }

        const movie: Movie = await res.json();

        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <img
                        src={movie.poster}
                        className="w-full md:w-1/3 h-auto rounded-lg shadow"
                    />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                        <p className="text-gray-600 mb-2">
                            {movie.year} • {movie.genre}
                        </p>
                        <p className="text-gray-600 mb-2">Directed by {movie.director}</p>
                        <p className="text-gray-600 mb-2">⭐ {movie.rating}</p>
                        <p className="text-gray-700 mb-6">{movie.description}</p>
                        <Link
                            href="/movies"
                            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                            ← Back to Movies
                        </Link>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.log(error);
    }
}
