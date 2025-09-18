"use client"

import { Movie } from "../types/movie";
import Link from "next/link";

interface Props {
    movie: Movie;
}

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
            <Link href={`/movies/${movie.id}`}>
                <img
                    src={movie.poster}
                    className="w-full h-64 object-cover"
                />
            </Link>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                    {movie.year} • {movie.genre}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                    Directed by {movie.director}
                </p>
                <p className="text-gray-600 text-sm mb-2">⭐ {movie.rating}</p>
                <p className="text-gray-700 text-sm flex-grow">{movie.description}</p>

                <div className="mt-4 flex justify-between items-center">
                    <Link
                        href={`/movies/${movie.id}`}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        View Details →
                    </Link>

                    {/*<FavoriteButton movieId={movie.id} initialFavorite={movie.favorite} />*/}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;