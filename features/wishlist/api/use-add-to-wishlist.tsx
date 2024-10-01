import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';  // Assuming 'sonner' is the toast library you're using
import { createWishlist } from '@/actions/wishlist/create-wishlist'; // API function to call
import { useDispatch } from 'react-redux';
import { addToWishlist } from '@/store/wishlist-slice';  // Redux action

type Props = {
    id: string;
    productId: string;
    name: string;
    image: string[];
    price: number;
    quantity: number;
    rating?: number;
    reviews?: number;
    availability?: string;
    initialPrice?: number;
    description?: string;
    color?: string;
    size?: string[];
    discount?: number;
    isNew?: boolean;
};

export const useAddToWishlist = (
    wishlistItem: Props
) => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: () => createWishlist(wishlistItem),  // Send the whole item
        onSuccess: (data) => {
            if (data?.success) {
                // Show success toast notification
                toast.success('Item added to wishlist successfully!');

                // Dispatch to Redux store
                dispatch(addToWishlist(wishlistItem));  // Pass the actual wishlistItem object

                // Invalidate queries to refresh the wishlist and product details
                queryClient.invalidateQueries({ queryKey: ['wishlist'] });
                queryClient.invalidateQueries({ queryKey: ['product', wishlistItem.productId] });
            } else if (data?.error) {
                // Show error toast if something went wrong
                toast.error(data.error);
            } else {
                toast.error('Unexpected response from server');
            }
        },
        onError: (error) => {
            // Handle and display any error during mutation
            const message = error instanceof Error ? error.message : 'An unexpected error occurred';
            toast.error(message);
        },
    });

    return mutation;
};
