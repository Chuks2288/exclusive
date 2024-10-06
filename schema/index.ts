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

export const ManageAccountFormSchema = z
    .object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        address: z.object({
            street: z.string().optional(),
            city: z.string().optional(),
            apartment: z.string().optional(),
            phoneNumber: z.string().optional(),
        }).optional(),
        currentPassword: z.string().optional(),
        newPassword: z.string().optional(),
        confirmNewPassword: z.string().optional(),
    })
    .refine(
        (data) =>
            (data.currentPassword && data.newPassword && data.confirmNewPassword) ||
            (!data.currentPassword && !data.newPassword && !data.confirmNewPassword),
        {
            message: "All password fields must be filled to change the password.",
            path: ["currentPassword"],
        }
    )
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        path: ["confirmNewPassword"],
        message: "New password and confirm new password must match.",
    });

