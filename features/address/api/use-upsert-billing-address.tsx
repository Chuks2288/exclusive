import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { upsertBillingAddress } from '@/actions/address/upsert-billing-address';

export const useUpsertBillingAddress = (email?: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (values: {
            street: string;
            city: string;
            phoneNumber: string;
            apartment?: string;
        }) => {
            const response = await upsertBillingAddress(values, email);
            if (response.error) {
                throw new Error(response.error);
            }
            return response;
        },
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            }

            queryClient.invalidateQueries({ queryKey: ['billingAddress'] });
        },
        onError: (error: any) => {
            toast.error(error.message || "Something went wrong");
        }
    });

    return mutation;
};
