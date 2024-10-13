import { useQuery } from "@tanstack/react-query";
import { searchProducts } from "@/actions/products/search-products";

export const useGetSearchSuggestions = (term: string) => {
    return useQuery({
        queryKey: ["searchSuggestions", term], // Array of query keys
        queryFn: async () => {
            if (!term) return []; // Return an empty array if no search term is provided
            return await searchProducts(term); // Call server action for the product search
        },
        enabled: !!term, // Only enable query if there's a search term
    });
};
