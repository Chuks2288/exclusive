"use client";

import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { AddressAutoComplete } from "./address-auto-complete";
import { PhoneNumberInput } from "./phone-number-input";
import { Button } from "@/components/ui/button";

export const billingInfoSchema = z.object({
    address: z.string().min(5, {
        message: 'Street Address is required',
    }),
    apartment: z.string().optional(),
    city: z.string().min(1, {
        message: 'City is required',
    }),
    phoneNumber: z.string().refine((value) => {
        const phoneNumber = parsePhoneNumberFromString(value || '');
        return phoneNumber?.isValid();
    }, {
        message: 'Invalid phone number',
    }),
});

type FormValues = z.input<typeof billingInfoSchema>;

// const BillingInfo = [
//     {
//         label: "Street Address",
//         name: "address",
//         type: "text",
//     },
//     {
//         label: "Apartment, Floor, etc(optional)",
//         name: "apartment",
//         type: "text",
//     },
//     {
//         label: "Town/City",
//         name: "city",
//         type: "text",
//     },
//     {
//         label: "Phone Number",
//         name: "phoneNumber",
//         type: "text",
//     },
// ]


export const BillingDetailsForm = () => {

    const form = useForm<FormValues>({
        resolver: zodResolver(billingInfoSchema),
        defaultValues: {
            address: "",
            apartment: "",
            city: "",
            phoneNumber: "",
        },
        mode: "onChange",
    });

    const onSubmit = (values: FormValues) => {
        console.log(values);
    }

    return (
        <div className="md:max-w-[350px] w-full py-4 space-y-3">
            <h1>Billing Details</h1>

            <div className="py-5 space-y-3">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <FormField
                            name="address"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="flex flex-col gap-y-1">
                                    <FormLabel className="text-left text-xs text-gray-400 flex items-center gap-x-1">
                                        Stress Address
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        {/* <AddressAutoComplete
                                            disabled={false}
                                            placeholder="Type address"
                                            value={field.value}
                                            setValue={(name, value) => form.setValue(name, value)} // Updates form state with selected address
                                        /> */}
                                        <Input
                                            disabled={false}
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
                                        Apartment, Floor, etc(optional)
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={false}
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
                                        Town/City
                                        <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={false}
                                            {...field}
                                            className="p-2.5 rounded-md text-sm bg-gray-100"
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
                                        <PhoneNumberInput
                                            value={field.value}
                                            onChange={field.onChange}
                                            disabled={false}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                        >
                            submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

