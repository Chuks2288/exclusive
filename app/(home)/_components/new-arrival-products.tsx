import { Skeleton } from "@/components/ui/skeleton";
import { NewArrivalItems } from "./new-arrival-items";
import { NewArrivalItemsSkeleton } from "./skeleton/new-arrival-items-skeleton";


type Props = {
    isLoading: boolean;
}

export const NewArrivalProducts = ({
    isLoading,
}: Props) => {

    if (isLoading) {
        return (
            <div className="py-10 space-y-4">
                <div className="flex items-center gap-x-3">
                    <Skeleton className="w-3 h-8 rounded-sm" />
                    <Skeleton className="w-16 h-4" />
                </div>
                <Skeleton className="w-40 h-6 lg:h-8" />
                <NewArrivalItemsSkeleton />
            </div>
        )
    }



    return (
        <div className="py-10 space-y-4">
            <div className="flex items-center gap-x-3">
                <div className="w-3 h-8 rounded-sm bg-red-600" />
                <p className="text-red-600 text-sm font-bold">
                    Featured
                </p>
            </div>
            <h1 className="font-bold lg:text-2xl text-xl self-end">
                New Arrival
            </h1>
            <NewArrivalItems />
        </div>
    )
}

