"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { useReturnModal } from "../../hooks/use-return-modal";

export const ReturnModal = () => {
    const { isOpen, onClose } = useReturnModal();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-6 max-w-[350px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-md">
                        Product Return Policy
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-xs">
                    We value your satisfaction with our products. If for any reason you are not fully satisfied with your purchase, you may return the product within 30 days of the purchase date.
                    Please note the following conditions:
                </DialogDescription>
                <ul className="list-disc list-inside mt-4 text-xs">
                    <li>The product must be returned in its original condition, without any signs of wear or damage.</li>
                    <li>All original packaging, accessories, and documentation must be included.</li>
                    <li>Returns initiated after 30 days from the purchase date will not be accepted.</li>
                </ul>
            </DialogContent>
        </Dialog>
    );
};
