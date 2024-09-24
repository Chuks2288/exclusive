"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const HeadCrumbsSkeleton = () => {
    return (
        <div className="flex items-center gap-x-3">
            <Skeleton className="h-4 w-16 rounded-md" />
            <div className="">
                <Skeleton className="h-4 w-2 rounded-md" />
            </div>
            <Skeleton className="h-4 w-20 rounded-md" />
            <div className="">
                <Skeleton className="h-4 w-2 rounded-md" />
            </div>
            <Skeleton className="h-4 w-24 rounded-md" />
        </div>
    );
};
