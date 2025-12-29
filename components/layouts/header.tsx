"use client";

import { IconMenu, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { FC, useState } from "react";

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-dark">
            <div className="container py-4 flex items-center justify-between gap-5">
                <Link
                    href={"/"}
                    className="uppercase font-bebas-neue text-[28px] tracking-[-0.01em] leading-none"
                    onClick={closeMenu}
                >
                    Javkhlant
                </Link>

                <button
                    type="button"
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <IconX size={34} stroke={2} />
                    ) : (
                        <IconMenu size={34} stroke={2} />
                    )}
                </button>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-[16px] font-medium leading-6 tracking-[-0.03em]">
                        <li>
                            <Link href={"/"}>Work</Link>
                        </li>
                        <li>
                            <Link href={"/"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-dark/80 backdrop-blur-sm md:hidden"
                        onClick={closeMenu}
                    />

                    {/* Menu */}
                    <nav className="absolute top-0 left-0 right-0 bg-dark md:hidden">
                        {/* Menu Header with Logo and Close Button */}
                        <div className="container py-4 flex items-center justify-between border-b border-dark-gray">
                            <Link
                                href={"/"}
                                onClick={closeMenu}
                                className="uppercase font-bebas-neue text-[28px] tracking-[-0.01em] leading-none"
                            >
                                Javkhlant
                            </Link>
                            <button type="button" onClick={closeMenu} aria-label="Close menu">
                                <IconX size={34} stroke={2} />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <ul className="container py-6 flex flex-col gap-6 text-[16px] font-medium leading-6 tracking-[-0.03em]">
                            <li>
                                <Link href={"/"} onClick={closeMenu} className="block py-2">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} onClick={closeMenu} className="block py-2">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} onClick={closeMenu} className="block py-2">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </>
            )}
        </header>
    );
};

export default Header;
