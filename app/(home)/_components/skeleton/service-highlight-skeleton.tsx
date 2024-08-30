import { Skeleton } from "@/components/ui/skeleton";

export const ServiceHighlightsSkeleton = () => {
    return (
        <div className="flex justify-around items-center py-8">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="text-center">
                    <div className="bg-gray-200 rounded-full p-2 sm:p-3 inline-block">
                        <Skeleton className="bg-black rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16" />
                    </div>
                    <Skeleton className="w-24 h-4 mt-4" />
                    <Skeleton className="w-32 h-3 mt-2" />
                </div>
            ))}
        </div>
    );
};
