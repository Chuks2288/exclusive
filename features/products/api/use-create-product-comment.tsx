import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { createProductComment } from '@/actions/products/create-product-comment';

type Props = {
    userId: any;
    productId: any;
}

export const useCreateProductComment = ({
    userId,
    productId
}: Props) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (values: { rating: number; comment: string }) =>
            createProductComment(values, productId),
        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
            }

            if (data?.error) {
                toast.error(data.error);
            }

            // Debugging logs
            console.log('Invalidating queries');
            queryClient.invalidateQueries({ queryKey: ['product', productId] });
            queryClient.invalidateQueries({ queryKey: ['productReviews', productId] });
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
};
