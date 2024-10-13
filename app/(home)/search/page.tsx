"use client";

import { useSearchParams } from "next/navigation";
import { useGetProductsBySearch } from "@/features/products/api/use-get-product-by-search";
import { ProductsCard } from "../_components/products-card";
import { Product } from "@prisma/client";

const SearchResults = () => {
    const params = useSearchParams();
    const searchTerm = params.get("term") || "";

    // Type data correctly with the Product type
    const { data:
        products = []
    } = useGetProductsBySearch(searchTerm) as {
        data: Product[];
    };

    return (
        <div>
            <h1>Search Results for "{searchTerm}"</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.length > 0 ? (
                    products.map((product: Product) => (
                        <ProductsCard
                            key={product.id} // key for list rendering
                            id={product.id}
                            image={product.images || "/no-image.png"} // fallback for missing images
                            name={product.name}
                            price={product.price || 0} // default value for price
                            initialPrice={product.initialPrice}
                            rating={product?.rating}
                            reviews={product.reviews}
                            discount={product.discount}
                            isNew={!!product.isNew} // default to false if undefined
                        />
                    ))
                ) : (
                    <div>No products found.</div>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
