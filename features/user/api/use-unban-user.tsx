import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { unbanUser } from "@/actions/user/unban-user";

export const useUnbanUser = () => {
    const unbanMutation = useMutation({
        mutationFn: (userId: string) => unbanUser(userId),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            } else {
                toast.error(data?.error || "Unknown error occurred.");
            }
        },
        onError: (error) => {
            toast.error(error?.message || "Failed to unban the user.");
        },
    });

    return unbanMutation;
};
