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

export const useGetBillingAddress = (id?: string): UseQueryResult<BillingAddress, Error> => {
    return useQuery<BillingAddress, Error>({
        enabled: !!id,  // only enable the query if 'id' exists
        queryKey: ["billingAddress", id],
        queryFn: async () => {
            if (!id) {
                throw new Error("Address ID is required");
            }

            // Fetch the billing address from the server
            const data = await getBillingAddress({ id });

            // Check if data is valid
            if (!data || !data.id) {
                throw new Error("Invalid address data");
            }

            return data; // This must return a `BillingAddress`
        },
        retry: false, // Disable retry on failure (optional)
    });
};
