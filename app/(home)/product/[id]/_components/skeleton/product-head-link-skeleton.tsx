import { Skeleton } from "@/components/ui/skeleton";

export const ProductHeadLinkSkeleton = () => {
    return (
        <div className="flex items-center mb-6 gap-x-2">
            <Skeleton className="w-20 h-4 bg-muted-foreground" />
            <Skeleton className="w-20 h-4 bg-muted-foreground" />
            <Skeleton className="w-40 h-4 bg-muted-foreground" />
        </div>
    );
};
