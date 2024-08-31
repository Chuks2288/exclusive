import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { removeFromCart } from '@/store/cart-slice';

type ProductsCardProps = {
    id: string | any;
};

export const useRemoveFromCart = ({
    id
}: ProductsCardProps) => {
    const dispatch = useDispatch();

    // Define a mutation to remove an item from the cart
    const removeFromCartMutation = useMutation({
        mutationFn: (id: any) => {
            // Execute the Redux action to update the state
            dispatch(removeFromCart(id));
            // Return a resolved promise with the id
            return Promise.resolve(id);
        },
        onSuccess: (data) => {
            console.log('Product removed from cart:', data);
        },
        onError: (error) => {
            console.error('Failed to remove product from cart:', error);
        },
    });

    return removeFromCartMutation;
};
