"use client";


import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { ProductCommentSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Rating } from "@smastrom/react-rating";
import { useCreateProductComment } from "@/features/products/api/use-create-product-comment";
import { Loader2 } from "lucide-react";

type FormValues = z.infer<typeof ProductCommentSchema>;

export const ProductComment = () => {

    const mutation = useCreateProductComment();
    const isPending = mutation.isPending;

    const form = useForm<FormValues>({
        resolver: zodResolver(ProductCommentSchema),
        defaultValues: {
            rating: 0,
            comment: "",
        }
    });

    const submit = (values: FormValues) => {
        mutation.mutate(values);
    };



    return (
        <div className="m-4 p-6 space-y-4 bg-white shadow-lg rounded-lg border border-gray-300 max-w-lg">
            <h2 className="text-2xl font-bold text-gray-800">Add Comment</h2>
            <div className="max-w-[300px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(submit)}
                        className="space-y-6"
                    >
                        <FormField
                            name="rating"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-y-2">
                                    <FormLabel className="text-gray-700 font-medium">
                                        Rating
                                    </FormLabel>
                                    <FormControl>
                                        <div className="flex items-center">
                                            <Rating
                                                value={field.value}
                                                onChange={field.onChange}
                                                isDisabled={isPending}
                                                style={{ maxWidth: "120px" }}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="comment"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-y-2">
                                    <FormLabel className="text-gray-700 font-medium">
                                        Comment
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write your comment here..."
                                            disabled={isPending}
                                            className="resize-none p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                            rows={4}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition duration-300"
                        >
                            {isPending ? (
                                <Loader2 className="size-4 animate-spin" />
                            ) :
                                "Submit"
                            }

                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};
