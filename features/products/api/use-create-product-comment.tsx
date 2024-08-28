import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { createProductComment } from '@/actions/products/create-product-comment';

export const useCreateProductComment = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createProductComment,
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            }

            if (data?.error) {
                toast.error(data.error);
            }

            // Invalidate the query to refresh data
            queryClient.invalidateQueries({ queryKey: ['products'] });
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
};
