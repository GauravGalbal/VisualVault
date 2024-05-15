import type { Metadata } from "next";
import "./globals.css";
import ImageContextProvider from "@/context/ImageContext";
import { Providers } from "@/app/providers";
import ImageDimensionContextProvider from "@/context/ImageDimensionContext";
import RootHeader from "@/components/Header/RootHeader";

import Logo from '@/assets/images/logo.png'


export const metadata: Metadata = {
    title: "VisualVault",
    description: "Welocme to the world of VisualVault",
    icons: Logo.src
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ImageContextProvider>
            <ImageDimensionContextProvider>
                <html lang="en" className=" bg-background ">
                    <body className=" bg-background ">
                        <Providers>
                            <RootHeader />
                            {children}
                        </Providers>
                    </body>
                </html>
            </ImageDimensionContextProvider>
        </ImageContextProvider>
    );
}
