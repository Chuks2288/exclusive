"use client";
import { flashSalesProducts, ourProducts } from "@/constants";
import { useParams } from "next/navigation";
import { ProductImage } from "./_components/product-image";
import { ProductDetails } from "./_components/product-details";
import { ProductHeadLink } from "./_components/product-head-link";
import { ProductAdditionalDetails } from "./_components/product-additional-details";
import { useGetProductById } from "@/features/products/api/use-get-product-byId";



const ProductIdPage = () => {

    const { id } = useParams();

    const { data: product } = useGetProductById(id);



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
                    <ProductImage
                        images={product.images}
                    />
                </div>
                <div className="flex-[1.4] p-4 h-full">
                    <ProductDetails
                        name={product.name}
                        rating={product.rating.average}
                        reviews={product.rating.reviews}
                        availability={product.availability}
                        price={product.price}
                        initialPrice={product.initialPrice}
                        description={product.description}
                        color={product.specifications.color}
                        size={product.specifications.sizes_available as string[]}
                        returnable={product.returnPolicy?.returnable}
                        returnPeriod={product.return_policy.return_period}
                        returnCondition={product.return_policy.conditions}
                    />
                </div>
            </div>
            <div className="mt-6">
                <ProductAdditionalDetails
                    id={product.id}
                    features={product.features}
                    specifications={product.specifications as any}
                    discount={product.discount}
                    relatedProducts={product.related_products}
                    reviews={product.reviews}
                    shipping={product.shipping}
                    warranty={product.warranty}
                />
            </div>
        </div>
    );
};

export default ProductIdPage;
