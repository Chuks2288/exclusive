"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
    images: string[]
}

export const ProductImage = ({ images }: Props) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex items-start justify-between gap-x-4">
            {/* Thumbnail Images */}
            <div className="flex flex-col gap-2">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className="cursor-pointer bg-gray-200 p-1 rounded-sm"
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            width={100}
                            height={150}
                            className={`object-cover ${selectedImage === image ? '' : 'border-transparent'}`}
                        />
                    </div>
                ))}
            </div>

            {/* Main Image */}
            <div className="mb-4 self-center bg-gray-100 p-4 rounded-sm">
                <Image
                    src={selectedImage || ""}
                    alt="Product Image"
                    width={400}
                    height={500}
                    priority
                    className="object-cover"
                />
            </div>
        </div>
    );
}
