import { Skeleton } from "@/components/ui/skeleton";

export const ProductBannerSkeleton = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center justify-between min-h-[450px] bg-gray-200 lg:p-8 p-2 space-y-4">
            <div className="flex-1 flex-col lg:space-y-8 space-y-3 justify-center items-center">
                <Skeleton className="h-4 w-24 " />
                <Skeleton className="h-8 w-64 " />
                <div className="flex space-x-4">
                    <Skeleton className="w-[4rem] h-[4rem] rounded-full " />
                    <Skeleton className="w-[4rem] h-[4rem] rounded-full " />
                    <Skeleton className="w-[4rem] h-[4rem] rounded-full " />
                    <Skeleton className="w-[4rem] h-[4rem] rounded-full " />
                </div>
                <Skeleton className="w-32 h-10  rounded-sm" />
            </div>

            <div className="flex-1 relative justify-center items-center">
                <Skeleton className="w-[450px] h-[450px] " />
            </div>
        </div>
    );
};

