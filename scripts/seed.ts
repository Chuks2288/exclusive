// import { config } from "dotenv";
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

// config({ path: ".env.local" });

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
    },
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
    {
        id: "3",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "4",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "5",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "6",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "7",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "8",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "9",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "10",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "11",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "12",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "13",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "14",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "15",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "16",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "17",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "18",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "19",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "20",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "21",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "22",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "23",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "24",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "25",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "26",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "27",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "28",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "29",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "30",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "31",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "32",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "33",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "34",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "35",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "36",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "37",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "38",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "39",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "40",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "41",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "42",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "43",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "44",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "45",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "46",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "47",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "48",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    },
    {
        id: "49",
        weight: "475g",
        dimensions: "129 x 101 x 77 mm",
        color: "Black",
        material: "Plastic and Metal",
        packaging: null,
        connectivity: null,
        storage: null,
    }
];

const SEED_RATINGS: Rating[] = [
    {
        id: "1",
        average: 4.8,
        reviews: 150,
    },
    {
        id: "2",
        average: 4.9,
        reviews: 250,
    },
    {
        id: "3",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "4",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "5",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "6",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "7",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "8",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "9",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "10",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "11",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "12",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "13",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "14",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "15",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "16",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "17",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "18",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "19",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "20",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "21",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "22",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "23",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "24",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "25",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "26",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "27",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "28",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "29",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "30",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "31",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "32",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "33",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "34",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "35",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "36",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "37",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "38",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "39",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "40",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "41",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "42",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "43",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "44",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "45",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "46",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "47",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "48",
        average: 4.6,
        reviews: 120,
    },
    {
        id: "49",
        average: 4.6,
        reviews: 120,
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
        productId: "678985",
    },
    {
        id: "3", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67812",
    },
    {
        id: "4", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67813",
    },
    {
        id: "5", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67814",
    },
    {
        id: "6", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67815",
    },
    {
        id: "7", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67816",
    },
    {
        id: "8", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67817",
    },
    {
        id: "9", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67818",
    },
    {
        id: "10", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67819",
    },
    {
        id: "11", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67820",
    },
    {
        id: "12", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67821",
    },
    {
        id: "13", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67822",
    },
    {
        id: "14", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67824",
    },
    {
        id: "15", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67825",
    },
    {
        id: "16", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67826",
    },
    {
        id: "17", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67827",
    },
    {
        id: "18", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67828",
    },
    {
        id: "19", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67829",
    },
    {
        id: "20", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67830",
    },
    {
        id: "21", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67831",
    },
    {
        id: "22", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67832",
    },
    {
        id: "23", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67836",
    },
    {
        id: "24", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67838",
    },
    {
        id: "25", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67839",
    },
    {
        id: "26", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "678899",
    },
    {
        id: "27", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "6783009",
    },
    {
        id: "28", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67840",
    },
    {
        id: "29", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67841",
    },
    {
        id: "30", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67842",
    },
    {
        id: "31", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67843",
    },
    {
        id: "32", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "6784500",
    },
    {
        id: "33", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67845",
    },
    {
        id: "34", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67846",
    },
    {
        id: "35", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67848",
    },
    {
        id: "36", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67849",
    },
    {
        id: "37", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "6780000",
    },
    {
        id: "38", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67801784",
    },
    {
        id: "39", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67802111",
    },
    {
        id: "41", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67803653",
    },
    {
        id: "42", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "678041234",
    },
    {
        id: "43", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "678052233",
    },
    {
        id: "44", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "678098096",
    },
    {
        id: "45", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "678044455567",
    },
    {
        id: "46", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "6780800089",
    },
    {
        id: "47", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "6780456569",
    },
    {
        id: "48", // This ID corresponds to "discountId" in SEED_PRODUCTS
        amount: 10,
        type: "percentage",
        validUntil: new Date("2024-08-31T23:59:59Z"),
        productId: "67810878956",
    },
    // {
    //     id: "49", // This ID corresponds to "discountId" in SEED_PRODUCTS
    //     amount: 10,
    //     type: "percentage",
    //     validUntil: new Date("2024-08-31T23:59:59Z"),
    //     productId: "67810",
    // },
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
        productId: "678985",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "3", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67812",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "4", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67813",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "5", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67814",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "6", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67815",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "7", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67816",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "8", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67817",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "9", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67818",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "10", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67819",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "11", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67820",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "12", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67821",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "13", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67822",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "14", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67824",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "15", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67825",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "16", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67826",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "17", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67827",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "18", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67828",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "19", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67829",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "20", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67830",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "21", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67831",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "22", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67832",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "23", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67836",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "24", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67838",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "25", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67839",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "26", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "678899",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "27", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "6783009",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "28", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67840",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "29", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67841",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "30", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67842",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "31", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67843",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "32", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "6784500",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "33", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67845",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "34", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67846",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "35", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67848",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "36", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67849",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "37", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "6780000",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "38", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67801784",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "39", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67802111",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    // {
    //     id: "40", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
    //     userId: "user2",
    //     productId: "67803",
    //     rating: 4,
    //     comment: "Great console, but a bit expensive.",
    //     date: new Date(),
    // },
    {
        id: "41", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67803653",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "42", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "678041234",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "43", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "678052233",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "44", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "678098096",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "45", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "678044455567",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "46", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "6780800089",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "47", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "6780456569",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    {
        id: "48", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
        userId: "user2",
        productId: "67810878956",
        rating: 4,
        comment: "Great console, but a bit expensive.",
        date: new Date(),
    },
    // {
    //     id: "49", // This ID corresponds to "reviewsId" in SEED_PRODUCTS
    //     userId: "user2",
    //     productId: "67810",
    //     rating: 4,
    //     comment: "Great console, but a bit expensive.",
    //     date: new Date(),
    // },
];

