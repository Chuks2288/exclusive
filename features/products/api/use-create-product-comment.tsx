import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { createProductComment } from '@/actions/products/create-product-comment';
import { useDispatch } from 'react-redux'; // Import useDispatch from Redux
import { addComment } from '@/store/product-comments-slice'; // Import addComment action

type Props = {
    user: string;
    productId: string;
};

export const useCreateProductComment = ({
    user,
    productId
}: Props) => {
    const queryClient = useQueryClient();
    const dispatch = useDispatch(); // Get the dispatch function

    const mutation = useMutation({
        mutationFn: (values: { rating: number; comment: string }) =>
            createProductComment(values, productId),
        onSuccess: (data, variables) => {
            if (data?.success) {
                toast.success(data.success);
                // Dispatch the new comment to Redux
                dispatch(addComment({
                    user,
                    productId,
                    rating: variables.rating,
                    comment: variables.comment,
                    date: new Date().toISOString(),
                }));

            }

            if (data?.error) {
                toast.error(data.error);
            }

            // Invalidate queries to refresh product and reviews data
            queryClient.invalidateQueries({ queryKey: ['product', productId] });
            queryClient.invalidateQueries({ queryKey: ['productReviews', productId] });
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
};
