import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
    variable: "--font-bebas-neue",
    subsets: ["latin"],
    weight: ["400"],
});

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Javkhlant - Freelance Developer",
        template: "%s | Javkhlant",
    },
    description:
        "I help startups and businesses turn ideas into fast, secure, and maintainable web and mobile applications. From MVPs to production systems, I focus on clean code, performance, and real-world results.",
    keywords: [
        "front-end developer",
        "web developer",
        "React developer",
        "Next.js developer",
        "UI/UX developer",
        "Freelance developer",
        "Software developer",
        "Web developer",
        "Mobile developer",
        "Flutter developer",
        "Backend developer",
        "System integration",
        "Maintenance & Optimization",
        "portfolio",
    ],
    authors: [{ name: "Javkhlant" }],
    creator: "Javkhlant",
    publisher: "Javkhlant",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "/",
    },
    category: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="ltr">
            <body className={`${bebasNeue.variable} ${manrope.variable} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
