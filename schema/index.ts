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
    // token: z.string(),
});