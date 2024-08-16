"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Assuming you're using Lucide React for icons

export const UpArrow = () => {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // @ts-ignore
            const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
            if (window.scrollY > navbarHeight) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToNavbar = () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
            navbar.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToNavbar}
            className={`fixed bottom-4 right-4 p-2 rounded-full bg-gray-700 text-white shadow-lg transition-opacity ${showArrow ? "opacity-100" : "opacity-0"
                }`}
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    );
};
