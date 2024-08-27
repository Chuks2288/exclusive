import { getBestSellingProducts } from "@/actions/products/get-best-selling-products";
import { useQuery } from "@tanstack/react-query";

export const useGetBestSellingProducts = () => {
    const query = useQuery({
        queryKey: ["bestSellingProducts"],
        queryFn: async () => {
            const data = await getBestSellingProducts();

            if (!Array.isArray(data)) {
                throw new Error("failed to fetch product")
            }

            return data;
        }
    });

    return query;
}