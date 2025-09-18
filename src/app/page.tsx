import Link from "next/link";
import "../styles/main.scss";

const HomePage = () => {

    return (
        <div className="flex min-h-screen">
            <div className="bg-gray-900 flex basis-4/6 items-center justify-center px-8">
                <div className="text-center max-w-xl">
                    <h1 className="text-5xl font-extrabold mb-6 text-white">
                        Welcome to CiNext
                    </h1>
                    <p className="text-lg text-white mb-8">
                        Browse our collection of movies, check out details, and save your favorites.
                    </p>
                    <Link
                        href="/movies"
                        className="inline-block px-8 py-3 bg-orange-200 text-white text-lg font-medium rounded-xl shadow-md hover:bg-orange-400 hover:scale-105 transition-transform duration-200"
                    >
                        Browse Movies
                    </Link>
                </div>
            </div>

            <div className="flex basis-2/6 landing-page-background-image"></div>
        </div>
    );
};

export default HomePage;
