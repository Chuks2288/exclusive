import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { removeFromCart } from '@/store/cart-slice';
import { toast } from 'sonner';
import { WishlistItem } from '@/store/wishlist-slice';


export const useRemoveFromCart = () => {
    const dispatch = useDispatch();

    const removeFromCartMutation = useMutation({
        mutationFn: (item: WishlistItem) => {
            dispatch(removeFromCart(item.id));
            return Promise.resolve(item.id);
        },
        onSuccess: () => {
            toast.success("Product removed from cart");
        },
        onError: () => {
            toast.error("Error removing product from cart");
        },
    });

    return removeFromCartMutation;
};
