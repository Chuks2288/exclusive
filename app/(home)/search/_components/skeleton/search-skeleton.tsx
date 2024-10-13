import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Adjust the import path based on your project structure

type Props = {
    length?: number;
    height?: string; // Optional height prop
};

export const SearchSkeleton = ({
    length = 5,
    height = "200px" // Default height value
}: Props) => {

    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <Skeleton className="w-3 h-8 rounded-sm" />
                <Skeleton className="w-20 h-4" />
            </div>
            <Skeleton className="w-full h-16" />
            <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4`} style={{ height }}>
                {Array.from({ length }).map((_, index) => (
                    <Skeleton
                        key={index}
                        className="h-full max-w-[350px] flex flex-col items-center justify-center"
                    />
                ))}
            </div>
        </div>
    );
};
