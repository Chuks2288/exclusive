
import { getAllProducts } from "@/actions/products/get-all-products";
import { Product } from "@prisma/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";


export const useGetAllProducts = (): UseQueryResult<Product[], Error> => {
    const query = useQuery<Product[], Error>({
        queryKey: ['products'],
        queryFn: async () => {
            const data = await getAllProducts();

            if (!data || !Array.isArray(data)) {
                throw new Error("Failed to fetch products or products data is not an array");
            }

            return data;
        },
    });

    return query;
}