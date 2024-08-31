import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { clearCart } from '@/store/cart-slice';

export const useClearCart = () => {
    const dispatch = useDispatch();

    const clearCartMutation = useMutation({
        mutationFn: () => {
            // Execute the Redux action to clear the cart
            dispatch(clearCart());
            // Return a resolved promise to maintain the expected async flow
            return Promise.resolve();
        },
        onSuccess: () => {
            console.log('Cart cleared');
        },
        onError: (error) => {
            console.error('Failed to clear cart:', error);
        },
    });

    return clearCartMutation;
};


