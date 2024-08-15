type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    initialPrice: number;
    brand: string;
    // category: "Electronics" | "Furniture";
    category: string;
    subcategory: string;
    // subcategory: "Gamepads" | "Monitors" | "Gaming Chairs";
    availability: string;
    stock_quantity: number;
    images: string[];
    rating: {
        average: number;
        reviews: number;
    };
    features: string[];
    specifications: {
        weight: string,
        dimensions: string,
        color: string,
        material: string,
        maximum_weight_capacity: string
    },
    discount: {
        amount: number;
        type: string;
        valid_until: string; // ISO 8601 date string
    };
    related_products: string[]; // Array of related product IDs
    reviews: {
        user: string;
        rating: number;
        comment: string;
        date: string; // ISO 8601 date string
    }[];
    shipping: {
        weight: string;
        dimensions: string;
        cost: number;
        delivery_time: string;
    };
    return_policy: {
        returnable: boolean;
        return_period: string;
        conditions: string;
    };
    warranty: {
        duration: string;
        coverage: string;
    },
    isNew?: boolean,
};


export const flashSalesProducts = [
    {
        id: "67890",
        name: "Wireless Gaming Gamepad",
        description: "Ergonomic wireless gamepad with responsive buttons, dual vibration motors, and customizable controls.",
        price: 59.99,
        initialPrice: 89.10,
        currency: "USD",
        brand: "GameMaster",
        category: "Electronics",
        subcategory: "Gamepads",
        availability: "In Stock",
        stock_quantity: 100,
        "images": [
            "/home/flash-sales/game-pad.svg",
        ],
        "rating": {
            "average": 4.7,
            "reviews": 200
        },
        "features": [
            "Wireless Connectivity",
            "Ergonomic Design",
            "Dual Vibration Motors",
            "Customizable Buttons",
            "Up to 40-hour Battery Life"
        ],
        "specifications": {
            "weight": "350g",
            "dimensions": "15 x 10 x 5 cm",
            "color": "Black",
            "material": "Plastic and Rubber",
            "connectivity": "Bluetooth 5.1, USB-C Charging"
        },
        "discount": {
            "amount": 15,
            "type": "percentage",
            "valid_until": "2024-08-31T23:59:59Z"
        },
        "related_products": [
            "12345", // ID of a related product, e.g., headphones
            "54321"  // ID of another related product
        ],
        "reviews": [
            {
                "user": "GamerGuy",
                "rating": 5,
                "comment": "Best gamepad I've ever used! The battery life is amazing.",
                "date": "2024-07-20T18:45:00Z"
            },
            {
                "user": "ProPlayer",
                "rating": 4,
                "comment": "Very comfortable and responsive, but I wish it had more color options.",
                "date": "2024-07-22T11:00:00Z"
            }
        ],
        "shipping": {
            "weight": "400g",
            "dimensions": "18 x 12 x 6 cm",
            "cost": 7.99,
            "delivery_time": "2-4 business days"
        },
        "return_policy": {
            "returnable": true,
            "return_period": "30 days",
            "conditions": "Product must be in original packaging"
        },
        "warranty": {
            "duration": "2 years",
            "coverage": "Manufacturer's warranty"
        },
        isNew: true,
    },
    {
        id: "67892",
        name: "Wireless Gaming Keyboard",
        description: "High-performance wireless mechanical keyboard with customizable RGB lighting, responsive switches, and durable build quality.",
        price: 129.99,
        initialPrice: 182.19,
        currency: "USD",
        brand: "KeyMaster",
        category: "Electronics",
        subcategory: "Keyboards",
        availability: "In Stock",
        stock_quantity: 75,
        images: [
            "/home/flash-sales/gaming-keyboard.svg",
        ],
        rating: {
            average: 4.8,
            reviews: 320
        },
        features: [
            "Wireless Connectivity",
            "Mechanical Switches",
            "Customizable RGB Lighting",
            "N-Key Rollover",
            "Long Battery Life"
        ],
        specifications: {
            weight: "800g",
            dimensions: "45 x 15 x 3.5 cm",
            color: "Black",
            material: "Aluminum and Plastic",
            connectivity: "Bluetooth 5.1, USB-C Charging"
        },
        discount: {
            amount: 20,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "12345", // ID of a related product, e.g., headphones
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "TechEnthusiast",
                rating: 5,
                comment: "The switches are incredibly responsive, and the RGB lighting is fantastic!",
                date: "2024-07-25T10:30:00Z"
            },
            {
                user: "CasualGamer",
                rating: 4,
                comment: "Great keyboard, but it's a bit pricey. Worth it for serious gamers.",
                date: "2024-07-27T14:15:00Z"
            }
        ],
        shipping: {
            weight: "900g",
            dimensions: "48 x 18 x 5 cm",
            cost: 9.99,
            delivery_time: "2-4 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
        isNew: true,
    },
    {
        id: "98765", // Updated ID
        name: "UltraWide Gaming Monitor",
        description: "34-inch UltraWide curved gaming monitor with 144Hz refresh rate, 1ms response time, and G-Sync support.",
        price: 399.99,
        initialPrice: 489.10,
        currency: "USD",
        brand: "ScreenMaster",
        category: "Electronics",
        subcategory: "Monitors",
        availability: "In Stock",
        stock_quantity: 30,
        images: [
            "/home/flash-sales/gaming-monitor.svg",
        ],
        rating: {
            average: 4.8,
            reviews: 150
        },
        features: [
            "34-inch UltraWide Display",
            "144Hz Refresh Rate",
            "1ms Response Time",
            "G-Sync Support",
            "HDR10 Compatible"
        ],
        specifications: {
            weight: "7.5kg",
            dimensions: "81 x 36 x 21 cm",
            color: "Black",
            material: "Plastic and Metal",
            connectivity: "HDMI, DisplayPort, USB-C"
        },
        discount: {
            amount: 20,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "TechGuru",
                rating: 5,
                comment: "Absolutely stunning display! Perfect for gaming and multitasking.",
                date: "2024-08-05T10:15:00Z"
            },
            {
                user: "PCGamer",
                rating: 4,
                comment: "Great monitor, but it could use more USB ports.",
                date: "2024-08-07T14:30:00Z"
            }
        ],
        shipping: {
            weight: "8kg",
            dimensions: "85 x 40 x 25 cm",
            cost: 15.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging"
        },
        warranty: {
            duration: "3 years",
            coverage: "Manufacturer's warranty"
        },
    },
    {
        id: "11223", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 287.12,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
        isNew: true,
    },
    {
        id: "11228", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 309.20,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
    },


    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
        isNew: false,
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
        isNew: true,
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
        isNew: true,
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
        isNew: true,
    },
    {
        id: "11248", // Updated ID
        name: "Ergonomic Gaming Chair",
        description: "Adjustable ergonomic gaming chair with lumbar support, reclining feature, and premium PU leather upholstery.",
        price: 229.99,
        initialPrice: 499.40,
        currency: "USD",
        brand: "ChairMaster",
        category: "Furniture",
        subcategory: "Gaming Chairs",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/gaming-chair.svg",
        ],
        rating: {
            average: 4.6,
            reviews: 80
        },
        features: [
            "Adjustable Lumbar Support",
            "Reclining Feature (up to 180°)",
            "360-Degree Swivel",
            "Height Adjustable",
            "Premium PU Leather"
        ],
        specifications: {
            weight: "22kg",
            dimensions: "70 x 70 x 130 cm",
            color: "Black/Red",
            material: "PU Leather, Steel Frame",
            maximum_weight_capacity: "150kg"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "67890", // ID of a related product, e.g., gamepad
            "54321"  // ID of another related product
        ],
        reviews: [
            {
                user: "GamerChick",
                rating: 5,
                comment: "Incredibly comfortable and perfect for long gaming sessions!",
                date: "2024-08-01T16:20:00Z"
            },
            {
                user: "OfficePro",
                rating: 4,
                comment: "Very ergonomic, but the assembly instructions could be clearer.",
                date: "2024-08-03T11:45:00Z"
            }
        ],
        shipping: {
            weight: "24kg",
            dimensions: "75 x 75 x 40 cm",
            cost: 12.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "2 years",
            coverage: "Manufacturer's warranty"
        },
        isNew: false,
    },
] as Product[];

