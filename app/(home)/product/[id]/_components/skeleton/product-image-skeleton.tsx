"use client";

import { Skeleton } from "@/components/ui/skeleton"; // Import shadcn skeleton

export const ProductImageSkeleton = () => {
    return (
        <div className="flex items-start justify-between gap-x-4">
            <div className="flex flex-col gap-2">
                {Array(4)
                    .fill(null)
                    .map((_, index) => (
                        <Skeleton
                            key={index}
                            className="w-[100px] h-[150px] bg-gray-200 rounded-sm"
                        />
                    ))}
            </div>
            <div className="mb-4 self-center bg-gray-100 p-4 rounded-sm">
                <Skeleton className="w-[400px] h-[500px] bg-gray-200" />
            </div>
        </div>
    );
};
