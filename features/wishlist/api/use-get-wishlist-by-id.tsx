import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getWishlistById } from "@/actions/wishlist/get-wishlist-by-id";

export const useGetWishlistById = (wishlistId?: string, productId?: string): UseQueryResult<any, Error> => {
    return useQuery<any, Error>({
        queryKey: ["wishlistById", { wishlistId, productId }],
        queryFn: async () => {
            if (!wishlistId || !productId) {
                throw new Error("Wishlist ID and Product ID are required");
            }

            const data = await getWishlistById(wishlistId, productId);

            // Check if the returned data is valid
            if (!data) {
                throw new Error("Invalid wishlist data");
            }

            return data;
        },
    });
};
