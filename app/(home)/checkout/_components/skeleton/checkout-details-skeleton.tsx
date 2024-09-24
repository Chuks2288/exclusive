"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const CheckoutDetailsSkeleton = () => {
    return (
        <div className="md:max-w-[520px] w-full p-4 space-y-3">
            <div className="space-y-2">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex items-center">
                        <Skeleton className="h-16 w-16 rounded-md" />
                        <div className="ml-4 flex-1">
                            <Skeleton className="h-4 w-full rounded-md" />
                            <Skeleton className="h-4 w-2/3 rounded-md mt-1" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-4 w-1/3 rounded-md" />
                <Skeleton className="h-4 w-1/4 rounded-md" />
            </div>
            <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-4 w-1/3 rounded-md" />
                <Skeleton className="h-4 w-1/4 rounded-md" />
            </div>
            <div className="flex items-center justify-between mb-2">
                <Skeleton className="h-4 w-1/3 rounded-md" />
                <Skeleton className="h-4 w-1/4 rounded-md" />
            </div>
            <div className="flex gap-x-3 items-center w-full pt-4">
                <Skeleton className="h-10 md:max-w-[298px] max-w-full rounded-md" />
                <Skeleton className="h-10 w-32 rounded-md" />
            </div>
            <div className="flex justify-center items-center pt-8">
                <Skeleton className="h-10 w-48 rounded-md" />
            </div>
        </div>
    );
};
