import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { editBillingAddress } from '@/actions/address/edit-billing-address';

type Props = {
    userId: string;
}

export const useEditBillingAddress = ({
    userId,
}: Props) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (values: {
            street: string;
            city: string;
            phoneNumber: string;
            apartment?: string;
        }) => editBillingAddress(values, userId),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            }

            if (data?.error) {
                toast.error(data.error);
            }

            // Invalidate queries related to billing address
            queryClient.invalidateQueries({ queryKey: ['billingAddress', userId] });
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
};
