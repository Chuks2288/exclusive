"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("cartState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cartState", serializedState);
    } catch (err) {
        // Handle errors if necessary
    }
};

export const store = configureStore({
    reducer: {
        // @ts-ignore
        cart: cartReducer,
    },
    preloadedState: loadState(), // Preloading state from localStorage
});

store.subscribe(() => {
    saveState({ cart: store.getState().cart }); // Save only the cart state to localStorage
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
