import React from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { removeFromCart } from '@/store/cart-slice'; // Import Redux action
import type { CartItem } from '@/store/cart-slice';

type ProductsCardProps = {
    productId: string | any;
};

export const ProductsCard = ({ productId }: ProductsCardProps) => {
    const dispatch = useDispatch(); // Get the dispatch function

    // Define a mutation to remove an item from the cart
    const removeFromCartMutation = useMutation({
        mutationFn: (productId: string) => {
            // Execute the Redux action to update the state
            dispatch(removeFromCart(productId));
            // Return a resolved promise with the productId
            return Promise.resolve(productId);
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
