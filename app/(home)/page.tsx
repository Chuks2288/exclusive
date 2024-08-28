"use client";

import { Separator } from "@/components/ui/separator";

import { FlashSales } from "./_components/flash-sales";
import { Hero } from "./_components/hero";
import { CategoryProducts } from "./_components/category-product";
import { ProductBanner } from "./_components/product-banner";
import { Products } from "./_components/products";
import { BestSellingProducts } from "./_components/best-selling-products";
import { NewArrivalProducts } from "./_components/new-arrival-products";
import { ServiceHighlights } from "./_components/service-highlights";

import { useGetAllProducts } from "@/features/products/api/use-get-all-products";
import { useGetIphoneProducts } from "@/features/products/api/use-get-iphone-products";
import { useGetBestSellingProducts } from "@/features/products/api/use-get-best-selling-products";
import { useGetSpeakerProduct } from "@/features/products/api/use-get-speaker-product";

const HomePage = () => {
    const {
        data: products = [],
        isLoading: productIsLoading
    } = useGetAllProducts();
    const {
        data: iphoneProducts = [],
        isLoading: iphoneProductIsLoading
    } = useGetIphoneProducts();
    const {
        data: bestSellingProducts = [],
        isLoading: bestSellingProductsIsLoading
    } = useGetBestSellingProducts();
    const {
        data: speakerProduct = [],
        isLoading: speakerProductIsLoading
    } = useGetSpeakerProduct();

    const isLoading =
        productIsLoading ||
        iphoneProductIsLoading ||
        bestSellingProductsIsLoading ||
        speakerProductIsLoading

    return (
        <main>
            <Hero
                iphoneProducts={iphoneProducts as any}
                isLoading={isLoading}
            />
            <FlashSales
                products={products}
                isLoading={isLoading}
            />
            <Separator className="my-4" />
            <CategoryProducts
                products={products}
                isLoading={isLoading}
            />
            <BestSellingProducts
                bestSellingProducts={bestSellingProducts as any}
                isLoading={isLoading}
            />
            <ProductBanner
                products={speakerProduct as any}
                isLoading={isLoading}
            />
            <Products
                products={products}
                isLoading={isLoading}
            />
            <NewArrivalProducts />
            <ServiceHighlights />
        </main>
    );
}

export default HomePage;
