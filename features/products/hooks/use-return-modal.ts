
import { create } from "zustand";

type ReturnModalState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useReturnModal = create<ReturnModalState>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));