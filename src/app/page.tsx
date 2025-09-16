import Link from "next/link";

const HomePage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to CiNext</h1>
            <p className="text-gray-700 mb-6 max-w-lg">
                Browse our collection of movies, check out details, and save your favorites.
            </p>
            <Link
                href="/movies"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Browse Movies
            </Link>
        </div>
    );
}

export default HomePage;
