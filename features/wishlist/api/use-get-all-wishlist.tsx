import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getAllWishlist } from "@/actions/wishlist/get-all-wishlist";

export const useGetAllWishlists = (): UseQueryResult<any[], Error> => {
    return useQuery<any[], Error>({
        queryKey: ["allWishlist"],
        queryFn: async () => {
            const data = await getAllWishlist(); // Fetch all wishlists

            // Check if the returned data is valid
            if (!Array.isArray(data)) {
                throw new Error("Invalid wishlists data");
            }

            return data;
        },
    });
};
