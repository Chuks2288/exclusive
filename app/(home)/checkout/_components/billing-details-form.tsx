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
import { useCreateBillingAddress } from "@/features/address/api/use-create-billing-address";

type FormValues = z.input<typeof billingInfoSchema>;

export const BillingDetailsForm = () => {

    const mutation = useCreateBillingAddress();  // Removed userId as it's not needed

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

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values);
    };

    return (
        <div className="md:max-w-[350px] w-full py-4 space-y-3">
            <h1 className="text-lg font-semibold">Billing Details</h1>
            <div className="py-5 space-y-3">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
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
                                            disabled={mutation.isPending} // Disable during loading
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
                                        {/* Uncomment this if PhoneInput is needed */}
                                        {/* <Controller
                                            name="phoneNumber"
                                            control={form.control}
                                            render={({ field: { onChange, value } }) => (
                                                <PhoneInput
                                                    country={'us'}
                                                    value={value}
                                                    onChange={(phone) => onChange(parsePhoneNumberFromString(phone)?.number)}
                                                    inputProps={{
                                                        name: 'phoneNumber',
                                                        required: true,
                                                    }}
                                                    disabled={mutation.isPending}
                                                    inputClass="p-2.5 rounded-md text-sm bg-gray-100 w-full"
                                                />
                                            )}
                                        /> */}
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
                            {mutation.isPending ?
                                (
                                    <Loader2 className="animate-spin size-4" />
                                )
                                : "Submit"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
