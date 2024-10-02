"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type WishlistItem = {
    id: string | any;
    name?: string | any;
    image: string[];
    rating?: number;
    reviews?: number;
    availability?: string;
    price: number;
    quantity: number;
    initialPrice?: number | any;
    description?: string;
    color?: string;
    size?: string[];
    discount?: number | any;
    isNew?: boolean | any;
};

interface WishlistState {
    items: WishlistItem[];
}

const initialState: WishlistState = {
    items: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action: PayloadAction<WishlistItem>) {
            const itemExists = state.items.find(item => item.id === action.payload.id);
            if (!itemExists) {
                state.items.push(action.payload);
            }
        },
        removeFromWishlist(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        setWishlist(state, action: PayloadAction<WishlistItem[]>) {
            state.items = action.payload;
        },
        clearWishlist(state) {
            state.items = [];
        },
    },
});

export const {
    addToWishlist,
    removeFromWishlist,
    setWishlist,
    clearWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
