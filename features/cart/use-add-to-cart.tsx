import React from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { addToCart } from '@/store/cart-slice';
import type { CartItem } from '@/store/cart-slice';

type ProductsCardProps = {
    product: CartItem;
};

export const ProductsCard = ({
    product
}: ProductsCardProps) => {

    const dispatch = useDispatch();

    const addToCartMutation = useMutation({
        mutationFn: (item: CartItem) => {
            // Execute the Redux action to update the state
            dispatch(addToCart(item));

            // Return a resolved promise with the item
            return Promise.resolve(item);
        },
        onSuccess: (data) => {
            console.log('Product added to cart:', data);
        },
        onError: (error) => {
            console.error('Failed to add product to cart:', error);
        },
    });

    return addToCartMutation;
};
