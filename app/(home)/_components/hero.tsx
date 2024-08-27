import { Product } from "@prisma/client";
import { HeroCard } from "./hero-card"
import { SidebarWordSearch } from "./sidebar-word-search";
import { SafeIphoneListing } from "@/types";
import { useGetIphoneProducts } from "@/features/products/api/use-get-iphone-products";
import { SidebarWordSearchSkeleton } from "./skeleton/side-bar-search-skeleton";
import { HeroCardSkeleton } from "./skeleton/hero-card-skeleton";

type Props = {
    iphoneProducts: any;
    isLoading: boolean;
}

export const Hero = ({
    iphoneProducts,
    isLoading
}: Props) => {

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="md:col-span-1 md:grid hidden pt-4">
                    <SidebarWordSearchSkeleton />
                </div>
                <div className="md:col-span-3 pt-4 lg:pl-4 pl-0">
                    <HeroCardSkeleton />
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 ">
            <div className="md:col-span-1 md:grid hidden pt-4">
                <SidebarWordSearch />
            </div>
            <div className="md:col-span-3 pt-4 lg:pl-4 pl-0">
                <HeroCard
                    products={iphoneProducts as any}
                />
            </div>
        </div>
    )
}

