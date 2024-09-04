"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: string;
    name?: string;
    image: string[];
    rating?: number;
    reviews?: number;
    availability?: string;
    price: number;
    quantity: number;
    initialPrice?: number;
    description?: string;
    color?: string;
    size?: string[];
};

export type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find((i) => i.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity = action.payload.quantity;
                existingItem.price = action.payload.price;
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateCartQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    updateCartQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
