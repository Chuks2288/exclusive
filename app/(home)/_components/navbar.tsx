"use client";

import { Logo } from "./logo";
import { NavItems } from "./nav-items";
import { SearchInput } from "./search-input";
import { UserActions } from "./user-actions";

import { useGetAllProducts } from "@/features/products/api/use-get-all-products";
import { useGetIphoneProducts } from "@/features/products/api/use-get-iphone-products";
import { useGetBestSellingProducts } from "@/features/products/api/use-get-best-selling-products";
import { useGetSpeakerProduct } from "@/features/products/api/use-get-speaker-product";


export const Navbar = () => {
    const {
        isLoading: productIsLoading,
    } = useGetAllProducts();
    const {
        isLoading: iphoneProductIsLoading
    } = useGetIphoneProducts();
    const {
        isLoading: bestSellingProductsIsLoading
    } = useGetBestSellingProducts();
    const {
        isLoading: speakerProductIsLoading
    } = useGetSpeakerProduct();

    const isLoading =
        productIsLoading ||
        iphoneProductIsLoading ||
        bestSellingProductsIsLoading ||
        speakerProductIsLoading

    return (
        <div className="border-b-2 navbar">
            <div className="w-full px-3">
                <div className="max-w-[1170px] mx-auto">
                    <div className="flex flex-row items-center justify-between py-6 gap-x-6">
                        <Logo />
                        <NavItems />
                        <div className="flex items-center gap-x-6">
                            <SearchInput />
                            <UserActions
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
