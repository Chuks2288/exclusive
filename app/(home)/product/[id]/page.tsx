"use client";

import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";

import { ProductImage } from "./_components/product-image";
import { ProductDetails } from "./_components/product-details";
import { ProductHeadLink } from "./_components/product-head-link";
import { ProductAdditionalDetails } from "./_components/product-additional-details";
import { useGetProductById } from "@/features/products/api/use-get-product-byId";

import { ProductHeadLinkSkeleton } from "./_components/skeleton/product-head-link-skeleton";
import { ProductImageSkeleton } from "./_components/skeleton/product-image-skeleton";
import { ProductDetailsSkeleton } from "./_components/skeleton/product-details-skeleton";
import { ProductAdditionalDetailsSkeleton } from "./_components/skeleton/product-additional-details-skeleton";
import { useGetAllProducts } from "@/features/products/api/use-get-all-products";



const ProductIdPage = () => {
    const { id } = useParams();

    const {
        data: products,
        isLoading: productsIsLoading,
    } = useGetAllProducts();
    const {
        data: product,
        isLoading: productIsLoading,
    } = useGetProductById(id);

    if (productIsLoading || productsIsLoading) {
        return (
            <div className="py-10">
                <ProductHeadLinkSkeleton />
                <div className="flex lg:flex-row flex-col items-start justify-start gap-4">
                    <div className="flex-[2] p-4 justify-center items-center">
                        <ProductImageSkeleton />
                    </div>
                    <div className="flex-[1.4] p-4 h-full">
                        <ProductDetailsSkeleton />
                    </div>
                </div>
                <div className="mt-6">
                    <ProductAdditionalDetailsSkeleton />
                </div>
            </div>
        );
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="py-10">
            <ProductHeadLink
                category={product.category}
                brand={product.brand}
                name={product.name}
            />
            <div className="flex lg:flex-row flex-col items-start justify-start gap-4">
                <div className="flex-[2] p-4 justify-center items-center">
                    <ProductImage images={product.images} />
                </div>
                <div className="flex-[1.4] p-4 h-full">
                    <ProductDetails
                        id={product.id}
                        name={product.name}
                        image={product.images[0]}
                        rating={product.rating?.average || 0}
                        reviews={product.rating?.reviews || 0}
                        availability={product.availability}
                        price={product.price}
                        initialPrice={product.initialPrice}
                        description={product.description}
                        color={product.specifications?.color}
                        size={product.specifications?.sizes_available || []}
                        returnable={product.returnPolicy?.returnable}
                        returnPeriod={product.returnPolicy?.returnPeriod}
                        returnCondition={product.returnPolicy?.conditions}
                    />
                </div>
            </div>
            <div className="mt-6">
                <ProductAdditionalDetails
                    id={product.id}
                    features={product.features}
                    specifications={product.specifications}
                    discount={product.discount}
                    reviews={product.reviews}
                    shipping={product.shipping}
                    warranty={product.warranty}
                    products={products as any[]}
                />
            </div>
        </div>
    );
};

export default ProductIdPage;
