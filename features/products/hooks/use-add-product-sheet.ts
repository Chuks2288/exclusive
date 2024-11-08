
import { create } from "zustand";

type AddProductSheet = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useAddProductSheet = create<AddProductSheet>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));