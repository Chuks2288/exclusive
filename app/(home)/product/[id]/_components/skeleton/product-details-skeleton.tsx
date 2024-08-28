import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Truck, RefreshCcw } from "lucide-react";

export const ProductDetailsSkeleton = () => {
    return (
        <div className="space-y-4">
            {/* Product Name */}
            <Skeleton className="h-6 w-1/3" />

            {/* Rating, Reviews, Availability */}
            <div className="flex items-center gap-x-2">
                <Skeleton className="h-5 w-16" />
                <Separator orientation="vertical" className="h-3" />
                <Skeleton className="h-5 w-16" />
            </div>

            {/* Price */}
            <div className="flex items-center gap-x-2">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-12" />
            </div>

            {/* Description */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />

            <Separator orientation="horizontal" className="border-[1.5]" />

            {/* Color Selection */}
            <div className="flex items-center gap-x-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-6 w-6 rounded-full" />
            </div>

            {/* Size Selection */}
            <div className="flex items-center gap-x-4">
                <Skeleton className="h-6 w-20" />
                <div className="flex flex-row gap-x-2">
                    <Skeleton className="h-10 w-10" />
                    <Skeleton className="h-10 w-10" />
                    <Skeleton className="h-10 w-10" />
                </div>
            </div>

            {/* Quantity and Buy Now */}
            <div className="flex items-center gap-x-4 mt-4">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-10" />
            </div>

            {/* Delivery and Return Info */}
            <div className="border-2 w-full p-3 space-y-4">
                <div className="flex items-center gap-x-4">
                    <Truck className="size-6 text-gray-300" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-48" />
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <RefreshCcw className="size-6 text-gray-300" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-3 w-48" />
                    </div>
                </div>
            </div>
        </div>
    );
};
