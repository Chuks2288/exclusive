// hooks/useCreateProductComment.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { createProductComment } from '@/actions/products/create-product-comment';

type Props = {
    userId: string;
    productId: string;
}

export const useCreateProductComment = ({
    userId,
    productId
}: Props) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (values: { rating: number; comment: string }) =>
            createProductComment(values, productId), // Ensure userId and productId are correct
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
