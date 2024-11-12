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
// Main product schema
export const ProductSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.string().min(0, "Price is required"),
    initialPrice: z.string().min(0, "Initial price is required"),
    brand: z.string().min(1, "Brand is required"),
    category: z.string().min(1, "Category is required"),
    subcategory: z.string().min(1, "Sub category is required"),
    availability: z.boolean().default(true),
    stockQuantity: z.number().int().min(0, "Stock quantity must be a positive integer"),
    images: z.array(z.string().url()).optional(),
    features: z.array(z.string()).optional(),
    specifications: z.array(z.string()).optional(),
    isNew: z.boolean().default(false),
});

// Warranty schema
export const WarrantySchema = z.object({
    duration: z.string().min(1, "Warranty duration is required"),
    coverage: z.string().min(1, "Coverage details are required"),
}).optional();

// Shipping schema
export const ShippingSchema = z.object({
    weight: z.string().min(1, "Weight is required"),
    dimensions: z.string().min(1, "Dimensions are required"),
    cost: z.string().min(0, "Shipping cost is required"),
    deliveryTime: z.string().min(1, "Delivery time is required"),
}).optional();

// Return policy schema
export const ReturnPolicySchema = z.object({
    returnable: z.boolean(),
    returnPeriod: z.string().optional(),
    conditions: z.string().optional(),
}).optional();

// Discount schema
export const DiscountSchema = z.object({
    amount: z.number().int().min(0, "Discount amount must be a positive integer"),
    type: z.string().min(1, "Discount type is required"),
    validUntil: z.date(),
}).optional();

// Full schema including nested entities
export const AdminProductFormSchema = ProductSchema.extend({
    warranty: WarrantySchema,
    shipping: ShippingSchema,
    returnPolicy: ReturnPolicySchema,
    discount: DiscountSchema,
});