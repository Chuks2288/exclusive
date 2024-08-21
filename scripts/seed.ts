import { config } from "dotenv";
import { db } from "@/lib/db";
import { Discount, Product, ProductReview, Rating, ReturnPolicy, Shipping, Specification, Warranty } from "@prisma/client";

config({ path: ".env.local" });

type ProductWithoutTimestamps = Omit<Product, 'createdAt' | 'updatedAt'>;

const SEED_SPECIFICATIONS: Specification[] = [
    {
        id: "spec1",
        weight: "2kg",
        dimensions: "30 x 20 x 10 cm",
        color: "Brown",
        material: "Chicken, Vegetables, Vitamins",
        packaging: "Resealable Bag",
        connectivity: null, // or provide a value if applicable
        storage: null // or provide a value if applicable
    },
    {
        id: "spec2",
        weight: "4.5kg",
        dimensions: "390 x 104 x 260 mm",
        color: "White/Black",
        material: null, // or provide a value if applicable
        packaging: null, // or provide a value if applicable
        connectivity: "HDMI 2.1, USB Type-A, USB Type-C",
        storage: "825GB SSD"
    }
];


const SEED_RATINGS: Rating[] = [
    {
        id: "rating1",
        average: 4.8,
        reviews: 150
    },
    {
        id: "rating2",
        average: 4.9,
        reviews: 250
    }
];

const SEED_DISCOUNT: Discount[] = [
    {
        id: "discountId1",
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-09-30T23:59:59Z"),
        productId: "67811",
    },
    {
        id: "discountId2",
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67898",
    }
];

const SEED_PRODUCTREVIEWS: ProductReview[] = [
    {
        id: "review1",
        userId: "user1",
        productId: "67811",
        rating: 5,
        comment: "Excellent quality! My dog loves it.",
        date: new Date(),
    },
    {
        id: "review2",
        userId: "user2",
        productId: "67898",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    }
];

const SEED_SHIPPING: Shipping[] = [
    {
        id: "shipping1",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days"
    },
    {
        id: "shipping2",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days"
    }
];

const SEED_RETURNPOLICY: ReturnPolicy[] = [
    {
        id: "policy1",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging"
    },
    {
        id: "policy2",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging"
    }
];

const SEED_WARRANTIES: Warranty[] = [
    {
        id: "warranty1",
        duration: "2 years",
        coverage: "Full coverage for manufacturer defects",
    },
    {
        id: "warranty2",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    }
];

const SEED_PRODUCTS: Omit<Product, 'createdAt' | 'updatedAt'>[] = [
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
        ratingId: "rating1",
        features: [
            "Real Chicken as the First Ingredient",
            "No Artificial Preservatives",
            "Contains Omega Fatty Acids for Healthy Skin",
            "Rich in Antioxidants for Immune Support",
            "Suitable for All Dog Breeds"
        ],
        specificationId: "spec1",
        discountId: "discountId1",
        reviewsId: "review1",
        shippingId: "shipping1",
        returnPolicyId: "policy1",
        warrantyId: "warranty1",
        isNew: false
    },
    {
        id: "67898",
        name: "PlayStation 5 Gamepad",
        description: "The PlayStation 5 Standard Edition offers cutting-edge gaming performance with ultra-high-speed SSD, ray tracing, and 4K gaming.",
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
        ratingId: "rating2",
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Backward Compatibility",
            "DualSense Wireless Controller"
        ],
        specificationId: "spec2",
        discountId: "discountId2",
        reviewsId: "review2",
        shippingId: "shipping2",
        returnPolicyId: "policy2",
        warrantyId: "warranty2",
        isNew: true
    }
];

// Generate Related Products Seed Data
const generateRelatedProducts = (products: ProductWithoutTimestamps[]) => {
    const relatedProducts: { id: string; relatedProductId: string; productId: string }[] = [];

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
        await db.returnPolicy.createMany({ data: SEED_RETURNPOLICY });
        await db.shipping.createMany({ data: SEED_SHIPPING });
        await db.rating.createMany({ data: SEED_RATINGS });
        await db.specification.createMany({ data: SEED_SPECIFICATIONS });
        await db.discount.createMany({ data: SEED_DISCOUNT });
        await db.relatedProduct.createMany({ data: SEED_RELATEDPRODUCTS });
        await db.productReview.createMany({ data: SEED_PRODUCTREVIEWS });
        await db.warranty.createMany({ data: SEED_WARRANTIES });
        await db.product.createMany({ data: SEED_PRODUCTS });

        console.log("Seed completed successfully");
    } catch (error) {
        console.error("Error during seed:", error);
        process.exit(1);
    }
};

main();
