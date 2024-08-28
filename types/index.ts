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


export type SafeProductListing = {
    products: (Product & {
        discount?: {
            amount: number;
            validUntil: Date;
        };
        rating?: {
            average: number;
            reviews: number;
        };
        specifications?: {
            color: string;
            sizes_available: string[];
        };
        shipping?: {
            cost: number;
            estimatedDelivery: string;
        };
        reviews?: {
            userId: string;
            reviewText: string;
            rating: number;
            createdAt: Date;
        }[];
        returnPolicy?: {
            returnable: boolean;
            returnPeriod: string;
            conditions: string;
        };
        warranty?: {
            period: string;
            coverage: string;
        };
    })[];
};
