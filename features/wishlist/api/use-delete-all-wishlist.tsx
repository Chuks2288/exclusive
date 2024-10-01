import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteAllWishlist } from '@/actions/wishlist/delete-all-wishlist';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { clearWishlist } from '@/store/wishlist-slice'; // Import the clearWishlist action

export const useDeleteAllWishlist = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch(); // Get the dispatch function

    const mutation = useMutation({
        mutationFn: deleteAllWishlist,
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
                // Dispatch clearWishlist action to clear the Redux state
                dispatch(clearWishlist());
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
