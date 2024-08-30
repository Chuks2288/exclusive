import { Skeleton } from "@/components/ui/skeleton";

export const NewArrivalItemsSkeleton = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section Skeleton */}
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center justify-center">
                <Skeleton className="w-56 h-56 mb-4" />
                <div className="absolute bottom-4 left-4 text-white dark:text-black">
                    <Skeleton className="w-24 h-4 mb-2" />
                    <Skeleton className="w-40 h-3 mb-2" />
                    <Skeleton className="w-16 h-4" />
                </div>
            </div>

            {/* Right Section Skeleton */}
            <div className="flex flex-col gap-6">
                {/* Top Box Skeleton */}
                <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center justify-center">
                    <Skeleton className="w-48 h-48 mb-4" />
                    <div className="absolute bottom-4 left-4 text-white dark:text-black">
                        <Skeleton className="w-24 h-4 mb-2" />
                        <Skeleton className="w-40 h-3 mb-2" />
                        <Skeleton className="w-16 h-4" />
                    </div>
                </div>

                {/* Bottom Boxes Skeleton */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center justify-center">
                        <Skeleton className="w-20 h-20 mb-2" />
                        <div className="absolute bottom-4 left-4 text-white dark:text-black">
                            <Skeleton className="w-24 h-4 mb-2" />
                            <Skeleton className="w-32 h-3" />
                        </div>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-md flex flex-col items-center justify-center">
                        <Skeleton className="w-20 h-20 mb-2" />
                        <div className="absolute bottom-4 left-4 text-white dark:text-black">
                            <Skeleton className="w-24 h-4 mb-2" />
                            <Skeleton className="w-32 h-3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
