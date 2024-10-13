"use client";

import { useSearchParams } from "next/navigation";
import { useGetProductsBySearch } from "@/features/products/api/use-get-product-by-search";
import { ProductsCard } from "../_components/products-card";
import { Product } from "@prisma/client";
import { SearchSkeleton } from "./_components/skeleton/search-skeleton";

const SearchResults = () => {
    const params = useSearchParams();
    const searchTerm = params.get("term") || "";

    const {
        data: products = [],
        isLoading
    } = useGetProductsBySearch(searchTerm);

    if (isLoading) {
        return (
            <div className="h-[60vh]">
                <SearchSkeleton />
            </div>
        )
    }

    return (
        <div className="h-[60vh] flex flex-col gap-y-4 pt-4">
            <h1>Search Results for "{searchTerm}"</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product: Product) => (
                    <ProductsCard
                        key={product.id}
                        id={product.id}
                        image={product.images || "/no-image.png"}
                        name={product.name}
                        price={product.price || 0}
                        initialPrice={product.initialPrice}
                        rating={product?.rating}
                        reviews={product?.reviews}
                        discount={product?.discount}
                        isNew={!!product.isNew}
                    />
                ))
                }
            </div>
        </div>
    );
};

export default SearchResults;
