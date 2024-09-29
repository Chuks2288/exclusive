"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const NavItemsSkeleton = () => {
    return (
        <div className="flex flex-row gap-x-2">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-8 w-1/2" />
        </div>
    );
};
