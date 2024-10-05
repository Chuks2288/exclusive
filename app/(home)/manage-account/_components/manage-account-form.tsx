"use client";


import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/features/user/api/use-login";
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

type FormValues = z.infer<typeof ManageAccountFormSchema>;

const LogInfo = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Address", name: "address", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Current Password", name: "currentPassword", type: "password" },
    { label: "New Password", name: "newPassword", type: "password" },
    { label: "Confirm New Password", name: "confirmNewPassword", type: "password" },
];

export const ManageAccountForm = () => {
    const mutation = useLogin();

    const form = useForm<FormValues>({
        resolver: zodResolver(ManageAccountFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            address: "",
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
        mode: "onChange",
    });

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
                                        {LogInfo.slice(0, 2).map(({ name, label, type }) => (
                                            <FormField
                                                key={label}
                                                name={name as any}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col gap-y-1 w-full">
                                                        <FormLabel className="text-left">{label}</FormLabel>
                                                        <FormControl>
                                                            <Input disabled={mutation.isPending} {...field} type={type} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4">
                                        {LogInfo.slice(2, 4).map(({ name, label, type }) => (
                                            <FormField
                                                key={label}
                                                name={name as any}
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col gap-y-1 w-full">
                                                        <FormLabel className="text-left">{label}</FormLabel>
                                                        <FormControl>
                                                            <Input
                                                                // disabled={mutation.isPending}
                                                                disabled={false}
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
                                    {LogInfo.slice(4).map(({ name, label, type }) => (
                                        <FormField
                                            key={label}
                                            name={name as any}
                                            control={form.control}
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col gap-y-1">
                                                    <FormControl>
                                                        <Input
                                                            // disabled={mutation.isPending}
                                                            disabled={false}
                                                            placeholder={label}
                                                            {...field}
                                                            type={type}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    ))}

                                    <div className="flex w-full space-x-2 items-center justify-end mt-2">
                                        <Button
                                            variant="outline"
                                            disabled={false}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                            variant="destructive"
                                            disabled={!form.formState.isDirty || mutation.isPending}
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
