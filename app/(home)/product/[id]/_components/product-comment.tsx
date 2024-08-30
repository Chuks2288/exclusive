"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
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
import { useCreateProductComment } from "@/features/products/api/use-create-product-comment";
import { Loader2 } from "lucide-react";

type FormValues = z.infer<typeof ProductCommentSchema>;

type Props = {
    userId: string | any;
    productId: string | any;
};

export const ProductComment = ({
    userId,
    productId
}: Props) => {

    const mutation = useCreateProductComment({
        userId,
        productId
    });

    const isPending = mutation.isPending;

    const form = useForm<FormValues>({
        resolver: zodResolver(ProductCommentSchema),
        defaultValues: {
            rating: 1,
            comment: "",
        },
    });


    const submit = (values: FormValues) => {
        mutation.mutate(values);
    };

    return (
        <div className="m-4 p-6 space-y-4 bg-white shadow-lg rounded-lg border border-gray-300 max-w-lg">
            <h2 className="text-2xl font-bold text-gray-800">Add Comment</h2>
            <div className="max-w-[300px]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)} className="space-y-6">
                        <FormField
                            name="rating"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-y-2">
                                    <FormLabel className="text-gray-700 font-medium">
                                        Rating
                                    </FormLabel>
                                    <FormControl>
                                        <Select
                                            value={field.value.toString()}
                                            onValueChange={(value) => field.onChange(Number(value))}
                                            disabled={isPending}
                                        >
                                            <SelectTrigger className="w-full">
                                                <span className="block truncate">
                                                    {field.value || "Select Rating"}
                                                </span>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                    <SelectItem key={rating} value={rating.toString()}>
                                                        {rating}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
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
                            disabled={isPending}
                        >
                            {isPending ? (
                                <Loader2 className="size-4 animate-spin" />
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};
