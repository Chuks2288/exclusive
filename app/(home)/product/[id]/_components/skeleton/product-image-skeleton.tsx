import { Skeleton } from "@/components/ui/skeleton";

export const ProductImageSkeleton = () => {
    return (
        <div className="flex items-start justify-between gap-x-4">
            {/* Thumbnail Skeletons */}
            <div className="flex flex-col gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} className="w-[100px] h-[150px] bg-gray-200 rounded-sm" />
                ))}
            </div>

            {/* Main Image Skeleton */}
            <div className="mb-4 self-center bg-gray-100 p-4 rounded-sm">
                <Skeleton className="w-[400px] h-[500px] bg-gray-300 rounded-sm" />
            </div>
        </div>
    );
};
