import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteAllWishlist } from '@/actions/wishlist/delete-all-wishlist';

export const useDeleteAllWishlist = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteAllWishlist,
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            }

            if (data?.error) {
                toast.error(data.error);
            }

            // Invalidate the wishlist query to refresh the UI
            queryClient.invalidateQueries({ queryKey: ['wishlist'] });
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
};
