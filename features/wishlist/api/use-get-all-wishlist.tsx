import { useQuery } from "@tanstack/react-query";
import { getAllWishlist } from "@/actions/wishlist/get-all-wishlist"; // Ensure path is correct
import { useDispatch } from "react-redux";
import { setWishlist } from "@/store/wishlist-slice";
import { WishlistItem } from '@/store/wishlist-slice';

export const useGetAllWishlists = () => {
    const dispatch = useDispatch();

    return useQuery({
        queryKey: ["allWishlist"],
        queryFn: async () => {
            const data = await getAllWishlist();

            // Check if the returned data is valid
            if (!Array.isArray(data)) {
                throw new Error("Invalid wishlists data");
            }

            // Transform the data to match WishlistItem type
            const wishlistItems: WishlistItem[] = data.map((wishlistEntry: any) => ({
                id: wishlistEntry.product.id,
                name: wishlistEntry.product.name,
                images: wishlistEntry.product.image || [], // Safeguard null/undefined
                price: wishlistEntry.product.price,
                initialPrice: wishlistEntry.product.initialPrice || wishlistEntry.product.price,
                quantity: wishlistEntry.quantity || 1,
                rating: wishlistEntry.product.rating?.average || 0, // Safeguard against null/undefined rating
                reviews: wishlistEntry.product.rating?.reviews || 0,
                discount: wishlistEntry.product.discount?.amount || 0,
                isNew: wishlistEntry.product.isNew || false,
                description: wishlistEntry.product.description || "",
                color: wishlistEntry.product.color || "default",
                size: wishlistEntry.product.size || "default",
                availability: wishlistEntry.product.availability || "in stock",
            }));

            // Dispatch the transformed data to the Redux store
            dispatch(setWishlist(wishlistItems));

            return wishlistItems;
        },
        staleTime: 1000 * 60 * 5, // Cache the result for 5 minutes
        // onError: (error) => {
        //     console.error("Error fetching wishlists:", error);
        // }
    });
};
