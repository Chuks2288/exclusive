import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProductById } from "@/actions/products/get-product-byId";
import { Product } from "@prisma/client";

export const useGetProductById = (id?: string | any): UseQueryResult<any, Error> => {
    return useQuery<any, Error>({
        enabled: !!id, // Ensure the query runs only if 'id' is provided
        queryKey: ["productById", { id }],
        queryFn: async () => {
            if (!id) {
                throw new Error("Product ID is required");
            }

            const data = await getProductById({ id }); // Pass 'id' wrapped in an object

            // Check if the returned data is a valid Product object
            if (!data || typeof data !== "object" || !data.id) {
                throw new Error("Invalid product data");
            }

            return data;
        },
    });
};
