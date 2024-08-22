import { config } from "dotenv";
import { db } from "@/lib/db";
import {
    Discount,
    Product,
    ProductReview,
    Rating,
    ReturnPolicy,
    Shipping,
    Specification,
    Warranty,
} from "@prisma/client";

config({ path: ".env.local" });

type ProductWithoutTimestamps = Omit<Product, "createdAt" | "updatedAt">;

const SEED_USERS = [
    {
        id: "user1",
        email: "john.doe@example.com",
        password: "hashed-password-1",
        firstName: "John",
        lastName: "Doe",
        // Include other fields if necessary
    },
    {
        id: "user2",
        email: "jane.smith@example.com",
        password: "hashed-password-2",
        firstName: "Jane",
        lastName: "Smith",
        // Include other fields if necessary
    }
];

const SEED_SPECIFICATIONS: Specification[] = [
    {
        id: "1", // This ID corresponds to "specificationId" in SEED_PRODUCTS
        weight: "2kg",
        dimensions: "30 x 20 x 10 cm",
        color: "Brown",
        material: "Chicken, Vegetables, Vitamins",
        packaging: "Resealable Bag",
        connectivity: null,
        storage: null,
    },
    {
        id: "2", // This ID corresponds to "specificationId" in SEED_PRODUCTS
        weight: "4.5kg",
        dimensions: "390 x 104 x 260 mm",
        color: "White/Black",
        material: null,
        packaging: null,
        connectivity: "HDMI 2.1, USB Type-A, USB Type-C",
        storage: "825GB SSD",
    },
];

const SEED_RATINGS: Rating[] = [
    {
        id: "1", // This ID corresponds to "ratingId" in SEED_PRODUCTS
        average: 4.8,
        reviews: 150,
    },
    {
        id: "2", // This ID corresponds to "ratingId" in SEED_PRODUCTS
        average: 4.9,
        reviews: 250,
    },
];

const SEED_DISCOUNT: Discount[] = [
    {
        id: "1", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-09-30T23:59:59Z"),
        productId: "67811",
    },
    {
        id: "2", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67898",
    },
];

const SEED_PRODUCTREVIEWS: ProductReview[] = [
    {
        id: "1", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user1",
        productId: "67811",
        rating: 5,
        comment: "Excellent quality! My dog loves it.",
        date: new Date(),
    },
    {
        id: "2", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67898",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
];

const SEED_SHIPPING: Shipping[] = [
    {
        id: "1", // This ID corresponds to "shippingId" in SEED_PRODUCTS
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "2", // This ID corresponds to "shippingId" in SEED_PRODUCTS
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
];

const SEED_RETURNPOLICY: ReturnPolicy[] = [
    {
        id: "1", // This ID corresponds to "returnPolicyId" in SEED_PRODUCTS
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "2", // This ID corresponds to "returnPolicyId" in SEED_PRODUCTS
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
];

const SEED_WARRANTIES: Warranty[] = [
    {
        id: "1", // This ID corresponds to "warrantyId" in SEED_PRODUCTS
        duration: "2 years",
        coverage: "Full coverage for manufacturer defects",
    },
    {
        id: "2", // This ID corresponds to "warrantyId" in SEED_PRODUCTS
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
];

const SEED_PRODUCTS: Omit<Product, "createdAt" | "updatedAt">[] = [
    {
        id: "67811",
        name: "Premium Dog Food",
        description: "High-quality dog food with real chicken, vegetables, and essential vitamins for balanced nutrition.",
        price: 49.99,
        initialPrice: 69.99,
        currency: "USD",
        brand: "DoggieDelights",
        category: "Pet Supplies",
        subcategory: "Dog Food",
        availability: "In Stock",
        stockQuantity: 200,
        images: [
            "/home/category/dog-food.png",
            "/home/category/dog-food.png",
            "/home/category/dog-food.png",
            "/home/category/dog-food.png",
        ],
        ratingId: "1", // Corresponds to SEED_RATINGS
        features: [
            "Real Chicken as the First Ingredient",
            "No Artificial Preservatives",
            "Contains Omega Fatty Acids for Healthy Skin",
            "Rich in Antioxidants for Immune Support",
            "Suitable for All Dog Breeds",
        ],
        specificationId: "1", // Corresponds to SEED_SPECIFICATIONS
        discountId: "1", // Corresponds to SEED_DISCOUNT
        reviewsId: "1", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "1", // Corresponds to SEED_SHIPPING
        returnPolicyId: "1", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "1", // Corresponds to SEED_WARRANTIES
        isNew: false,
    },
    {
        id: "67898",
        name: "PlayStation 5 Gamepad",
        description:
            "The PlayStation 5 Standard Edition offers cutting-edge gaming performance with ultra-high-speed SSD, ray tracing, and 4K gaming.",
        price: 499.99,
        initialPrice: 499.99,
        currency: "USD",
        brand: "Sony",
        category: "Electronics",
        subcategory: "Gaming Consoles",
        availability: "In Stock",
        stockQuantity: 30,
        images: [
            "/home/category/ps5-pad.png",
            "/home/category/ps5-pad.png",
            "/home/category/ps5-pad.png",
            "/home/category/ps5-pad.png",
        ],
        ratingId: "2", // Corresponds to SEED_RATINGS
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Backward Compatibility",
            "DualSense Wireless Controller",
        ],
        specificationId: "2", // Corresponds to SEED_SPECIFICATIONS
        discountId: "2", // Corresponds to SEED_DISCOUNT
        reviewsId: "2", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "2", // Corresponds to SEED_SHIPPING
        returnPolicyId: "2", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "2", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
];

// Generate Related Products Seed Data
const generateRelatedProducts = (products: ProductWithoutTimestamps[]) => {
    const relatedProducts: {
        id: string;
        relatedProductId: string;
        productId: string;
    }[] = [];

    products.forEach((product) => {
        const related = products.filter(
            (p) =>
                p.id !== product.id &&
                (p.category === product.category || p.subcategory === product.subcategory)
        );

        related.forEach((relProduct) => {
            relatedProducts.push({
                id: `related-${product.id}-${relProduct.id}`,
                relatedProductId: relProduct.id,
                productId: product.id,
            });
        });
    });

    return relatedProducts;
};

const SEED_RELATEDPRODUCTS = generateRelatedProducts(SEED_PRODUCTS as ProductWithoutTimestamps[]);
const main = async () => {
    try {
        // Reset the database
        await db.user.deleteMany();
        await db.rating.deleteMany();
        await db.specification.deleteMany();
        await db.discount.deleteMany();
        await db.relatedProduct.deleteMany();
        await db.productReview.deleteMany();
        await db.shipping.deleteMany();
        await db.returnPolicy.deleteMany();
        await db.warranty.deleteMany();
        await db.product.deleteMany();

        // Seed data
        await db.user.createMany({ data: SEED_USERS });
        await db.returnPolicy.createMany({ data: SEED_RETURNPOLICY });
        await db.shipping.createMany({ data: SEED_SHIPPING });
        await db.rating.createMany({ data: SEED_RATINGS });
        await db.specification.createMany({ data: SEED_SPECIFICATIONS });
        await db.warranty.createMany({ data: SEED_WARRANTIES });
        await db.product.createMany({ data: SEED_PRODUCTS });

        // Ensure products are created before seeding discounts
        await db.discount.createMany({ data: SEED_DISCOUNT });
        await db.relatedProduct.createMany({ data: SEED_RELATEDPRODUCTS });
        await db.productReview.createMany({ data: SEED_PRODUCTREVIEWS });

        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};


main()
    .then(() => process.exit(0))
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
