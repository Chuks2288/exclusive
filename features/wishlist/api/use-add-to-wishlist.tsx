import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';  // Assuming 'sonner' is the toast library you're using
import { createWishlist } from '@/actions/wishlist/create-wishlist'; // API function to call
import { useDispatch } from 'react-redux';
import { addToWishlist, WishlistItem } from '@/store/wishlist-slice';  // Redux action

export const useAddToWishlist = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (item: WishlistItem) => {
            return createWishlist(item);
        },
        onSuccess: (data, variables) => {
            if (data?.success) {
                dispatch(addToWishlist(variables));
                toast.success("Product added to wishlist");

                queryClient.invalidateQueries({ queryKey: ['wishlist'] });
            } else {
                toast.error(data?.error || 'Unexpected response from server');
            }
        },
        onError: (error) => {
            console.error('Failed to add product to wishlist:', error);
            toast.error("Failed to add product to wishlist");
        },
    });

    return mutation;
};
