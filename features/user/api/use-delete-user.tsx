"use client";

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/actions/user/delete-user';
import { toast } from "sonner";

export const useDeleteUser = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (userId: string) => deleteUser(userId),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
                queryClient.invalidateQueries({ queryKey: ['users'] });
            } else if (data?.error) {
                toast.error(data.error);
            }
        },
        onError: () => {
            toast.error("Something went wrong while deleting the user.");
        }
    });

    return mutation;
};
