"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative flex items-center justify-between py-4 px-8 bg-white shadow-lg">
            {/* Logo */}
            <Link href="/">
                <h1 className="text-2xl font-extrabold text-gray-800 hover:text-teal-600 transition-all duration-300 cursor-pointer">
                    ShareMate
                </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex gap-4 items-center">
                <Link href="/login">
                    <span className="text-lg font-medium">
                        Join With Free!
                    </span>
                </Link>
                <Link href="/login">
                    <span className="text-lg font-medium">
                        Login
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
