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

const Wishlist = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    // Retrieve wishlist from Redux store
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    // Conditionally fetch data only if wishlistItems is empty
    const { data, isLoading } = useGetAllWishlists();

    // If the fetched wishlist data exists and it's not already in the Redux store
    useEffect(() => {
        if (data && wishlistItems.length === 0) {
            dispatch(setWishlist(data)); // Update Redux store with fetched data
        }
    }, [data, dispatch, wishlistItems.length]);

    // Show skeleton loading state if data is being fetched and nothing is in Redux
    if (isLoading && wishlistItems.length === 0) {
        return (
            <div>
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-10">
                    {/* Show 5 skeletons while loading */}
                    {[...Array(5)].map((_, index) => (
                        <WishlistCardSkeleton key={index} />
                    ))}
                </ul>
            </div>
        );
    }

    // Fallback for when there are no items in the wishlist
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
                        {items.map((item) => (
                            <WishlistCard
                                id={item.id}
                                key={item.id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                size={item.size}
                                description={item.description}
                                availability={item.availability}
                                color={item.color}
                                initialPrice={item.initialPrice}
                                rating={item.rating || 0}
                                quantity={item.quantity}
                                reviews={item.reviews}
                                discount={item.discount}
                                isNew={item.isNew}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
