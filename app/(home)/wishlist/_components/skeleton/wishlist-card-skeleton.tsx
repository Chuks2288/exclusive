"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const WishlistCardSkeleton = () => {
    return (
        <div>
            <div className="relative cursor-pointer overflow-hidden group">
                {/* Image Placeholder */}
                <div className="relative bg-gray-200 rounded-sm w-full h-[200px] flex justify-center items-center p-4">
                    <Skeleton className="w-[160px] h-[160px]" />
                </div>

                {/* Remove button placeholder */}
                <Skeleton className="absolute top-2 right-2 w-6 h-6 rounded-full" />

                {/* Add to Cart button placeholder */}
                <Skeleton className="w-full h-8 rounded-none py-2 absolute bottom-0 left-0" />

            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-y-2 mt-4">
                {/* Product Name */}
                <Skeleton className="h-4 w-3/4" />

                {/* Price and Initial Price */}
                <div className="flex items-center gap-x-2">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-1/4" />
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-x-2">
                    <Skeleton className="h-4 w-[90px]" />
                    <Skeleton className="h-4 w-1/6" />
                </div>
            </div>
        </div>
    );
};
