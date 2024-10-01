"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import wishlistReducer from "./wishlist-slice";
import productCommentsReducer from "./product-comments-slice";

// Load state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("appState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState); // This will include both cart and wishlist states
    } catch (error) {
        console.error("Could not load state from local storage:", error);
        return undefined;
    }
};

// Save state to local storage
const saveState = (state: { cart: unknown; wishlist: unknown }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("appState", serializedState); // Store both cart and wishlist under a single key
    } catch (error) {
        console.error("Could not save state to local storage:", error);
    }
};

// Configure the Redux store
export const store = configureStore({
    reducer: {
        // @ts-ignore
        cart: cartReducer,
        wishlist: wishlistReducer,
        productComments: productCommentsReducer,
    },
    preloadedState: loadState(), // Preload the combined state from local storage
});

// Subscribe to store updates to save the cart and wishlist states
store.subscribe(() => {
    const { cart, wishlist } = store.getState();
    saveState({ cart, wishlist }); // Save both cart and wishlist states together
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
