import "@/src/styles/main.scss";
import {memo, ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "CiNext",
    description: "Discover movies, view details, and save your favorites.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
        <body className="bg-gray-100 text-gray-900">
        {children}
        </body>
        </html>
    );
}

export default memo(RootLayout);
