import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { createBillingAddress } from '@/actions/address/create-billing-address';

export const useCreateBillingAddress = (email?: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async (values: {
            street: string;
            city: string;
            phoneNumber: string;
            apartment?: string;
        }) => {
            // Pass the values and optionally email to the server-side function
            const response = await createBillingAddress(values, email);
            if (response.error) {
                throw new Error(response.error);
            }
            return response;
        },
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            }

            // Invalidate billingAddress queries to refetch the data
            queryClient.invalidateQueries({ queryKey: ['billingAddress'] });
        },
        onError: (error: any) => {
            toast.error(error.message || "Something went wrong");
        }
    });

    return mutation;
};
