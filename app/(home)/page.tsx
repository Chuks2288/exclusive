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

const HomePage = () => {
    const {
        data: products = [],
        isLoading: productLoading
    } = useGetAllProducts();
    const {
        data: iphoneProducts = [],
        isLoading: iphoneProductLoading
    } = useGetIphoneProducts();
    const {
        data: bestSellingProducts = [],
        isLoading: bestSellingProductsLoading
    } = useGetBestSellingProducts();

    const isLoading =
        productLoading ||
        iphoneProductLoading ||
        bestSellingProductsLoading

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
            <ProductBanner />
            <Products />
            <NewArrivalProducts />
            <ServiceHighlights />
        </main>
    );
}

export default HomePage;
