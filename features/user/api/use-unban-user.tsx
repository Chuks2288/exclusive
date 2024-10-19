

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
                toast.error(data?.error || "Failed to unban user.");
            }
        },
        onError: () => {
            toast.error("Failed to unban the user.");
        },
    });

    return { unbanMutation };
};
