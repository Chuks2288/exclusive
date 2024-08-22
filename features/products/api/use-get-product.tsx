import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/actions/products/get-product";

export const useGetProduct = (id?: string) => {
    const query = useQuery({
        enabled: !!id,
        queryKey: ["products", { id }],
        queryFn: async () => {

            if (!id) {
                throw new Error("Product ID is required");
            }

            const data = await getProduct({ id });

            if (!data) {
                throw new Error("Failed to fetch product");
            }

            return data;
        },
    });

    return query;
};
