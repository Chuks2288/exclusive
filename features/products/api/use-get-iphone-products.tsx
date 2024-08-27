import { getIphoneProducts } from "@/actions/products/get-iphone-products";
import { useQuery } from "@tanstack/react-query";

export const useGetIphoneProducts = () => {
    const query = useQuery({
        queryKey: ['iphoneProducts'], // Use a specific key for iPhone products
        queryFn: async () => {
            const data = await getIphoneProducts();

            if (!Array.isArray(data)) {
                throw new Error("Failed to fetch iPhone products");
            }
            return data;
        },

    });

    return query;
}
