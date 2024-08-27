import { Skeleton } from "@/components/ui/skeleton";
import { searchWordItems } from "@/data";

export const SidebarWordSearchSkeleton = () => {
    return (
        <div className="flex flex-col space-y-4">
            {searchWordItems.map((item: any, index: number) => (
                <div key={index} className="">
                    <Skeleton className="h-8 w-full rounded" />
                </div>
            ))}
        </div>
    );
};
