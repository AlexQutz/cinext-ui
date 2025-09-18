import ReduxProviderWrapper from "../components/ReduxProviderWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        {/* Client-side hydration only for Redux */}
        <ReduxProviderWrapper>{children}</ReduxProviderWrapper>
        </body>
        </html>
    );
}
