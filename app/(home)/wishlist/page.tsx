"use client";

import { useGetAllWishlists } from "@/features/wishlist/api/use-get-all-wishlist";
import { useGetWishlistById } from "@/features/wishlist/api/use-get-wishlist-by-id";

const WishlistPage = () => {
    const { data: wishlists, error, isLoading } = useGetAllWishlists();

    console.log('Wishlists:', wishlists); // Log the wishlists
    console.log('Error:', error); // Log any errors
    console.log('Loading:', isLoading); // Log loading state

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Render wishlists
    return (
        <div>
            {wishlists?.map(wishlist => (
                <div key={wishlist.id}>{wishlist.name}</div>
            ))}
        </div>
    );
};

export default WishlistPage;
