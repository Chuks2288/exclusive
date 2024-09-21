import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export const useConfirm = (
    title: string,
    message: string,
): [() => JSX.Element, () => Promise<unknown>] => {
    const [promise, setPromise] = useState<{ resolve: (value: boolean) => void } | null>(null);
    const [loading, setLoading] = useState(false); // New loading state

    // Function to initiate the confirmation
    const confirm = () => new Promise((resolve) => {
        setPromise({ resolve });
    });

    // Function to handle closing the dialog
    const handleClose = () => {
        setPromise(null);
        setLoading(false); // Reset loading state
    };

    // Function to handle confirmation
    const handleConfirm = async () => {
        setLoading(true); // Set loading to true when the confirm button is clicked
        // Simulate an async operation (you can replace this with your actual logic)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay

        promise?.resolve(true); // Resolve the promise with true when done
        handleClose(); // Close the dialog after loading is complete
    };

    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    };

    // Confirm dialog component
    const ConfirmDialog = () => (
        <Dialog open={promise !== null} onOpenChange={handleClose}>
            <DialogContent className="bg-white space-y-4 max-w-[350px]">
                <DialogHeader className="flex flex-col items-center justify-center">
                    <DialogTitle className="text-red-500 text-xl">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-base text-center">
                        {message}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex items-center gap-2">
                    <Button
                        size="sm"
                        onClick={handleCancel}
                        variant="outline"
                        disabled={loading} // Disable buttons during loading
                        className="w-full"
                    >
                        Cancel
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={handleConfirm}
                        className="w-full text-red-600"
                        disabled={loading} // Disable buttons during loading
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" /> // Show loader if loading
                        ) : (
                            "Confirm"
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );

    return [ConfirmDialog, confirm];
};
