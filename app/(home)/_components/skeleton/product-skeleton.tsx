import { Skeleton } from "@/components/ui/skeleton"

export const ProductSkeleton = () => {
    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <Skeleton className="w-3 h-8 rounded-sm" />
                <Skeleton className="w-20 h-4" />
            </div>
            <Skeleton className="w-full h-16 " />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-[200px]">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} className="h-full max-w-[350px] flex flex-col items-center justify-center" />
                ))}
            </div>
        </div>
    )
}

