import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "@/actions/products/search-products";

export const useGetProductsBySearch = (term: string) => {
    return useQuery({
        queryKey: ["productsBySearch", term], // The query key as an array
        queryFn: async () => {
            if (!term) return []; // Return an empty array if no search term is provided
            return await searchProducts(term); // Call the server action directly
        },
        enabled: !!term, // Only run the query if a search term is provided
    });
};
