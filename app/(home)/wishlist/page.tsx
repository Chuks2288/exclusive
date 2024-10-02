"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { WishlistCard } from "./_components/wishlist-card";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setWishlist } from "@/store/wishlist-slice";
import { useEffect } from "react";
import { WishlistCardSkeleton } from "./_components/skeleton/wishlist-card-skeleton";
import { useGetAllWishlists } from "@/features/wishlist/api/use-get-all-wishlist";
import { ProductsCard } from "../_components/products-card";

const Wishlist = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    const { data, isLoading } = useGetAllWishlists();

    useEffect(() => {
        if (data && wishlistItems.length === 0) {
            dispatch(setWishlist(data));
        }
    }, [data, dispatch, wishlistItems.length]);


    if (isLoading && wishlistItems.length === 0) {
        return (
            <div>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">

                    {[...Array(5)].map((_, index) => (
                        <WishlistCardSkeleton key={index} />
                    ))}
                </ul>
            </div>
        );
    }


    const items = wishlistItems || [];

    return (
        <div>
            {items.length === 0 ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <p>No items in the wishlist.</p>
                        <p>Please click the button below to go back home.</p>
                        <Button onClick={() => router.push("/")}>Go Back Home</Button>
                    </div>
                </div>
            ) : (
                <div>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">
                        {items.map((product) => (
                            <ProductsCard
                                id={product.id}
                                image={product?.images || "/no-image.png"}
                                name={product.name}
                                price={product.price}
                                initialPrice={product.initialPrice}
                                rating={product?.rating}
                                reviews={product?.reviews}
                                discount={product?.discount}
                                isNew={product.isNew === true}
                                isWishlistPage={true}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
