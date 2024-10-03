import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteAllWishlist } from '@/actions/wishlist/delete-all-wishlist';
import { useDispatch } from 'react-redux';
import { clearWishlist } from '@/store/wishlist-slice';

export const useDeleteAllWishlist = () => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: () => {
            return deleteAllWishlist();
        },

        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
                dispatch(clearWishlist());
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
