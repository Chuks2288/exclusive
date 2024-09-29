import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { createWishlist } from '@/actions/wishlist/create-wishlist';

type Props = {
    userId?: string | any;
    productId?: string | any;
};

export const useCreateWishlist = ({ productId }: Props) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () =>
            createWishlist({ productId }),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            } else if (data?.error) {
                toast.error(data.error);
            } else {
                toast.error("Unexpected response from server");
            }

            // Invalidate queries to refresh data
            queryClient.invalidateQueries({ queryKey: ['wishlist'] });
            queryClient.invalidateQueries({ queryKey: ['product', productId] });
        },
        onError: (error) => {
            // Capture and display any error message
            const message = error instanceof Error ? error.message : "Something went wrong";
            toast.error(message);
        }
    });

    return mutation;
};
