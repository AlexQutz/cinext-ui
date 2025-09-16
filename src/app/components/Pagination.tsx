import Link from "next/link";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
}

export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       baseUrl,
                                   }: PaginationProps) {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex justify-center space-x-2 mt-6">
            {pages.map((page) => (
                <Link
                    key={page}
                    href={`${baseUrl}?page=${page}`}
                    className={`px-3 py-1 rounded ${
                        page === currentPage
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    {page}
                </Link>
            ))}
        </nav>
    );
}
