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

export const useConfirm = (): [() => JSX.Element, (title: string, message: string) => Promise<boolean>] => {
    const [promise, setPromise] = useState<{ resolve: (value: boolean) => void } | null>(null);
    const [loading, setLoading] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogMessage, setDialogMessage] = useState("");

    const confirm = (title: string, message: string) => new Promise<boolean>((resolve) => {
        setDialogTitle(title);
        setDialogMessage(message);
        setPromise({ resolve });
    });

    const handleClose = () => {
        setPromise(null);
        setLoading(false);
    };

    const handleConfirm = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay
        promise?.resolve(true);
        handleClose();
    };

    const handleCancel = () => {
        promise?.resolve(false);
        handleClose();
    };

    const ConfirmDialog = () => (
        <Dialog open={promise !== null} onOpenChange={handleClose}>
            <DialogContent className="bg-white space-y-4 max-w-[350px]">
                <DialogHeader className="flex flex-col items-center justify-center">
                    <DialogTitle className="text-red-500 text-xl">
                        {dialogTitle}
                    </DialogTitle>
                    <DialogDescription className="text-base text-center">
                        {dialogMessage}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex items-center gap-2">
                    <Button
                        size="sm"
                        onClick={handleCancel}
                        variant="outline"
                        disabled={loading}
                        className="w-full"
                    >
                        Cancel
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={handleConfirm}
                        className="w-full text-red-600"
                        disabled={loading}
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
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
