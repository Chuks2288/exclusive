
import { create } from "zustand";

type GetProductSheet = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useGetProductSheet = create<GetProductSheet>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));