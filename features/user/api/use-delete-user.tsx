"use client";


import { useRouter } from 'next/navigation';
import {
    useMutation,
    QueryClient,
} from '@tanstack/react-query';

import { deleteUser } from '@/actions/user/delete-user';

import { toast } from "sonner";

export const useDeleteUser = () => {
    const queryClient = new QueryClient();

    const mutation = useMutation({
        mutationFn: deleteUser,
        onSuccess: (data) => {

            if (data?.success) {
                toast.success(data.success);
            }

            if (data?.error) {
                toast.error(data.error)
            }

            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
        onError: () => {
            toast.error("Something went wrong")
        }
    })

    return mutation;
}