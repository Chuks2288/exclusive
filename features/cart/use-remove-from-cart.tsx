"use client";

import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { removeFromCart } from '@/store/cart-slice';
import { toast } from 'sonner';

type ProductsCardProps = {
    id: string | any;
};

export const useRemoveFromCart = ({ id }: ProductsCardProps) => {
    const dispatch = useDispatch();

    const removeFromCartMutation = useMutation({
        mutationFn: () => {
            dispatch(removeFromCart(id));
            return Promise.resolve(id);
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
