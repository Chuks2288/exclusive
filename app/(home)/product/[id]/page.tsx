"use client";

import { flashSalesProducts, ourProducts } from "@/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ProductImage } from "./_components/product-image";
import { ProductDetails } from "./_components/product-details";
import { ProductHeadLink } from "./_components/product-head-link";

const ProductIdPage = () => {
    const products = [...flashSalesProducts, ...ourProducts];
    const { id: productId } = useParams();

    const product = products.find((product) => product.id === productId);

    return (
        <div className="py-10">
            <ProductHeadLink
                category={product?.category as string}
                brand={product?.brand as string}
                name={product?.name as string}
            />
            <div className="flex lg:flex-row flex-col items-start justify-start gap-4">
                <div className="border-2 flex-[2] p-4 justif-center items-center">
                    <ProductImage
                        images={product?.images as string[]}
                    />
                </div>
                <div className="border-2 flex-[1.4] p-4 h-full">
                    <ProductDetails
                        name={product?.name as string}
                        rating={product?.rating.average as number}
                        review={product?.rating.reviews as number}
                        availability={product?.availability as string}
                        price={product?.price as number}
                        description={product?.description as string}
                        color={product?.specifications.color as string}
                        size={product?.specifications.sizes_available as string[]}
                        returnable={product?.return_policy?.returnable === true}
                        returnPeriod={product?.return_policy.return_period as string}
                        returnCondition={product?.return_policy.conditions as string}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductIdPage;
