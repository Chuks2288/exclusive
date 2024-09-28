import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation, QueryClient } from '@tanstack/react-query';
import { toast } from "sonner";
import { login } from '@/actions/user/login';
import { LoginSchema } from '@/schema';
import { z } from 'zod';
import { useEffect, useState } from 'react';

type FormValues = z.infer<typeof LoginSchema>;

export const useLogin = () => {
    const queryClient = new QueryClient();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isMounted, setIsMounted] = useState(false);

    const callbackUrl = searchParams.get("callbackUrl");
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already in use with a different provider!"
        : "";

    useEffect(() => {
        setIsMounted(true);
        if (urlError) {
            toast.error(urlError);
        }
    }, [urlError]);

    const mutation = useMutation({
        mutationFn: async (values: FormValues) => {
            if (!isMounted) return; // Prevent execution if not mounted
            const result = await login(values, {
                headers: { 'x-forwarded-for': '127.0.0.1', 'user-agent': 'browser' }
            }, callbackUrl);

            return result;
        },

        onSuccess: (data) => {
            if (data?.success) {
                toast.success(data.success);
                router.push(callbackUrl || "/");
                router.refresh();
            }

            if (data?.error) {
                toast.error(data.error);
            }

            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: () => {
            toast.error("Something went wrong");
        }
    });

    return mutation;
}
