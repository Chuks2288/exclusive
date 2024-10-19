"use client";

import { useMutation, QueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { bulkDeleteUsers } from '@/actions/user/bulk-delete-users';

export const useBulkDeleteUsers = () => {
    const queryClient = new QueryClient();

    const mutation = useMutation({
        mutationFn: bulkDeleteUsers,
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            } else if (data?.error) {
                toast.error(data.error);
            }

            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: () => {
            toast.error("Something went wrong with the deletion");
        },
    });

    return mutation;
};
