import { z } from "zod";

export const RegisterSchema = z.object({
    firstName: z.string().min(1, {
        message: "First Name is required",
    }),
    lastName: z.string().min(1, {
        message: "Last Name is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(8, {
        message: "Password is required",
    })
});

export const LoginSchema = z.object({
    email: z.string().min(1, {
        message: "Username is required"
    }),
    password: z.string().min(8, {
        message: "Password is required",
    })
});

export const ResetSchema = z.object({
    email: z.string().min(1, {
        message: "Email is required",
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(8, {
        message: "Password is required",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must match",
    }),
});

export const ProductCommentSchema = z.object({
    rating: z.number().min(1, {
        message: "Rating is required",
    }),
    comment: z.string().min(1, {
        message: "Comment is required",
    }),
});

export const billingInfoSchema = z.object({
    city: z.string().min(1, {
        message: 'City is required',
    }),
    street: z.string().min(5, {
        message: 'Street Address is required',
    }),
    apartment: z.string().optional(),
    phoneNumber: z.string().min(10, {
        message: 'Invalid phone number',
    }),
});

export const ContactFormSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    email: z.string().min(1, {
        message: "Email is required",
    }),
    phone: z.string().min(1, {
        message: "Phone is required",
    }),
    message: z.string().min(1, {
        message: "Message is required",
    }),
})