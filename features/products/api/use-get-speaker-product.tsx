import { getSpeakerProduct } from "@/actions/products/get-speaker-product";
import { useQuery } from "@tanstack/react-query";

export const useGetSpeakerProduct = () => {
    const query = useQuery({
        queryKey: ["getSpeakerProduct"],
        queryFn: async () => {
            const data = await getSpeakerProduct();

            if (!Array.isArray(data)) {
                throw new Error("Failed to fetch speaker products");
            }
            return data;
        }
    })

    return query;
}