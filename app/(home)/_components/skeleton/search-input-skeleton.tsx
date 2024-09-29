"use client";

import { Skeleton } from "@/components/ui/skeleton"; // Adjust the import based on your project structure

export const SearchInputSkeleton = () => {
    return (
        <div className="relative">
            <Skeleton className="h-10 w-full rounded-md bg-gray-300" />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Skeleton className="h-4 w-4 rounded-full" />
            </div>
        </div>
    );
};
