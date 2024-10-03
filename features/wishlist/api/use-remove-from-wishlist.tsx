import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteWishlistById } from '@/actions/wishlist/delete-wishlist-by-id';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '@/store/wishlist-slice';

export const useRemoveFromWishlist = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (id: string | any) => {
            return deleteWishlistById(id);
        },

        onSuccess: (data, id) => {
            if (data?.success) {
                dispatch(removeFromWishlist(id));
                toast.success("Product removed from wishlist");

                queryClient.invalidateQueries({ queryKey: ['wishlist'] });
            } else {
                toast.error(data?.error || 'Unexpected response from server');
            }
        },
        onError: (error) => {
            console.error('Failed to remove product from wishlist:', error?.message || error);
            toast.error("Failed to remove product from wishlist");
        },
    });

    return mutation;
};
