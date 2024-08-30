import { useQuery } from "@tanstack/react-query";
import { getRelatedProducts } from "@/actions/products/get-related-product";

export const useGetRelatedProducts = () => {
    const query = useQuery({
        queryKey: ["relatedProducts"], // Updated query key
        queryFn: async () => {
            const data = await getRelatedProducts();

            if (!Array.isArray(data)) {
                throw new Error("Failed to fetch products - data is not an array");
            }

            return data; // Return the fetched data
        }
    });

    return query;
};
