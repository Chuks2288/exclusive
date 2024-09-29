import { createFormMessage } from "@/actions/form-message/create-form-message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";


type Props = {
    name: string;
    email: string;
    phone: string;
    message: string;
}


export const useCreateFormMessage = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (values: Props) => createFormMessage(values),

        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success)
            }

            if (data?.error) {
                toast.error(data.success)
            }

            queryClient.invalidateQueries({ queryKey: ["form-message"] })
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
}