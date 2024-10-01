// hooks/useDeleteWishlistById.ts

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteWishlistById } from '@/actions/wishlist/delete-wishlist-by-id';
import { useDispatch } from 'react-redux';
import { removeFromWishlist, WishlistItem } from '@/store/wishlist-slice';

export const useRemoveFromWishlist = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (item: WishlistItem) => {
            return deleteWishlistById(item.id);
        },
        onSuccess: (data, variables) => {
            if (data?.success) {
                dispatch(removeFromWishlist(variables.id));
                toast.success("Product removed to wishlist");

                queryClient.invalidateQueries({ queryKey: ['wishlist'] });
            } else {
                toast.error(data?.error || 'Unexpected response from server');
            }
        },
        onError: (error) => {
            console.error('Failed to remove product to wishlist:', error);
            toast.error("Failed to remove product to wishlist");
        },
    });

    return mutation;
};