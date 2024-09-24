import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getBillingAddress } from "@/actions/address/get-billing-address";

type BillingAddress = {
    id: string;
    street: string;
    city: string;
    apartment: string | null;
    phoneNumber: string | null;
    createdAt: Date;
    updatedAt: Date;
};

export const useGetBillingAddress = (id?: string): UseQueryResult<BillingAddress | null, Error> => {
    return useQuery<BillingAddress | null, Error>({
        enabled: !!id,
        queryKey: ["billingAddress", id],
        queryFn: async () => {
            if (!id) {
                throw new Error("Address ID is required");
            }

            const data = await getBillingAddress({ id });

            if (!data || typeof data.id !== "string") {
                throw new Error("Invalid address data");
            }

            return data;
        },
        retry: false,
    });
};
