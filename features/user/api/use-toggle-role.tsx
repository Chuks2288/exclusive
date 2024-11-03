// use-toggle-admin-role.ts
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { toggleRole } from "@/actions/user/toggle-role";

export const useToggleRole = () => {
    const toggleRoleMutation = useMutation({
        mutationFn: ({ userId, newRole }: { userId: string; newRole: "ADMIN" | "MODERATOR" | "CUSTOMER" }) =>
            toggleRole(userId, newRole),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            } else {
                toast.error(data?.error);
            }
        },
        onError: () => {
            toast.error("Failed to update user role.");
        },
    });

    return { toggleRoleMutation };
};
