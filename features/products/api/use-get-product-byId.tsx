import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getProductById } from "@/actions/products/get-product-byId";
import { Product } from "@prisma/client";

export const useGetProductById = (id?: any): UseQueryResult<any, Error> => {
    return useQuery<any, Error>({
        enabled: !!id,
        queryKey: ["productById", { id }],
        queryFn: async () => {
            if (!id) {
                throw new Error("Product ID is required");
            }

            const data = await getProductById({ id });

            // Handle cases where the API returns an object with a success property
            if (data && typeof data === "object" && "success" in data) {
                throw new Error("Invalid product data");
            }

            // Ensure data is of type Product
            if (typeof data !== 'object' || !('id' in data)) {
                throw new Error("Invalid product data");
            }

            return data as Product;
        },
    });
};
