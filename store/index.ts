import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
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
        localStorage.setItem('cartState', serializedState);
    } catch {
        // Ignore write errors
    }
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: loadState(),
});

store.subscribe(() => {
    saveState(store.getState().cart);
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
