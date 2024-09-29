"use server";

import z from "zod";
import { ContactFormSchema } from "../../schema";
import { db } from "@/lib/db";

type FormValues = z.infer<typeof ContactFormSchema>;
export const createFormMessage = async (values: FormValues) => {

    const validateFields = ContactFormSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Error validating field" }
    }

    const { name, email, phone, message } = validateFields.data;

    if (!name || !email || !phone || !message) {
        return { error: "Fill out the field completely" }
    }

    await db.formMessage.create({
        data: {
            name,
            email,
            phone,
            message
        }
    })

    return { success: "Message sent successfully" }
}