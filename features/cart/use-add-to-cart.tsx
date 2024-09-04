import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { addToCart } from '@/store/cart-slice';
import { CartItem } from '@/store/cart-slice';
import { toast } from 'sonner';

export const useAddToCart = () => {
    const dispatch = useDispatch();

    const addToCartMutation = useMutation({
        mutationFn: (item: CartItem) => {
            dispatch(addToCart(item));

            return Promise.resolve(item);
        },
        onSuccess: (data) => {
            console.log('Product added to cart:', data);
            toast.success("Product added to cart");
        },
        onError: (error) => {
            console.error('Failed to add product to cart:', error);
            toast.error("Failed to add product to cart");
        },
    });

    return addToCartMutation;
};
