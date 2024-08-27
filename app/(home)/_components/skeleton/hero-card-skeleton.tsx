import { Skeleton } from "@/components/ui/skeleton";

export const HeroCardSkeleton = () => {
    return (
        <div className="w-full">
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background-color: rgba(255, 255, 255, 0.5);
                }
                .swiper-pagination-bullet-active {
                    background-color: #ffffff;
                }
            `}</style>
            <div className="swiper-container h-[350px] flex justify-center items-center">
                <div className="swiper-wrapper">
                    {Array.from({ length: 1 }).map((_, index) => (
                        <div key={index} className="swiper-slide bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ">
                            <div className="flex justify-between items-center p-4 h-full">
                                <div className="flex flex-col justify-center items-start lg:pl-8 pl-0 space-y-4 w-1/2">
                                    <div className="flex items-center justify-between gap-x-4">
                                        <Skeleton className="h-16 w-16 rounded-full" />
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-24" />
                                            <Skeleton className="h-4 w-32" />
                                        </div>
                                    </div>
                                    <Skeleton className="h-6 w-48" />
                                </div>
                                <div className="flex justify-center items-center w-1/2">
                                    <Skeleton className="h-[300px] w-[300px] rounded" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
