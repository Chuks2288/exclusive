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
import { ProductsCard } from "./_components/products-card";
import { useGetIphoneProducts } from "@/features/products/api/use-get-iphone-products";
import { Loader2 } from "lucide-react";

const HomePage = () => {
    const { data: products = [], isLoading: productLoading } = useGetAllProducts();
    const { data: iphoneProducts = [], isLoading: iphoneProductLoading } = useGetIphoneProducts();

    return (
        <main className="">
            <Hero
                iphoneProducts={iphoneProducts as any}
                isLoading={productLoading || iphoneProductLoading}
            />
            <FlashSales />
            <Separator className="my-4" />
            <CategoryProducts />
            <BestSellingProducts />
            <ProductBanner />
            <Products />
            <NewArrivalProducts />
            <ServiceHighlights />
        </main>
    );
}

export default HomePage;
