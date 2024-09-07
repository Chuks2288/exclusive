import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getBillingAddress } from "@/actions/address/get-billing-address";

export const useGetBillingAddress = (id?: string | any): UseQueryResult<any, Error> => {
    return useQuery<any, Error>({
        enabled: !!id,
        queryKey: ["billingAddress", { id }],
        queryFn: async () => {
            if (!id) {
                throw new Error("Product ID is required");
            }

            const data = await getBillingAddress({ id });

            if (!data || typeof data !== "object" || !data.id) {
                throw new Error("Invalid product data");
            }

            return data;
        },
    });
};
