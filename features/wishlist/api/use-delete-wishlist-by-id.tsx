import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteWishlistById } from '@/actions/wishlist/delete-wishlist-by-id';

export const useDeleteWishlistById = (productId: any) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: () => deleteWishlistById(productId),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            }

            if (data?.error) {
                toast.error(data.error);
            }

            queryClient.invalidateQueries({ queryKey: ['wishlist'] });
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
};
