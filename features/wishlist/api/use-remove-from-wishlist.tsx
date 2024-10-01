// hooks/useDeleteWishlistById.ts

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteWishlistById } from '@/actions/wishlist/delete-wishlist-by-id';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '@/store/wishlist-slice';

export const useRemoveFromWishlist = (productId: any) => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch(); // Initialize the dispatch function

    const mutation = useMutation({
        mutationFn: () => deleteWishlistById(productId),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
                dispatch(removeFromWishlist(productId)); // Dispatch the remove action
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
