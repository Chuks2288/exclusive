"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { billingInfoSchema } from "@/schema";
import { useUpsertBillingAddress } from "@/features/address/api/use-upsert-billing-address";
import { useGetBillingAddress } from "@/features/address/api/use-get-billing-address";
import { useEffect } from "react";
import { Address } from "@prisma/client";

type FormValues = z.input<typeof billingInfoSchema>;

type Props = {
    id: any;
    billingAddress: Address;
    isBillingAddressLoading: boolean;
}

export const BillingDetailsForm = ({
    id,
    billingAddress,
    isBillingAddressLoading
}: Props) => {
    const mutation = useUpsertBillingAddress();


    console.log(billingAddress);

    const form = useForm<FormValues>({
        resolver: zodResolver(billingInfoSchema),
        defaultValues: {
            street: "",
            city: "",
            apartment: "",
            phoneNumber: "",
        },
        mode: "onChange",
    });

    useEffect(() => {
        if (billingAddress) {
            form.reset({
                street: billingAddress.street || "",
                city: billingAddress.city || "",
                apartment: billingAddress.apartment || "",
                phoneNumber: billingAddress.phoneNumber || "",
            });
        }
    }, [billingAddress, form]);

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values);
    };

    return (
        <div className="md:max-w-[350px] w-full py-4 space-y-3">
            <div>
                {billingAddress?.street}
                {billingAddress?.city}
                {billingAddress?.phoneNumber}
            </div>
            <h1 className="text-lg font-semibold">Billing Details</h1>
            <div className="py-5 space-y-3">
                {isBillingAddressLoading ? (
                    <Loader2 className="animate-spin mx-auto" />
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                name="street"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel className="text-left text-xs text-gray-400 flex items-center gap-x-1">
                                            Street Address
                                            <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={mutation.isPending}
                                                className="p-2.5 rounded-md text-sm bg-gray-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="city"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel className="text-left text-xs text-gray-400 flex items-center gap-x-1">
                                            City
                                            <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={mutation.isPending}
                                                className="p-2.5 rounded-md text-sm bg-gray-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="apartment"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel className="text-left text-xs text-gray-400">
                                            Apartment, Floor, etc (optional)
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={mutation.isPending}
                                                className="p-2.5 rounded-md text-sm bg-gray-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="phoneNumber"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="flex flex-col gap-y-1">
                                        <FormLabel className="text-left text-xs text-gray-400 flex items-center gap-x-1">
                                            Phone Number
                                            <span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={mutation.isPending}
                                                className="p-2.5 rounded-md text-sm bg-gray-100"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={mutation.isPending}>
                                {mutation.isPending ? (
                                    <Loader2 className="animate-spin size-4" />
                                ) : id ? (
                                    "Update"
                                ) : (
                                    "Create"
                                )}
                            </Button>
                        </form>
                    </Form>
                )}
            </div>
        </div>
    );
};
