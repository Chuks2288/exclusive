import { Product } from "@prisma/client";

export type SafeIphoneListing = {
    products: (Product &
    {
        discount?: {
            amount: number,
            validUntil: Date,
        }
    })[]; // Adjusted type to include optional discount
}