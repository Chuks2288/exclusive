import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { banUser } from "@/actions/user/ban-user";

export const useBanUser = () => {
    const banMutation = useMutation({
        mutationFn: (userId: string) => banUser(userId),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            } else {
                toast.error(data?.error || "Failed to ban user.");
            }
        },
        onError: () => {
            toast.error("Failed to ban the user.");
        },
    });

    return banMutation;
};


