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
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://javkhlant.com"),
    title: {
        default: "Javkhlant - Front-End Developer Portfolio",
        template: "%s | Javkhlant",
    },
    description:
        "Sydney based front-end developer passionate about building accessible and user friendly websites. Specializing in web development, front-end development, and UI/UX implementation.",
    keywords: [
        "front-end developer",
        "web developer",
        "React developer",
        "Next.js developer",
        "UI/UX developer",
        "Sydney developer",
        "portfolio",
        "фронт-энд хөгжүүлэгч",
        "вэб хөгжүүлэгч",
        "React хөгжүүлэгч",
        "Next.js хөгжүүлэгч",
        "UI/UX хөгжүүлэгч",
        "Сидней хөгжүүлэгч",
        "портфолио",
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
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: ["mn_MN"],
        url: "/",
        siteName: "Javkhlant Portfolio",
        title: "Javkhlant - Front-End Developer Portfolio",
        description:
            "Sydney based front-end developer passionate about building accessible and user friendly websites.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Javkhlant Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Javkhlant - Front-End Developer Portfolio",
        description:
            "Sydney based front-end developer passionate about building accessible and user friendly websites.",
        images: ["/og-image.jpg"],
        creator: "@javkhlant",
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
