import { getProducts } from "@/actions/products/get-products";
import { useQuery } from "@tanstack/react-query";


export const useGetProducts = () => {


    const query = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            // await getProducts();
            const data = await getProducts();

            if (!data || !Array.isArray(data)) {
                throw new Error("Failed to fetch products or products data is not an array");
            }

            return data;
        },
    });

    return query;
}