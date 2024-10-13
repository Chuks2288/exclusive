"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Suspense } from "react";
import { IoCaretForward } from "react-icons/io5";
import { Loader2 } from "lucide-react";
import { ManageAccountFormSchema } from "@/schema";
import { useRouter } from "next/navigation";

type FormValues = z.infer<typeof ManageAccountFormSchema>;

const LogInfo = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Street", name: "address.street", type: "text" },
    { label: "City", name: "address.city", type: "text" },
    { label: "Phone Number", name: "address.phoneNumber", type: "text" },
    { label: "Apartment", name: "address.apartment", type: "text" },
    { label: "Current Password", name: "currentPassword", type: "password" },
    { label: "New Password", name: "newPassword", type: "password" },
    { label: "Confirm New Password", name: "confirmNewPassword", type: "password" },
];

export const ManageAccountForm = () => {
    const router = useRouter();

    const form = useForm<FormValues>({
        resolver: zodResolver(ManageAccountFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address: {
                street: "",
                city: "",
                phoneNumber: "",
                apartment: ""
            },
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
    });

    const onClick = () => {
        router.push("/");
    }

    const onSubmit = (values: FormValues) => {
        console.log(values);
    };

    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="text-center w-full flex justify-center items-center max-w-xl mx-2 rounded-md p-4">
                <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-sm text-red-500 text-left">Edit Your Profile</p>
                    <div className="py-5 space-y-3">
                        <Suspense fallback={<Loader2 className="size-4 animate-spin" />}>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {LogInfo.slice(0, 3).map(({ name, label, type }) => (
                                            <FormField
                                                key={label}
                                                name={name as any}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col gap-y-1 w-full">
                                                        <FormLabel className="text-left">{label}</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                type={type}
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-sm text-left mt-6 text-red-500">Address Information</p>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {LogInfo.slice(3, 7).map(({ name, label, type }) => (
                                            <FormField
                                                key={label}
                                                name={name as any}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col gap-y-1 w-full">
                                                        <FormLabel className="text-left">{label}</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                {...field}
                                                                type={type}
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                    </div>

                                    <p className="text-sm text-left mt-6 text-red-500">Password Changes</p>
                                    {LogInfo.slice(7).map(({ name, label, type }) => (
                                        <FormField
                                            key={label}
                                            name={name as any}
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col gap-y-1">
                                                    <FormControl>
                                                        <Input {...field} type={type} placeholder={label} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    ))}

                                    <div className="flex w-full space-x-2 items-center justify-end mt-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={onClick}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="destructive"
                                            disabled={!form.formState.isDirty}
                                            className="bg-rose-500 hover:bg-rose-600 text-white gap-x-2 flex items-center"
                                        >
                                            <p>Save Changes</p>
                                            <IoCaretForward className="size-3" />
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};
