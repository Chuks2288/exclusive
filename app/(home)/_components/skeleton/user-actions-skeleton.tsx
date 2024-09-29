"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const UserActionsSkeleton = () => {
    return (
        <div className="flex items-center gap-x-3">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
        </div>
    )
}
