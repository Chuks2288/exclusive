"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { ContactFormSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormValues = z.infer<typeof ContactFormSchema>;

type ContactProps = {
    name: string;
    type: string;
    placeholder: string;
};

const contacts: ContactProps[] = [
    {
        name: "name",
        type: "text",
        placeholder: "Your name *",
    },
    {
        name: "email",
        type: "email",
        placeholder: "Your Email *",
    },
    {
        name: "phone *",
        type: "text",
        placeholder: "Your Phone *",
    },
];

export const ContactForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const submit = (values: FormValues) => {
        console.log(values);
    };



    return (
        <section className="lg:px-6 px-4 space-y-6 shadow-md rounded-md md:py-8 py-4">
            <div className="max-w-[800px] w-full h-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submit)} className="space-y-6">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            {contacts.map(({ name, type, placeholder }) => (
                                <FormField
                                    key={name}
                                    name={name as any}
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    className="bg-gray-200 text-black"
                                                    placeholder={placeholder}
                                                    disabled={false}
                                                    type={type}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            ))}
                        </div>
                        <FormField
                            name="message"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write your comment here..."
                                            disabled={false}
                                            className="resize-none p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-200 text-black"
                                            rows={8}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <div className=" max-w-[300px]">
                                <Button
                                    className="w-full"
                                    variant="destructive"
                                    type="submit"
                                >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
};
