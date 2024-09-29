"use client";

import Image from "next/image";

export const AboutImage = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <Image
                src="/about/about-image.png"
                alt="About Image"
                width={500}
                height={500}
                className="object-contain"
            />
        </div>
    );
}