const SEED_SHIPPING: Shipping[] = [
    {
        id: "1",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "2",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "3",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "4",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "5",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "6",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "7",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "8",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "9",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "10",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "11",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "12",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "13",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "14",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "15",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "16",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "17",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "18",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "19",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "20",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "21",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "22",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "23",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "24",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "25",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "26",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "27",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "28",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "29",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "30",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "31",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "32",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "33",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "34",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "35",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "36",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "37",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "38",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "39",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "40",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "41",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "42",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "43",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "44",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "45",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "46",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "47",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "48",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
    {
        id: "49",
        weight: "5kg",
        dimensions: "400 x 120 x 270 mm",
        cost: 19.99,
        deliveryTime: "3-5 business days",
    },
];

const SEED_RETURNPOLICY: ReturnPolicy[] = [
    {
        id: "1",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "2",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "3",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "4",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "5",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "6",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "7",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "8",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "9",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "10",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "11",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "12",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "13",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "14",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "15",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "16",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "17",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "18",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "19",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "20",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "21",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "22",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "23",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "24",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "25",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "26",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "27",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "28",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "29",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "30",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "31",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "32",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "33",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "34",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "35",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "36",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "37",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "38",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "39",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "40",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "41",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "42",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "43",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "44",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "45",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "46",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "47",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "48",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
    {
        id: "49",
        returnable: true,
        returnPeriod: "30 days",
        conditions: "Product must be unopened and in original packaging",
    },
];

const SEED_WARRANTIES: Warranty[] = [
    {
        id: "1",
        duration: "2 years",
        coverage: "Full coverage for manufacturer defects",
    },
    {
        id: "2",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "3",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "4",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "5",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "6",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "7",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "8",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "9",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "10",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "11",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "12",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "13",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "14",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "15",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "16",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "17",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "18",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "19",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "20",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "21",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "22",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "23",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "24",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "25",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "26",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "27",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "28",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "29",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "30",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "31",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "32",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "33",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "34",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "35",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "36",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "37",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "38",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "39",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "40",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "41",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "42",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "43",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "44",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "45",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "46",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "47",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "48",
        duration: "1 year",
        coverage: "Limited coverage for parts and labor",
    },
    {
        id: "49",
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
        id: "678985",
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
    {
        id: "67812",
        name: "Canon EOS Rebel T7",
        description: "A versatile and easy-to-use DSLR camera with a 24.1MP sensor, built-in Wi-Fi, and Full HD video recording. Ideal for photography enthusiasts.",
        price: 499.99,
        "initialPrice": 599.99,
        "currency": "USD",
        "brand": "Canon",
        "category": "Electronics",
        "subcategory": "Cameras",
        "availability": "In Stock",
        "stockQuantity": 50,
        "images": [
            "/home/category/canon-camera.png",
            "/home/category/canon-camera.png",
            "/home/category/canon-camera.png",
            "/home/category/canon-camera.png",
        ],
        "ratingId": "3",
        "features": [
            "24.1MP APS-C Sensor",
            "Built-in Wi-Fi and Bluetooth",
            "Full HD 1080p Video Recording",
            "9-Point Autofocus System",
            "Integrated On-Camera Guide"
        ],
        specificationId: "3", // Corresponds to SEED_SPECIFICATIONS
        discountId: "3", // Corresponds to SEED_DISCOUNT
        reviewsId: "3", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "3", // Corresponds to SEED_SHIPPING
        returnPolicyId: "3", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "3", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "67813",
        "name": "Asus ROG Strix G15",
        "description": "High-performance gaming laptop featuring an Intel Core i7 processor, NVIDIA GeForce RTX 3070, and a 15.6\" Full HD display with a 144Hz refresh rate.",
        "price": 1399.99,
        "initialPrice": 1599.99,
        "currency": "USD",
        "brand": "Asus",
        "category": "Electronics",
        "subcategory": "Laptops",
        "availability": "In Stock",
        "stockQuantity": 30,
        "images": [
            "/home/category/asus-gaming-laptop.png",
            "/home/category/asus-gaming-laptop.png",
            "/home/category/asus-gaming-laptop.png",
            "/home/category/asus-gaming-laptop.png",
        ],
        "ratingId": "4",
        "features": [
            "Intel Core i7 Processor",
            "NVIDIA GeForce RTX 3070",
            "15.6\" Full HD Display",
            "144Hz Refresh Rate",
            "16GB RAM"
        ], specificationId: "4", // Corresponds to SEED_SPECIFICATIONS
        discountId: "4", // Corresponds to SEED_DISCOUNT
        reviewsId: "4", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "4", // Corresponds to SEED_SHIPPING
        returnPolicyId: "4", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "4", // Corresponds to SEED_WARRANTIES
        "isNew": true
    },
    {
        id: "67814",
        "name": "Curology Skincare Set",
        "description": "A complete skincare set including a customized prescription formula, cleanser, moisturizer, and sunscreen, designed to address acne and skincare needs.",
        "price": 59.99,
        "initialPrice": 75.00,
        "currency": "USD",
        "brand": "Curology",
        "category": "Beauty",
        "subcategory": "Skincare",
        "availability": "In Stock",
        "stockQuantity": 150,
        "images": [
            "/home/category/curology-product-set.png",
            "/home/category/curology-product-set.png",
            "/home/category/curology-product-set.png",
            "/home/category/curology-product-set.png",
        ],
        "ratingId": "5",
        "features": [
            "Customized Prescription Formula",
            "Gentle Cleanser",
            "Hydrating Moisturizer",
            "Broad-Spectrum Sunscreen SPF 30",
            "Suitable for All Skin Types"
        ],
        specificationId: "5", // Corresponds to SEED_SPECIFICATIONS
        discountId: "5", // Corresponds to SEED_DISCOUNT
        reviewsId: "5", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "5", // Corresponds to SEED_SHIPPING
        returnPolicyId: "5", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "5", // Corresponds to SEED_WARRANTIES
        "isNew": false
    },
    {
        id: "67815",
        "name": "Kids Electric Ride-On Car",
        "description": "Battery-operated electric ride-on car with realistic design, adjustable seats, and working headlights. Suitable for kids aged 3-6 years.",
        "price": 229.99,
        "initialPrice": 299.99,
        "currency": "USD",
        "brand": "ToyDrive",
        "category": "Toys",
        "subcategory": "Ride-On Cars",
        "availability": "In Stock",
        "stockQuantity": 75,
        "images": [
            "/home/category/kids-electric-car.png",
            "/home/category/kids-electric-car.png",
            "/home/category/kids-electric-car.png",
            "/home/category/kids-electric-car.png",
        ],
        "ratingId": "6",
        "features": [
            "Realistic Design",
            "Adjustable Seats",
            "Working Headlights",
            "MP3 Player Input",
            "Remote Control for Parents"
        ],
        specificationId: "6", // Corresponds to SEED_SPECIFICATIONS
        discountId: "6", // Corresponds to SEED_DISCOUNT
        reviewsId: "6", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "6", // Corresponds to SEED_SHIPPING
        returnPolicyId: "6", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "6", // Corresponds to SEED_WARRANTIES
        "isNew": true
    },
    {
        id: "67816",
        "name": "Pro Soccer Cleats",
        "description": "High-performance soccer cleats designed for speed, traction, and comfort. Suitable for both grass and artificial turf surfaces.",
        "price": 129.99,
        "initialPrice": 159.99,
        "currency": "USD",
        "brand": "KickMaster",
        "category": "Sports",
        "subcategory": "Soccer",
        "availability": "In Stock",
        "stockQuantity": 150,
        "images": [
            "/home/category/soccer-cleats.png",
            "/home/category/soccer-cleats.png",
            "/home/category/soccer-cleats.png",
            "/home/category/soccer-cleats.png",
        ],
        "ratingId": "7",
        "features": [
            "Lightweight Design",
            "Enhanced Traction",
            "Breathable Upper",
            "Cushioned Insole",
            "Firm Ground Soleplate"
        ],
        specificationId: "7", // Corresponds to SEED_SPECIFICATIONS
        discountId: "7", // Corresponds to SEED_DISCOUNT
        reviewsId: "7", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "7", // Corresponds to SEED_SHIPPING
        returnPolicyId: "7", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "7", // Corresponds to SEED_WARRANTIES
        "isNew": true
    },
    {
        id: "67817",
        "name": "Pro USB Game Pad",
        "description": "Ergonomic USB game pad with dual vibration motors, responsive buttons, and customizable controls. Compatible with PC and gaming consoles.",
        "price": 39.99,
        "initialPrice": 49.99,
        "currency": "USD",
        "brand": "GameMaster",
        "category": "Electronics",
        "subcategory": "Gaming Accessories",
        "availability": "In Stock",
        "stockQuantity": 200,
        "images": [
            "/home/category/usb-game-pad.png",
            "/home/category/usb-game-pad.png",
            "/home/category/usb-game-pad.png",
            "/home/category/usb-game-pad.png",
        ],
        "ratingId": "8",
        "features": [
            "Dual Vibration Motors",
            "Responsive Buttons",
            "Customizable Controls",
            "Ergonomic Design",
            "Plug-and-Play"
        ],
        specificationId: "8", // Corresponds to SEED_SPECIFICATIONS
        discountId: "8", // Corresponds to SEED_DISCOUNT
        reviewsId: "8", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "8", // Corresponds to SEED_SHIPPING
        returnPolicyId: "8", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "8", // Corresponds to SEED_WARRANTIES
        "isNew": true
    },
    {
        id: "67818",
        "name": "Classic Satin Bomber Jacket",
        "description": "Stylish satin bomber jacket with a smooth finish, ribbed cuffs, and a zip-up front. Perfect for casual wear and layering.",
        "price": 79.99,
        "initialPrice": 99.99,
        "currency": "USD",
        "brand": "UrbanWear",
        "category": "Clothing",
        "subcategory": "Jackets",
        "availability": "In Stock",
        "stockQuantity": 120,
        "images": [
            "/home/category/satin-jacket.png",
            "/home/category/satin-jacket.png",
            "/home/category/satin-jacket.png",
            "/home/category/satin-jacket.png",
        ],
        "ratingId": "9",
        "features": [
            "Smooth Satin Finish",
            "Ribbed Cuffs and Hem",
            "Zip-Up Front",
            "Side Pockets",
            "Lightweight and Comfortable"
        ],
        specificationId: "9", // Corresponds to SEED_SPECIFICATIONS
        discountId: "9", // Corresponds to SEED_DISCOUNT
        reviewsId: "9", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "9", // Corresponds to SEED_SHIPPING
        returnPolicyId: "9", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "9", // Corresponds to SEED_WARRANTIES
        "isNew": true
    },
    // BEST PRODUCTS
    {
        id: "67819",
        "name": "Arctic Expedition North Coat",
        "description": "Premium insulated North coat designed for extreme cold weather. Features a waterproof outer shell, windproof technology, and detachable hood with faux fur trim.",
        "price": 399.99,
        "initialPrice": 499.99,
        "currency": "USD",
        "brand": "ArcticExpedition",
        "category": "Clothing",
        "subcategory": "Winter Coats",
        "availability": "In Stock",
        "stockQuantity": 50,
        "images": [
            "/home/category/north-coat.png",
            "/home/category/north-coat.png",
            "/home/category/north-coat.png",
            "/home/category/north-coat.png",
        ],
        "ratingId": "10",
        "features": [
            "Waterproof Outer Shell",
            "Windproof Technology",
            "Detachable Hood with Faux Fur Trim",
            "Insulated with Down Feather",
            "Multiple Pockets with Fleece Lining"
        ],
        specificationId: "10", // Corresponds to SEED_SPECIFICATIONS
        discountId: "10", // Corresponds to SEED_DISCOUNT
        reviewsId: "10", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "10", // Corresponds to SEED_SHIPPING
        returnPolicyId: "10", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "10", // Corresponds to SEED_WARRANTIES,
        "isNew": true
    },
    {
        id: "67820",
        "name": "Gucci GG Marmont Small Matelassé Bag",
        "description": "Luxurious Gucci GG Marmont small matelassé shoulder bag, crafted from quilted leather with the iconic GG logo and antique gold-tone hardware.",
        "price": 1899.99,
        "initialPrice": 2199.99,
        "currency": "USD",
        "brand": "Gucci",
        "category": "Accessories",
        "subcategory": "Handbags",
        "availability": "In Stock",
        "stockQuantity": 30,
        "images": [
            "/home/category/gucci-bag.png",
            "/home/category/gucci-bag.png",
            "/home/category/gucci-bag.png",
            "/home/category/gucci-bag.png",
        ],
        "ratingId": "11",
        "features": [
            "Quilted Leather",
            "Iconic GG Logo",
            "Antique Gold-Tone Hardware",
            "Chain Shoulder Strap",
            "Suede-Like Microfiber Lining"
        ],
        specificationId: "11", // Corresponds to SEED_SPECIFICATIONS
        discountId: "11", // Corresponds to SEED_DISCOUNT
        reviewsId: "11", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "11", // Corresponds to SEED_SHIPPING
        returnPolicyId: "11", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "11", // Corresponds to SEED_WARRANTIES
        "isNew": true
    },
    {
        id: "67821",
        "name": "HyperCool CPU Cooler",
        "description": "High-performance CPU cooler with RGB lighting, dual fans, and heat pipes for optimal cooling in gaming rigs and high-end PCs.",
        "price": 69.99,
        "initialPrice": 89.99,
        "currency": "USD",
        "brand": "TechMaster",
        "category": "Electronics",
        "subcategory": "Computer Components",
        "availability": "In Stock",
        "stockQuantity": 100,
        "images": [
            "/home/category/cpu-cooler.png",
            "/home/category/cpu-cooler.png",
            "/home/category/cpu-cooler.png",
            "/home/category/cpu-cooler.png",
        ],
        "ratingId": "12",
        "features": [
            "RGB Lighting",
            "Dual Fans",
            "Heat Pipes",
            "Easy Installation",
            "Compatible with Intel & AMD"
        ],
        specificationId: "12", // Corresponds to SEED_SPECIFICATIONS
        discountId: "12", // Corresponds to SEED_DISCOUNT
        reviewsId: "12", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "12", // Corresponds to SEED_SHIPPING
        returnPolicyId: "12", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "12", // Corresponds to SEED_WARRANTIES
        "isNew": true
    },
    {
        id: "67822",
        "name": "Modern Wood Bookshelf",
        "description": "Sleek and sturdy wooden bookshelf with adjustable shelves, perfect for organizing books, décor, and more. Fits well in any room.",
        "price": 129.99,
        "initialPrice": 159.99,
        "currency": "USD",
        "brand": "HomeStyle",
        "category": "Furniture",
        "subcategory": "Storage",
        "availability": "In Stock",
        "stockQuantity": 80,
        "images": [
            "/home/category/bookshelf.png",
            "/home/category/bookshelf.png",
            "/home/category/bookshelf.png",
            "/home/category/bookshelf.png",
        ],
        "ratingId": "13",
        "features": [
            "Adjustable Shelves",
            "Sturdy Construction",
            "Smooth Wood Finish",
            "Easy to Assemble",
            "Modern Design"
        ],
        specificationId: "13", // Corresponds to SEED_SPECIFICATIONS
        discountId: "13", // Corresponds to SEED_DISCOUNT
        reviewsId: "13", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "13", // Corresponds to SEED_SHIPPING
        returnPolicyId: "13", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "13", // Corresponds to SEED_WARRANTIES
        "isNew": false
    },


    {
        id: "67823",
        name: "Wireless Gaming Keyboard",
        description: "High-performance wireless mechanical keyboard with customizable RGB lighting, responsive switches, and durable build quality.",
        price: 129.99,
        initialPrice: 182.19,
        currency: "USD",
        brand: "KeyMaster",
        category: "Electronics",
        subcategory: "Keyboards",
        availability: "In Stock",
        stockQuantity: 75,
        images: [
            "/home/flash-sales/gaming-keyboard.svg",
            "/home/flash-sales/gaming-keyboard.svg",
            "/home/flash-sales/gaming-keyboard.svg",
            "/home/flash-sales/gaming-keyboard.svg",
        ],
        ratingId: "14",
        features: [
            "Wireless Connectivity",
            "Mechanical Switches",
            "Customizable RGB Lighting",
            "N-Key Rollover",
            "Long Battery Life"
        ],
        specificationId: "14", // Corresponds to SEED_SPECIFICATIONS
        discountId: "14", // Corresponds to SEED_DISCOUNT
        reviewsId: "14", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "14", // Corresponds to SEED_SHIPPING
        returnPolicyId: "14", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "14", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "67824", // Updated ID
        name: "UltraWide Gaming Monitor",
        description: "34-inch UltraWide curved gaming monitor with 144Hz refresh rate, 1ms response time, and G-Sync support.",
        price: 399.99,
        initialPrice: 489.10,
        currency: "USD",
        brand: "ScreenMaster",
        category: "Electronics",
        subcategory: "Monitors",
        availability: "In Stock",
        stockQuantity: 30,
        images: [
            "/home/flash-sales/gaming-monitor.svg",
            "/home/flash-sales/gaming-monitor.svg",
            "/home/flash-sales/gaming-monitor.svg",
            "/home/flash-sales/gaming-monitor.svg",
        ],
        ratingId: "15",
        features: [
            "34-inch UltraWide Display",
            "144Hz Refresh Rate",
            "1ms Response Time",
            "G-Sync Support",
            "HDR10 Compatible"
        ],
        specificationId: "15", // Corresponds to SEED_SPECIFICATIONS
        discountId: "15", // Corresponds to SEED_DISCOUNT
        reviewsId: "15", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "15", // Corresponds to SEED_SHIPPING
        returnPolicyId: "15", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "15", // Corresponds to SEED_WARRANTIES
        isNew: false,
    },
    {
        id: "67825", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 287.12,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "16",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "16", // Corresponds to SEED_SPECIFICATIONS
        discountId: "16", // Corresponds to SEED_DISCOUNT
        reviewsId: "16", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "16", // Corresponds to SEED_SHIPPING
        returnPolicyId: "16", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "16", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "67826", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 309.20,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "17",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "17", // Corresponds to SEED_SPECIFICATIONS
        discountId: "17", // Corresponds to SEED_DISCOUNT
        reviewsId: "17", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "17", // Corresponds to SEED_SHIPPING
        returnPolicyId: "17", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "17", // Corresponds to SEED_WARRANTIES
        isNew: false,
    },
    {
        id: "67827", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "18",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "18", // Corresponds to SEED_SPECIFICATIONS
        discountId: "18", // Corresponds to SEED_DISCOUNT
        reviewsId: "18", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "18", // Corresponds to SEED_SHIPPING
        returnPolicyId: "18", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "18", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    // iphone 
    {
        id: "67828",
        name: "iPhone 14 Pro Max",
        description: "Latest iPhone with A16 Bionic chip, 6.7-inch Super Retina XDR display, and advanced triple-camera system.",
        price: 1099.99,
        initialPrice: 1199.99,
        currency: "USD",
        brand: "Apple",
        category: "Electronics",
        subcategory: "Smartphones",
        availability: "In Stock",
        stockQuantity: 30,
        images: [
            "/home/category/iphone-14-promax.png",
            "/home/category/iphone-14-promax.png",
            "/home/category/iphone-14-promax.png",
            "/home/category/iphone-14-promax.png",
        ],
        ratingId: "19",
        features: [
            "A16 Bionic Chip",
            "6.7-inch Super Retina XDR Display",
            "Triple-Camera System",
            "Ceramic Shield Front Cover",
            "5G Capable"
        ],
        specificationId: "19", // Corresponds to SEED_SPECIFICATIONS
        discountId: "19", // Corresponds to SEED_DISCOUNT
        reviewsId: "19", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "19", // Corresponds to SEED_SHIPPING
        returnPolicyId: "19", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "19", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    {
        id: "67829",
        name: "iPhone 13 Pro Max",
        description: "Powerful iPhone with A15 Bionic chip, 6.7-inch Super Retina XDR display, and ProMotion technology.",
        price: 999.99,
        initialPrice: 1099.99,
        currency: "USD",
        brand: "Apple",
        category: "Electronics",
        subcategory: "Smartphones",
        availability: "In Stock",
        stockQuantity: 25,
        images: [
            "/home/category/iphone-13-promax.png",
            "/home/category/iphone-13-promax.png",
            "/home/category/iphone-13-promax.png",
            "/home/category/iphone-13-promax.png",
        ],
        ratingId: "20",
        features: [
            "A15 Bionic Chip",
            "6.7-inch Super Retina XDR Display",
            "Triple-Camera System",
            "ProMotion Technology",
            "5G Capable"
        ],
        specificationId: "20", // Corresponds to SEED_SPECIFICATIONS
        discountId: "20", // Corresponds to SEED_DISCOUNT
        reviewsId: "20", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "20", // Corresponds to SEED_SHIPPING
        returnPolicyId: "20", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "20", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "67830",
        name: "iPhone 12 Pro Max",
        description: "Previous generation iPhone with A14 Bionic chip, 6.7-inch Super Retina XDR display, and improved camera system.",
        price: 899.99,
        initialPrice: 1099.99,
        currency: "USD",
        brand: "Apple",
        category: "Electronics",
        subcategory: "Smartphones",
        availability: "In Stock",
        stockQuantity: 20,
        images: [
            "/home/category/iphone-12-promax.png",
            "/home/category/iphone-12-promax.png",
            "/home/category/iphone-12-promax.png",
            "/home/category/iphone-12-promax.png",
        ],
        ratingId: "21",
        features: [
            "A14 Bionic Chip",
            "6.7-inch Super Retina XDR Display",
            "Triple-Camera System",
            "Ceramic Shield Front Cover",
            "5G Capable"
        ],
        specificationId: "21", // Corresponds to SEED_SPECIFICATIONS
        discountId: "21", // Corresponds to SEED_DISCOUNT
        reviewsId: "21", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "21", // Corresponds to SEED_SHIPPING
        returnPolicyId: "21", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "21", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    // JBL SPEAKSERS
    {
        id: "67831",
        name: "JBL Charge 5",
        description: "Portable Bluetooth speaker with powerful sound, up to 20 hours of playtime, and waterproof design.",
        price: 149.99,
        initialPrice: 199.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stockQuantity: 50,
        images: [
            "/home/category/jbl-charge-5.png",
            "/home/category/jbl-charge-5.png",
            "/home/category/jbl-charge-5.png",
            "/home/category/jbl-charge-5.png",
        ],
        ratingId: "22",
        features: [
            "Up to 20 Hours Playtime",
            "IP67 Waterproof and Dustproof",
            "Powerbank Function",
            "JBL PartyBoost",
            "Wireless Bluetooth Streaming"
        ],
        specificationId: "22", // Corresponds to SEED_SPECIFICATIONS
        discountId: "22", // Corresponds to SEED_DISCOUNT
        reviewsId: "22", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "22", // Corresponds to SEED_SHIPPING
        returnPolicyId: "22", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "22", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    {
        id: "67832",
        name: "JBL Flip 6",
        description: "Compact Bluetooth speaker with bold sound, up to 12 hours of playtime, and rugged design.",
        price: 129.99,
        initialPrice: 179.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stockQuantity: 60,
        images: [
            "/home/category/jbl-flip-6.png",
            "/home/category/jbl-flip-6.png",
            "/home/category/jbl-flip-6.png",
            "/home/category/jbl-flip-6.png",
        ],
        ratingId: "23",
        features: [
            "Up to 12 Hours Playtime",
            "IP67 Waterproof and Dustproof",
            "JBL PartyBoost",
            "Rugged Design",
            "Wireless Bluetooth Streaming"
        ],
        specificationId: "23", // Corresponds to SEED_SPECIFICATIONS
        discountId: "23", // Corresponds to SEED_DISCOUNT
        reviewsId: "23", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "23", // Corresponds to SEED_SHIPPING
        returnPolicyId: "23", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "23", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "67833",
        name: "JBL Pulse 4",
        description: "Bluetooth speaker with 360-degree light show and sound, up to 12 hours of playtime, and waterproof design.",
        price: 199.99,
        initialPrice: 249.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/category/jbl-pulse-4.png",
            "/home/category/jbl-pulse-4.png",
            "/home/category/jbl-pulse-4.png",
            "/home/category/jbl-pulse-4.png",
        ],
        ratingId: "24",
        features: [
            "360-Degree Light Show",
            "Up to 12 Hours Playtime",
            "IPX7 Waterproof",
            "360-Degree Sound",
            "Wireless Bluetooth Streaming"
        ],
        specificationId: "24", // Corresponds to SEED_SPECIFICATIONS
        discountId: "24", // Corresponds to SEED_DISCOUNT
        reviewsId: "24", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "24", // Corresponds to SEED_SHIPPING
        returnPolicyId: "24", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "24", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    {
        id: "67836",
        name: "JBL Xtreme 3",
        description: "High-performance Bluetooth speaker with powerful bass, up to 15 hours of playtime, and rugged waterproof design.",
        price: 299.99,
        initialPrice: 349.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stockQuantity: 35,
        images: [
            "/home/category/jbl-xtreme-3.png",
            "/home/category/jbl-xtreme-3.png",
            "/home/category/jbl-xtreme-3.png",
            "/home/category/jbl-xtreme-3.png",
        ],
        ratingId: "25",
        features: [
            "Up to 15 Hours Playtime",
            "IP67 Waterproof and Dustproof",
            "JBL PartyBoost",
            "Powerful Bass",
            "Wireless Bluetooth Streaming"
        ],
        specificationId: "25", // Corresponds to SEED_SPECIFICATIONS
        discountId: "25", // Corresponds to SEED_DISCOUNT
        reviewsId: "25", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "25", // Corresponds to SEED_SHIPPING
        returnPolicyId: "25", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "25", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    // PLAYSTATION 5
    {
        id: "67838",
        name: "PlayStation 5 Standard Edition",
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
            "/home/category/ps5-standard.png",
            "/home/category/ps5-standard.png",
            "/home/category/ps5-standard.png",
            "/home/category/ps5-standard.png",
        ],
        ratingId: "26",
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Backward Compatibility",
            "DualSense Wireless Controller"
        ],
        specificationId: "26", // Corresponds to SEED_SPECIFICATIONS
        discountId: "26", // Corresponds to SEED_DISCOUNT
        reviewsId: "26", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "26", // Corresponds to SEED_SHIPPING
        returnPolicyId: "26", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "26", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    {
        id: "67839",
        name: "PlayStation 5 Digital Edition",
        description: "The PlayStation 5 Digital Edition provides the same high-performance gaming as the Standard Edition but without a disc drive, allowing for a more streamlined design and digital-only games.",
        price: 399.99,
        initialPrice: 399.99,
        currency: "USD",
        brand: "Sony",
        category: "Electronics",
        subcategory: "Gaming Consoles",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/category/ps5-digital.png",
            "/home/category/ps5-digital.png",
            "/home/category/ps5-digital.png",
            "/home/category/ps5-digital.png",
        ],
        ratingId: "27",
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Digital-Only Gaming",
            "DualSense Wireless Controller"
        ],
        specificationId: "27", // Corresponds to SEED_SPECIFICATIONS
        discountId: "27", // Corresponds to SEED_DISCOUNT
        reviewsId: "27", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "27", // Corresponds to SEED_SHIPPING
        returnPolicyId: "27", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "27", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "678899",
        name: "PlayStation 5 Digital Edition 2",
        description: "The PlayStation 5 Digital Edition provides the same high-performance gaming as the Standard Edition but without a disc drive, allowing for a more streamlined design and digital-only games.",
        price: 399.99,
        initialPrice: 399.99,
        currency: "USD",
        brand: "Sony",
        category: "Electronics",
        subcategory: "Gaming Consoles",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/category/ps5-digital2.png",
            "/home/category/ps5-digital2.png",
            "/home/category/ps5-digital2.png",
            "/home/category/ps5-digital2.png",
        ],
        ratingId: "28",
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Digital-Only Gaming",
            "DualSense Wireless Controller"
        ],
        specificationId: "28", // Corresponds to SEED_SPECIFICATIONS
        discountId: "28", // Corresponds to SEED_DISCOUNT
        reviewsId: "28", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "28", // Corresponds to SEED_SHIPPING
        returnPolicyId: "28", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "28", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "6783009",
        name: "PlayStation 5 Digital Edition 2",
        description: "The PlayStation 5 Digital Edition provides the same high-performance gaming as the Standard Edition but without a disc drive, allowing for a more streamlined design and digital-only games.",
        price: 399.99,
        initialPrice: 399.99,
        currency: "USD",
        brand: "Sony",
        category: "Electronics",
        subcategory: "Gaming Consoles",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/category/ps5-digital3.png",
            "/home/category/ps5-digital3.png",
            "/home/category/ps5-digital3.png",
            "/home/category/ps5-digital3.png",
        ],
        ratingId: "29",
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Digital-Only Gaming",
            "DualSense Wireless Controller"
        ],
        specificationId: "29", // Corresponds to SEED_SPECIFICATIONS
        discountId: "29", // Corresponds to SEED_DISCOUNT
        reviewsId: "29", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "29", // Corresponds to SEED_SHIPPING
        returnPolicyId: "29", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "29", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    // WOMEN CLOTHINGS
    {
        id: "67840",
        name: "Casual Summer Dress",
        description: "A breezy and stylish casual summer dress perfect for warm weather. Features a relaxed fit and lightweight fabric.",
        price: 49.99,
        initialPrice: 69.99,
        currency: "USD",
        brand: "SummerVibe",
        category: "Clothing",
        subcategory: "Dresses",
        availability: "In Stock",
        stockQuantity: 50,
        images: [
            "/home/category/casual-summer-dress.png",
            "/home/category/casual-summer-dress.png",
            "/home/category/casual-summer-dress.png",
            "/home/category/casual-summer-dress.png",
        ],
        ratingId: "30",
        features: [
            "Lightweight Fabric",
            "Relaxed Fit",
            "Short Sleeves",
            "Above-Knee Length",
            "Available in Multiple Colors"
        ],
        specificationId: "30", // Corresponds to SEED_SPECIFICATIONS
        discountId: "30", // Corresponds to SEED_DISCOUNT
        reviewsId: "30", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "30", // Corresponds to SEED_SHIPPING
        returnPolicyId: "30", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "30", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    {
        id: "67841",
        name: "Elegant Evening Gown",
        description: "A luxurious evening gown designed for special occasions. Features a floor-length silhouette with intricate detailing.",
        price: 199.99,
        initialPrice: 249.99,
        currency: "USD",
        brand: "EleganceWear",
        category: "Clothing",
        subcategory: "Gowns",
        availability: "In Stock",
        stockQuantity: 20,
        images: [
            "/home/category/evening-gown.png",
            "/home/category/evening-gown.png",
            "/home/category/evening-gown.png",
            "/home/category/evening-gown.png",
        ],
        ratingId: "31",
        features: [
            "Floor-Length",
            "Intricate Detailing",
            "Elegant Fabric",
            "Adjustable Straps",
            "Available in Various Sizes"
        ],
        specificationId: "31", // Corresponds to SEED_SPECIFICATIONS
        discountId: "31", // Corresponds to SEED_DISCOUNT
        reviewsId: "31", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "31", // Corresponds to SEED_SHIPPING
        returnPolicyId: "31", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "31", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "67842",
        name: "High-Waisted Jeans",
        description: "Classic high-waisted jeans with a slim fit and comfortable stretch. Perfect for everyday wear or dressing up.",
        price: 69.99,
        initialPrice: 89.99,
        currency: "USD",
        brand: "DenimCraft",
        category: "Clothing",
        subcategory: "Jeans",
        availability: "In Stock",
        stockQuantity: 70,
        images: [
            "/home/category/high-waisted-jeans.png",
            "/home/category/high-waisted-jeans.png",
        ],
        ratingId: "32",
        features: [
            "High-Waisted",
            "Slim Fit",
            "Stretch Denim",
            "Five-Pocket Design",
            "Available in Various Washes"
        ],
        specificationId: "32", // Corresponds to SEED_SPECIFICATIONS
        discountId: "32", // Corresponds to SEED_DISCOUNT
        reviewsId: "32", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "32", // Corresponds to SEED_SHIPPING
        returnPolicyId: "32", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "32", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    // RANDOM SPEAKERS
    {
        id: "67843",
        name: "Portable Bluetooth Speaker",
        description: "A compact and waterproof Bluetooth speaker with impressive sound quality and long battery life. Perfect for outdoor adventures.",
        price: 59.99,
        initialPrice: 79.99,
        currency: "USD",
        brand: "SoundWave",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stockQuantity: 100,
        images: [
            "/home/category/portable-bluetooth-speaker.png",
            "/home/category/portable-bluetooth-speaker.png",
            "/home/category/portable-bluetooth-speaker.png",
            "/home/category/portable-bluetooth-speaker.png",
        ],
        ratingId: "33",
        features: [
            "Bluetooth 5.0 Connectivity",
            "Waterproof (IPX7)",
            "12-Hour Battery Life",
            "Built-in Microphone for Calls",
            "Compact and Lightweight"
        ],
        specificationId: "33", // Corresponds to SEED_SPECIFICATIONS
        discountId: "33", // Corresponds to SEED_DISCOUNT
        reviewsId: "33", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "33", // Corresponds to SEED_SHIPPING
        returnPolicyId: "33", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "33", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    {
        id: "6784500",
        name: "Home Theater Speaker System",
        description: "A 5.1 channel home theater speaker system designed to deliver cinematic audio experiences. Includes subwoofer and surround speakers.",
        price: 499.99,
        initialPrice: 599.99,
        currency: "USD",
        brand: "CineSound",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stockQuantity: 30,
        images: [
            "/home/category/home-theater-speaker-system.png",
            "/home/category/home-theater-speaker-system.png",
            "/home/category/home-theater-speaker-system.png",
        ],
        ratingId: "34",
        features: [
            "5.1 Channel Surround Sound",
            "Powerful Subwoofer",
            "Dolby Audio Support",
            "Wireless Connectivity",
            "Easy Setup with HDMI"
        ],
        specificationId: "34", // Corresponds to SEED_SPECIFICATIONS
        discountId: "34", // Corresponds to SEED_DISCOUNT
        reviewsId: "34", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "34", // Corresponds to SEED_SHIPPING
        returnPolicyId: "34", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "34", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "67845",
        name: "Smart Wi-Fi Speaker",
        description: "A sleek smart speaker with built-in voice assistant and high-fidelity sound. Integrates seamlessly with smart home systems.",
        price: 129.99,
        initialPrice: 149.99,
        currency: "USD",
        brand: "SmartSound",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stockQuantity: 75,
        images: [
            "/home/category/smart-wifi-speaker.png",
            "/home/category/smart-wifi-speaker.png",
            "/home/category/smart-wifi-speaker.png",
            "/home/category/smart-wifi-speaker.png",
        ],
        ratingId: "35",
        features: [
            "Built-in Voice Assistant",
            "High-Fidelity Audio",
            "Wi-Fi and Bluetooth Connectivity",
            "Smart Home Integration",
            "Touch Controls"
        ],
        specificationId: "35", // Corresponds to SEED_SPECIFICATIONS
        discountId: "35", // Corresponds to SEED_DISCOUNT
        reviewsId: "35", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "35", // Corresponds to SEED_SHIPPING
        returnPolicyId: "35", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "35", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    // PERFUME
    {
        id: "67846",
        name: "Floral Eau de Parfum",
        description: "A delicate and sophisticated floral fragrance with notes of jasmine, rose, and lily of the valley. Perfect for everyday wear.",
        price: 89.99,
        initialPrice: 99.99,
        currency: "USD",
        brand: "Elegance",
        category: "Fragrances",
        subcategory: "Perfumes",
        availability: "In Stock",
        stockQuantity: 50,
        images: [
            "/home/category/floral-eau-de-parfum.png",
            "/home/category/floral-eau-de-parfum.png",
            "/home/category/floral-eau-de-parfum.png",
            "/home/category/floral-eau-de-parfum.png",
        ],
        ratingId: "36",
        features: [
            "Top Notes: Jasmine, Bergamot",
            "Heart Notes: Rose, Lily of the Valley",
            "Base Notes: Sandalwood, Musk",
            "Long-lasting Fragrance",
            "Elegant Glass Bottle Design"
        ],
        specificationId: "36", // Corresponds to SEED_SPECIFICATIONS
        discountId: "36", // Corresponds to SEED_DISCOUNT
        reviewsId: "36", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "36", // Corresponds to SEED_SHIPPING
        returnPolicyId: "36", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "36", // Corresponds to SEED_WARRANTIES
        isNew: false
    },
    {
        id: "67848",
        name: "Woody Eau de Toilette",
        description: "An invigorating woody fragrance with notes of cedarwood, sandalwood, and vetiver. Ideal for an evening out or special occasions.",
        price: 74.99,
        initialPrice: 84.99,
        currency: "USD",
        brand: "Timeless",
        category: "Fragrances",
        subcategory: "Perfumes",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/category/woody-eau-de-toilette.png",
            "/home/category/woody-eau-de-toilette.png",
            "/home/category/woody-eau-de-toilette.png",
        ],
        ratingId: "37",
        features: [
            "Top Notes: Bergamot, Black Pepper",
            "Heart Notes: Cedarwood, Patchouli",
            "Base Notes: Sandalwood, Vetiver",
            "Sophisticated and Masculine",
            "Durable Bottle with Magnetic Cap"
        ],
        specificationId: "37", // Corresponds to SEED_SPECIFICATIONS
        discountId: "37", // Corresponds to SEED_DISCOUNT
        reviewsId: "37", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "37", // Corresponds to SEED_SHIPPING
        returnPolicyId: "37", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "37", // Corresponds to SEED_WARRANTIES
        isNew: true
    },
    {
        id: "67849",
        name: "Citrus Fresh Eau de Cologne",
        description: "A refreshing and zesty citrus cologne with notes of lemon, grapefruit, and mint. Perfect for a vibrant and energetic start to your day.",
        price: 39.99,
        initialPrice: 49.99,
        currency: "USD",
        brand: "Vivid",
        category: "Fragrances",
        subcategory: "Colognes",
        availability: "In Stock",
        stockQuantity: 80,
        images: [
            "/home/category/citrus-fresh-eau-de-cologne.png",
            "/home/category/citrus-fresh-eau-de-cologne.png",
            "/home/category/citrus-fresh-eau-de-cologne.png",
            "/home/category/citrus-fresh-eau-de-cologne.png",
        ],
        ratingId: "38",
        features: [
            "Top Notes: Lemon, Grapefruit",
            "Heart Notes: Mint, Green Tea",
            "Base Notes: Cedarwood, Amber",
            "Light and Refreshing",
            "Ideal for Daily Use"
        ],
        specificationId: "38", // Corresponds to SEED_SPECIFICATIONS
        discountId: "38", // Corresponds to SEED_DISCOUNT
        reviewsId: "38", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "38", // Corresponds to SEED_SHIPPING
        returnPolicyId: "38", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "38", // Corresponds to SEED_WARRANTIES
        isNew: false
    },

    {
        id: "6780000",
        name: "Wireless Gaming Gamepad",
        description: "Ergonomic wireless gamepad with responsive buttons, dual vibration motors, and customizable controls.",
        price: 59.99,
        initialPrice: 89.10,
        currency: "USD",
        brand: "GameMaster",
        category: "Electronics",
        subcategory: "Gamepads",
        availability: "In Stock",
        stockQuantity: 100,
        "images": [
            "/home/flash-sales/game-pad.svg",
            "/home/flash-sales/game-pad.svg",
            "/home/flash-sales/game-pad.svg",
            "/home/flash-sales/game-pad.svg",
        ],
        "ratingId": "39",
        "features": [
            "Wireless Connectivity",
            "Ergonomic Design",
            "Dual Vibration Motors",
            "Customizable Buttons",
            "Up to 40-hour Battery Life"
        ],
        specificationId: "39", // Corresponds to SEED_SPECIFICATIONS
        discountId: "39", // Corresponds to SEED_DISCOUNT
        reviewsId: "39", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "39", // Corresponds to SEED_SHIPPING
        returnPolicyId: "39", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "39", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "67801784",
        name: "Wireless Gaming Keyboard",
        description: "High-performance wireless mechanical keyboard with customizable RGB lighting, responsive switches, and durable build quality.",
        price: 129.99,
        initialPrice: 182.19,
        currency: "USD",
        brand: "KeyMaster",
        category: "Electronics",
        subcategory: "Keyboards",
        availability: "In Stock",
        stockQuantity: 75,
        images: [
            "/home/flash-sales/gaming-keyboard.svg",
            "/home/flash-sales/gaming-keyboard.svg",
            "/home/flash-sales/gaming-keyboard.svg",
            "/home/flash-sales/gaming-keyboard.svg",
        ],
        ratingId: "40",
        features: [
            "Wireless Connectivity",
            "Mechanical Switches",
            "Customizable RGB Lighting",
            "N-Key Rollover",
            "Long Battery Life"
        ],
        specificationId: "40", // Corresponds to SEED_SPECIFICATIONS
        discountId: "40", // Corresponds to SEED_DISCOUNT
        reviewsId: "40", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "40", // Corresponds to SEED_SHIPPING
        returnPolicyId: "40", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "40", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "67802111", // Updated ID
        name: "UltraWide Gaming Monitor",
        description: "34-inch UltraWide curved gaming monitor with 144Hz refresh rate, 1ms response time, and G-Sync support.",
        price: 399.99,
        initialPrice: 489.10,
        currency: "USD",
        brand: "ScreenMaster",
        category: "Electronics",
        subcategory: "Monitors",
        availability: "In Stock",
        stockQuantity: 30,
        images: [
            "/home/flash-sales/gaming-monitor.svg",
            "/home/flash-sales/gaming-monitor.svg",
            "/home/flash-sales/gaming-monitor.svg",
            "/home/flash-sales/gaming-monitor.svg",
        ],
        ratingId: "41",
        features: [
            "34-inch UltraWide Display",
            "144Hz Refresh Rate",
            "1ms Response Time",
            "G-Sync Support",
            "HDR10 Compatible"
        ],
        specificationId: "41", // Corresponds to SEED_SPECIFICATIONS
        discountId: "41", // Corresponds to SEED_DISCOUNT
        reviewsId: "41", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "41", // Corresponds to SEED_SHIPPING
        returnPolicyId: "41", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "41", // Corresponds to SEED_WARRANTIES
        isNew: false,
    },
    {
        id: "67803653", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 287.12,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "42",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "42", // Corresponds to SEED_SPECIFICATIONS
        discountId: "42", // Corresponds to SEED_DISCOUNT
        reviewsId: "42", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "42", // Corresponds to SEED_SHIPPING
        returnPolicyId: "42", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "42", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "678041234", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 309.20,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "43",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "43", // Corresponds to SEED_SPECIFICATIONS
        discountId: "43", // Corresponds to SEED_DISCOUNT
        reviewsId: "43", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "43", // Corresponds to SEED_SHIPPING
        returnPolicyId: "43", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "43", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "678052233", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "44",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "44", // Corresponds to SEED_SPECIFICATIONS
        discountId: "44", // Corresponds to SEED_DISCOUNT
        reviewsId: "44", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "44", // Corresponds to SEED_SHIPPING
        returnPolicyId: "44", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "44", // Corresponds to SEED_WARRANTIES
        isNew: false,
    },
    {
        id: "678098096", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "45",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "45", // Corresponds to SEED_SPECIFICATIONS
        discountId: "45", // Corresponds to SEED_DISCOUNT
        reviewsId: "45", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "45", // Corresponds to SEED_SHIPPING
        returnPolicyId: "45", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "45", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "678044455567", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "46",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "46", // Corresponds to SEED_SPECIFICATIONS
        discountId: "46", // Corresponds to SEED_DISCOUNT
        reviewsId: "46", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "46", // Corresponds to SEED_SHIPPING
        returnPolicyId: "46", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "46", // Corresponds to SEED_WARRANTIES
        isNew: false,
    },
    {
        id: "6780800089", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "47",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "47", // Corresponds to SEED_SPECIFICATIONS
        discountId: "47", // Corresponds to SEED_DISCOUNT
        reviewsId: "47", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "47", // Corresponds to SEED_SHIPPING
        returnPolicyId: "47", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "47", // Corresponds to SEED_WARRANTIES
        isNew: false,
    },
    {
        id: "6780456569", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "48",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "48", // Corresponds to SEED_SPECIFICATIONS
        discountId: "48", // Corresponds to SEED_DISCOUNT
        reviewsId: "48", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "48", // Corresponds to SEED_SHIPPING
        returnPolicyId: "48", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "48", // Corresponds to SEED_WARRANTIES
        isNew: true,
    },
    {
        id: "67810878956", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stockQuantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        ratingId: "49",
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specificationId: "49", // Corresponds to SEED_SPECIFICATIONS
        discountId: "49", // Corresponds to SEED_DISCOUNT
        reviewsId: "49", // Corresponds to SEED_PRODUCTREVIEWS
        shippingId: "49", // Corresponds to SEED_SHIPPING
        returnPolicyId: "49", // Corresponds to SEED_RETURNPOLICY
        warrantyId: "49", // Corresponds to SEED_WARRANTIES
        isNew: false,
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
