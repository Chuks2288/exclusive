import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getWishlistById } from "@/actions/wishlist/get-wishlist-by-id";

export const useGetWishlistById = (wishlistId?: string): UseQueryResult<any, Error> => {
    return useQuery<any, Error>({
        queryKey: ["wishlistById", { wishlistId }],
        queryFn: async () => {
            if (!wishlistId) {
                throw new Error("Wishlist ID is required");
            }

            const data = await getWishlistById(wishlistId);

            // Check if the returned data is valid
            if (!data) {
                throw new Error("Invalid wishlist data");
            }

            return data;
        },
    });
};
