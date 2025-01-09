import type {Metadata} from "next";
import {Inter,} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header/Header";
import {ReactNode} from "react";
import {Footer} from "@/components/Footer/Footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});


export const metadata: Metadata = {
    title: "Car Dealer App",
    description: "Browse new and used vehicles, view detailed specifications, compare prices, and find the best deals right from your smartphone.p",
};

export default function RootLayout({children,}
                                       :
                                       Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased h-screen flex flex-col`}
                style={{
                    fontFamily: `${inter.style.fontFamily}`
                }}
            >
                <Header/>
                <main className="flex-grow wrapper">
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}
