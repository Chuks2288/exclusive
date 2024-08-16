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
        isNew: false,
    },
] as Product[];


export const ourProducts = [
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
    // iphone 
    {
        id: "11249",
        name: "iPhone 14 Pro Max",
        description: "Latest iPhone with A16 Bionic chip, 6.7-inch Super Retina XDR display, and advanced triple-camera system.",
        price: 1099.99,
        initialPrice: 1199.99,
        currency: "USD",
        brand: "Apple",
        category: "Electronics",
        subcategory: "Smartphones",
        availability: "In Stock",
        stock_quantity: 30,
        images: [
            "/home/flash-sales/iphone-14-pro-max.png",
        ],
        rating: {
            average: 4.8,
            reviews: 150
        },
        features: [
            "A16 Bionic Chip",
            "6.7-inch Super Retina XDR Display",
            "Triple-Camera System",
            "Ceramic Shield Front Cover",
            "5G Capable"
        ],
        specifications: {
            weight: "240g",
            dimensions: "160.8 x 78.1 x 7.65 mm",
            color: "Space Black",
            material: "Glass, Stainless Steel",
            maximum_storage_capacity: "1TB"
        },
        discount: {
            amount: 10,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11250", // ID of a related product, e.g., iPhone 14 Pro Max Case
            "11251"  // ID of another related product
        ],
        reviews: [
            {
                user: "TechGuru",
                rating: 5,
                comment: "Exceptional performance and display quality!",
                date: "2024-08-05T09:30:00Z"
            },
            {
                user: "GadgetFan",
                rating: 4,
                comment: "Great upgrade but battery life could be better.",
                date: "2024-08-07T14:10:00Z"
            }
        ],
        shipping: {
            weight: "250g",
            dimensions: "170 x 85 x 20 mm",
            cost: 9.99,
            delivery_time: "2-3 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "14 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "AppleCare Standard Warranty"
        },
        isNew: true
    },
    {
        id: "11250",
        name: "iPhone 13 Pro Max",
        description: "Powerful iPhone with A15 Bionic chip, 6.7-inch Super Retina XDR display, and ProMotion technology.",
        price: 999.99,
        initialPrice: 1099.99,
        currency: "USD",
        brand: "Apple",
        category: "Electronics",
        subcategory: "Smartphones",
        availability: "In Stock",
        stock_quantity: 25,
        images: [
            "/home/flash-sales/iphone-13-pro-max.png",
        ],
        rating: {
            average: 4.7,
            reviews: 120
        },
        features: [
            "A15 Bionic Chip",
            "6.7-inch Super Retina XDR Display",
            "Triple-Camera System",
            "ProMotion Technology",
            "5G Capable"
        ],
        specifications: {
            weight: "238g",
            dimensions: "160.8 x 78.1 x 7.65 mm",
            color: "Sierra Blue",
            material: "Glass, Stainless Steel",
            maximum_storage_capacity: "1TB"
        },
        discount: {
            amount: 15,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11249", // ID of a related product, e.g., iPhone 13 Pro Max Case
            "11251"  // ID of another related product
        ],
        reviews: [
            {
                user: "TechEnthusiast",
                rating: 5,
                comment: "Top-notch performance and camera quality.",
                date: "2024-08-06T11:20:00Z"
            },
            {
                user: "DailyUser",
                rating: 4,
                comment: "Great phone but a bit heavy.",
                date: "2024-08-08T16:50:00Z"
            }
        ],
        shipping: {
            weight: "240g",
            dimensions: "170 x 85 x 20 mm",
            cost: 10.99,
            delivery_time: "2-4 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "14 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "AppleCare Standard Warranty"
        },
        isNew: false
    },
    {
        id: "11251",
        name: "iPhone 12 Pro Max",
        description: "Previous generation iPhone with A14 Bionic chip, 6.7-inch Super Retina XDR display, and improved camera system.",
        price: 899.99,
        initialPrice: 1099.99,
        currency: "USD",
        brand: "Apple",
        category: "Electronics",
        subcategory: "Smartphones",
        availability: "In Stock",
        stock_quantity: 20,
        images: [
            "/home/flash-sales/iphone-12-pro-max.png",
        ],
        rating: {
            average: 4.6,
            reviews: 100
        },
        features: [
            "A14 Bionic Chip",
            "6.7-inch Super Retina XDR Display",
            "Triple-Camera System",
            "Ceramic Shield Front Cover",
            "5G Capable"
        ],
        specifications: {
            weight: "228g",
            dimensions: "160.8 x 78.1 x 7.4 mm",
            color: "Pacific Blue",
            material: "Glass, Stainless Steel",
            maximum_storage_capacity: "512GB"
        },
        discount: {
            amount: 20,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11249", // ID of a related product, e.g., iPhone 12 Pro Max Case
            "11250"  // ID of another related product
        ],
        reviews: [
            {
                user: "AppleFan",
                rating: 4,
                comment: "Great phone but feels slightly outdated compared to newer models.",
                date: "2024-08-07T13:00:00Z"
            },
            {
                user: "TechLover",
                rating: 4.5,
                comment: "Solid performance and camera quality, still very good.",
                date: "2024-08-09T10:30:00Z"
            }
        ],
        shipping: {
            weight: "230g",
            dimensions: "170 x 85 x 20 mm",
            cost: 11.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "14 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "AppleCare Standard Warranty"
        },
        isNew: false
    },
    // JBL SPEAKSERS
    {
        id: "11252",
        name: "JBL Charge 5",
        description: "Portable Bluetooth speaker with powerful sound, up to 20 hours of playtime, and waterproof design.",
        price: 149.99,
        initialPrice: 199.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stock_quantity: 50,
        images: [
            "/home/flash-sales/jbl-charge-5.png",
        ],
        rating: {
            average: 4.7,
            reviews: 120
        },
        features: [
            "Up to 20 Hours Playtime",
            "IP67 Waterproof and Dustproof",
            "Powerbank Function",
            "JBL PartyBoost",
            "Wireless Bluetooth Streaming"
        ],
        specifications: {
            weight: "960g",
            dimensions: "223 x 96 x 94 mm",
            color: "Black",
            material: "Rubber, Fabric",
            maximum_output: "30W"
        },
        discount: {
            amount: 10,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11253", // ID of a related product, e.g., JBL Flip 6
            "11254"  // ID of another related product
        ],
        reviews: [
            {
                user: "MusicLover",
                rating: 5,
                comment: "Excellent sound quality and battery life!",
                date: "2024-08-05T10:00:00Z"
            },
            {
                user: "OutdoorFan",
                rating: 4,
                comment: "Great for outdoor use, but a bit heavy.",
                date: "2024-08-07T12:30:00Z"
            }
        ],
        shipping: {
            weight: "1.2kg",
            dimensions: "230 x 100 x 100 mm",
            cost: 12.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: true
    },
    {
        id: "11253",
        name: "JBL Flip 6",
        description: "Compact Bluetooth speaker with bold sound, up to 12 hours of playtime, and rugged design.",
        price: 129.99,
        initialPrice: 179.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stock_quantity: 60,
        images: [
            "/home/flash-sales/jbl-flip-6.png",
        ],
        rating: {
            average: 4.6,
            reviews: 110
        },
        features: [
            "Up to 12 Hours Playtime",
            "IP67 Waterproof and Dustproof",
            "JBL PartyBoost",
            "Rugged Design",
            "Wireless Bluetooth Streaming"
        ],
        specifications: {
            weight: "550g",
            dimensions: "178 x 72 x 71 mm",
            color: "Blue",
            material: "Rubber, Fabric",
            maximum_output: "20W"
        },
        discount: {
            amount: 15,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11252", // ID of a related product, e.g., JBL Charge 5
            "11254"  // ID of another related product
        ],
        reviews: [
            {
                user: "SoundExpert",
                rating: 5,
                comment: "Great sound quality and portability.",
                date: "2024-08-06T08:45:00Z"
            },
            {
                user: "CasualListener",
                rating: 4,
                comment: "Good performance, but slightly bulky.",
                date: "2024-08-08T14:20:00Z"
            }
        ],
        shipping: {
            weight: "650g",
            dimensions: "190 x 80 x 80 mm",
            cost: 10.99,
            delivery_time: "3-4 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: false
    },
    {
        id: "11254",
        name: "JBL Pulse 4",
        description: "Bluetooth speaker with 360-degree light show and sound, up to 12 hours of playtime, and waterproof design.",
        price: 199.99,
        initialPrice: 249.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/jbl-pulse-4.png",
        ],
        rating: {
            average: 4.8,
            reviews: 80
        },
        features: [
            "360-Degree Light Show",
            "Up to 12 Hours Playtime",
            "IPX7 Waterproof",
            "360-Degree Sound",
            "Wireless Bluetooth Streaming"
        ],
        specifications: {
            weight: "960g",
            dimensions: "223 x 104 x 104 mm",
            color: "White",
            material: "Rubber, Fabric",
            maximum_output: "40W"
        },
        discount: {
            amount: 20,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11252", // ID of a related product, e.g., JBL Charge 5
            "11253"  // ID of another related product
        ],
        reviews: [
            {
                user: "LightShowFan",
                rating: 5,
                comment: "Amazing light show and sound quality.",
                date: "2024-08-07T11:00:00Z"
            },
            {
                user: "PartyAnimal",
                rating: 4.5,
                comment: "Great for parties, but a bit pricey.",
                date: "2024-08-09T15:30:00Z"
            }
        ],
        shipping: {
            weight: "1.1kg",
            dimensions: "230 x 110 x 110 mm",
            cost: 14.99,
            delivery_time: "4-6 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: true
    },
    {
        id: "11255",
        name: "JBL Xtreme 3",
        description: "High-performance Bluetooth speaker with powerful bass, up to 15 hours of playtime, and rugged waterproof design.",
        price: 299.99,
        initialPrice: 349.99,
        currency: "USD",
        brand: "JBL",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stock_quantity: 35,
        images: [
            "/home/flash-sales/jbl-xtreme-3.png",
        ],
        rating: {
            average: 4.9,
            reviews: 60
        },
        features: [
            "Up to 15 Hours Playtime",
            "IP67 Waterproof and Dustproof",
            "JBL PartyBoost",
            "Powerful Bass",
            "Wireless Bluetooth Streaming"
        ],
        specifications: {
            weight: "2.4kg",
            dimensions: "285 x 123 x 132 mm",
            color: "Olive Green",
            material: "Rubber, Fabric",
            maximum_output: "100W"
        },
        discount: {
            amount: 25,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11252", // ID of a related product, e.g., JBL Charge 5
            "11254"  // ID of another related product
        ],
        reviews: [
            {
                user: "BassLover",
                rating: 5,
                comment: "Incredible bass and durability for outdoor events.",
                date: "2024-08-08T09:15:00Z"
            },
            {
                user: "AdventureSeeker",
                rating: 4.5,
                comment: "Perfect for adventures, but quite heavy.",
                date: "2024-08-10T13:45:00Z"
            }
        ],
        shipping: {
            weight: "2.5kg",
            dimensions: "290 x 130 x 135 mm",
            cost: 19.99,
            delivery_time: "5-7 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: false
    },
    // PLAYSTATION 5
    {
        id: "11256",
        name: "PlayStation 5 Standard Edition",
        description: "The PlayStation 5 Standard Edition offers cutting-edge gaming performance with ultra-high-speed SSD, ray tracing, and 4K gaming.",
        price: 499.99,
        initialPrice: 499.99,
        currency: "USD",
        brand: "Sony",
        category: "Electronics",
        subcategory: "Gaming Consoles",
        availability: "In Stock",
        stock_quantity: 30,
        images: [
            "/home/flash-sales/ps5-standard.png",
        ],
        rating: {
            average: 4.9,
            reviews: 250
        },
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Backward Compatibility",
            "DualSense Wireless Controller"
        ],
        specifications: {
            weight: "4.5kg",
            dimensions: "390 x 104 x 260 mm",
            color: "White/Black",
            storage: "825GB SSD",
            connectivity: "HDMI 2.1, USB Type-A, USB Type-C"
        },
        discount: {
            amount: 10,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11257", // ID of a related product, e.g., PlayStation 5 Digital Edition
            "11258"  // ID of another related product, e.g., PS5 DualSense Controller
        ],
        reviews: [
            {
                user: "GamerPro",
                rating: 5,
                comment: "An exceptional gaming experience with fast load times and stunning graphics.",
                date: "2024-08-05T14:00:00Z"
            },
            {
                user: "TechEnthusiast",
                rating: 4.8,
                comment: "Fantastic performance but a bit large for some entertainment setups.",
                date: "2024-08-07T11:30:00Z"
            }
        ],
        shipping: {
            weight: "5kg",
            dimensions: "400 x 120 x 270 mm",
            cost: 19.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: true
    },
    {
        id: "11257",
        name: "PlayStation 5 Digital Edition",
        description: "The PlayStation 5 Digital Edition provides the same high-performance gaming as the Standard Edition but without a disc drive, allowing for a more streamlined design and digital-only games.",
        price: 399.99,
        initialPrice: 399.99,
        currency: "USD",
        brand: "Sony",
        category: "Electronics",
        subcategory: "Gaming Consoles",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/ps5-digital.png",
        ],
        rating: {
            average: 4.8,
            reviews: 180
        },
        features: [
            "Ultra-High-Speed SSD",
            "Ray Tracing",
            "4K Gaming",
            "Digital-Only Gaming",
            "DualSense Wireless Controller"
        ],
        specifications: {
            weight: "3.9kg",
            dimensions: "390 x 92 x 260 mm",
            color: "White/Black",
            storage: "825GB SSD",
            connectivity: "HDMI 2.1, USB Type-A, USB Type-C"
        },
        discount: {
            amount: 15,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11256", // ID of a related product, e.g., PlayStation 5 Standard Edition
            "11258"  // ID of another related product, e.g., PS5 DualSense Controller
        ],
        reviews: [
            {
                user: "DigitalGamer",
                rating: 5,
                comment: "Great for digital downloads and a sleeker design.",
                date: "2024-08-06T16:00:00Z"
            },
            {
                user: "TechSavvy",
                rating: 4.7,
                comment: "Excellent performance, though I miss having a disc drive.",
                date: "2024-08-08T13:20:00Z"
            }
        ],
        shipping: {
            weight: "4kg",
            dimensions: "400 x 100 x 270 mm",
            cost: 17.99,
            delivery_time: "4-6 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: false
    },
    // WOMEN CLOTHINGS
    {
        id: "11260",
        name: "Casual Summer Dress",
        description: "A breezy and stylish casual summer dress perfect for warm weather. Features a relaxed fit and lightweight fabric.",
        price: 49.99,
        initialPrice: 69.99,
        currency: "USD",
        brand: "SummerVibe",
        category: "Clothing",
        subcategory: "Dresses",
        availability: "In Stock",
        stock_quantity: 50,
        images: [
            "/home/flash-sales/casual-summer-dress.jpg",
        ],
        rating: {
            average: 4.7,
            reviews: 120
        },
        features: [
            "Lightweight Fabric",
            "Relaxed Fit",
            "Short Sleeves",
            "Above-Knee Length",
            "Available in Multiple Colors"
        ],
        specifications: {
            weight: "300g",
            dimensions: "Various Sizes",
            color: "Blue, Red, Green",
            material: "Cotton, Polyester"
        },
        discount: {
            amount: 20,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11261", // ID of a related product, e.g., Summer Sandals
            "11262"  // ID of another related product, e.g., Sun Hat
        ],
        reviews: [
            {
                user: "BeachBum",
                rating: 5,
                comment: "Perfect for hot days! Comfortable and stylish.",
                date: "2024-08-05T10:00:00Z"
            },
            {
                user: "StyleGuru",
                rating: 4.5,
                comment: "Great fit and fabric, but runs a bit large.",
                date: "2024-08-07T14:30:00Z"
            }
        ],
        shipping: {
            weight: "350g",
            dimensions: "30 x 20 x 5 cm",
            cost: 7.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "6 months",
            coverage: "Manufacturer's warranty"
        },
        isNew: true
    },
    {
        id: "11261",
        name: "Elegant Evening Gown",
        description: "A luxurious evening gown designed for special occasions. Features a floor-length silhouette with intricate detailing.",
        price: 199.99,
        initialPrice: 249.99,
        currency: "USD",
        brand: "EleganceWear",
        category: "Clothing",
        subcategory: "Gowns",
        availability: "In Stock",
        stock_quantity: 20,
        images: [
            "/home/flash-sales/evening-gown.jpg",
        ],
        rating: {
            average: 4.9,
            reviews: 85
        },
        features: [
            "Floor-Length",
            "Intricate Detailing",
            "Elegant Fabric",
            "Adjustable Straps",
            "Available in Various Sizes"
        ],
        specifications: {
            weight: "800g",
            dimensions: "Various Sizes",
            color: "Black, Burgundy, Navy",
            material: "Silk, Satin"
        },
        discount: {
            amount: 15,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11260", // ID of a related product, e.g., Evening Clutch
            "11262"  // ID of another related product, e.g., Statement Necklace
        ],
        reviews: [
            {
                user: "GalaQueen",
                rating: 5,
                comment: "Stunning gown! The quality and fit are exceptional.",
                date: "2024-08-06T19:00:00Z"
            },
            {
                user: "Fashionista",
                rating: 4.8,
                comment: "Beautiful gown but the size chart was slightly off.",
                date: "2024-08-08T12:45:00Z"
            }
        ],
        shipping: {
            weight: "900g",
            dimensions: "40 x 30 x 10 cm",
            cost: 12.99,
            delivery_time: "4-6 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: false
    },
    {
        id: "11262",
        name: "High-Waisted Jeans",
        description: "Classic high-waisted jeans with a slim fit and comfortable stretch. Perfect for everyday wear or dressing up.",
        price: 69.99,
        initialPrice: 89.99,
        currency: "USD",
        brand: "DenimCraft",
        category: "Clothing",
        subcategory: "Jeans",
        availability: "In Stock",
        stock_quantity: 70,
        images: [
            "/home/flash-sales/high-waisted-jeans.jpg",
        ],
        rating: {
            average: 4.6,
            reviews: 150
        },
        features: [
            "High-Waisted",
            "Slim Fit",
            "Stretch Denim",
            "Five-Pocket Design",
            "Available in Various Washes"
        ],
        specifications: {
            weight: "500g",
            dimensions: "Various Sizes",
            color: "Blue, Black, Grey",
            material: "Cotton, Elastane"
        },
        discount: {
            amount: 10,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11260", // ID of a related product, e.g., Casual Summer Dress
            "11261"  // ID of another related product, e.g., Elegant Evening Gown
        ],
        reviews: [
            {
                user: "CasualChic",
                rating: 4.7,
                comment: "Great fit and comfortable. The stretch is perfect.",
                date: "2024-08-04T08:30:00Z"
            },
            {
                user: "DenimLover",
                rating: 4.5,
                comment: "Good quality jeans, but the sizing runs a bit small.",
                date: "2024-08-07T09:15:00Z"
            }
        ],
        shipping: {
            weight: "550g",
            dimensions: "35 x 25 x 5 cm",
            cost: 8.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "6 months",
            coverage: "Manufacturer's warranty"
        },
        isNew: true
    },
    // RANDOM SPEAKERS
    {
        id: "11270",
        name: "Portable Bluetooth Speaker",
        description: "A compact and waterproof Bluetooth speaker with impressive sound quality and long battery life. Perfect for outdoor adventures.",
        price: 59.99,
        initialPrice: 79.99,
        currency: "USD",
        brand: "SoundWave",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stock_quantity: 100,
        images: [
            "/home/flash-sales/portable-bluetooth-speaker.jpg",
        ],
        rating: {
            average: 4.8,
            reviews: 200
        },
        features: [
            "Bluetooth 5.0 Connectivity",
            "Waterproof (IPX7)",
            "12-Hour Battery Life",
            "Built-in Microphone for Calls",
            "Compact and Lightweight"
        ],
        specifications: {
            weight: "300g",
            dimensions: "10 x 10 x 5 cm",
            color: "Black, Blue, Red",
            material: "Rubberized Plastic, Fabric"
        },
        discount: {
            amount: 20,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11271", // ID of a related product, e.g., Portable Charger
            "11272"  // ID of another related product, e.g., Wireless Earbuds
        ],
        reviews: [
            {
                user: "MusicLover",
                rating: 5,
                comment: "Fantastic sound quality and durability. Perfect for beach trips!",
                date: "2024-08-05T14:00:00Z"
            },
            {
                user: "Techie",
                rating: 4.7,
                comment: "Great value for the price, but the battery life could be better.",
                date: "2024-08-07T09:45:00Z"
            }
        ],
        shipping: {
            weight: "350g",
            dimensions: "15 x 12 x 8 cm",
            cost: 9.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: true
    },
    {
        id: "11271",
        name: "Home Theater Speaker System",
        description: "A 5.1 channel home theater speaker system designed to deliver cinematic audio experiences. Includes subwoofer and surround speakers.",
        price: 499.99,
        initialPrice: 599.99,
        currency: "USD",
        brand: "CineSound",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stock_quantity: 30,
        images: [
            "/home/flash-sales/home-theater-speaker-system.jpg",
        ],
        rating: {
            average: 4.9,
            reviews: 150
        },
        features: [
            "5.1 Channel Surround Sound",
            "Powerful Subwoofer",
            "Dolby Audio Support",
            "Wireless Connectivity",
            "Easy Setup with HDMI"
        ],
        specifications: {
            weight: "12kg",
            dimensions: "50 x 40 x 40 cm",
            color: "Black",
            material: "Wood, Metal"
        },
        discount: {
            amount: 15,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11270", // ID of a related product, e.g., Portable Bluetooth Speaker
            "11272"  // ID of another related product, e.g., Soundbar
        ],
        reviews: [
            {
                user: "HomeCinemaFan",
                rating: 5,
                comment: "Incredible sound quality! Turns any movie night into a theater experience.",
                date: "2024-08-04T18:30:00Z"
            },
            {
                user: "Audiophile",
                rating: 4.8,
                comment: "Excellent surround sound, but the setup was a bit complex.",
                date: "2024-08-06T13:00:00Z"
            }
        ],
        shipping: {
            weight: "15kg",
            dimensions: "55 x 45 x 45 cm",
            cost: 29.99,
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
        isNew: false
    },
    {
        id: "11272",
        name: "Smart Wi-Fi Speaker",
        description: "A sleek smart speaker with built-in voice assistant and high-fidelity sound. Integrates seamlessly with smart home systems.",
        price: 129.99,
        initialPrice: 149.99,
        currency: "USD",
        brand: "SmartSound",
        category: "Electronics",
        subcategory: "Speakers",
        availability: "In Stock",
        stock_quantity: 75,
        images: [
            "/home/flash-sales/smart-wifi-speaker.jpg",
        ],
        rating: {
            average: 4.7,
            reviews: 180
        },
        features: [
            "Built-in Voice Assistant",
            "High-Fidelity Audio",
            "Wi-Fi and Bluetooth Connectivity",
            "Smart Home Integration",
            "Touch Controls"
        ],
        specifications: {
            weight: "500g",
            dimensions: "12 x 12 x 25 cm",
            color: "White, Charcoal",
            material: "Plastic, Fabric"
        },
        discount: {
            amount: 10,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11270", // ID of a related product, e.g., Portable Bluetooth Speaker
            "11271"  // ID of another related product, e.g., Home Theater Speaker System
        ],
        reviews: [
            {
                user: "TechSavvy",
                rating: 4.9,
                comment: "Fantastic smart speaker with excellent sound and voice control!",
                date: "2024-08-03T15:00:00Z"
            },
            {
                user: "SmartHomeUser",
                rating: 4.6,
                comment: "Great integration with smart home systems, but could use better bass.",
                date: "2024-08-08T10:30:00Z"
            }
        ],
        shipping: {
            weight: "600g",
            dimensions: "14 x 14 x 28 cm",
            cost: 9.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "1 year",
            coverage: "Manufacturer's warranty"
        },
        isNew: true
    },
    // PERFUME
    {
        id: "11280",
        name: "Floral Eau de Parfum",
        description: "A delicate and sophisticated floral fragrance with notes of jasmine, rose, and lily of the valley. Perfect for everyday wear.",
        price: 89.99,
        initialPrice: 99.99,
        currency: "USD",
        brand: "Elegance",
        category: "Fragrances",
        subcategory: "Perfumes",
        availability: "In Stock",
        stock_quantity: 50,
        images: [
            "/home/flash-sales/floral-eau-de-parfum.jpg",
        ],
        rating: {
            average: 4.7,
            reviews: 120
        },
        features: [
            "Top Notes: Jasmine, Bergamot",
            "Heart Notes: Rose, Lily of the Valley",
            "Base Notes: Sandalwood, Musk",
            "Long-lasting Fragrance",
            "Elegant Glass Bottle Design"
        ],
        specifications: {
            volume: "50ml",
            fragrance_family: "Floral",
            scent_intensity: "Moderate"
        },
        discount: {
            amount: 10,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11281", // ID of a related product, e.g., Floral Body Mist
            "11282"  // ID of another related product, e.g., Floral Scented Lotion
        ],
        reviews: [
            {
                user: "FragranceLover",
                rating: 5,
                comment: "A beautiful floral scent that lasts all day. My new favorite!",
                date: "2024-08-10T12:00:00Z"
            },
            {
                user: "ChicStyle",
                rating: 4.5,
                comment: "Lovely fragrance, but I wish it was a bit more intense.",
                date: "2024-08-12T08:30:00Z"
            }
        ],
        shipping: {
            weight: "200g",
            dimensions: "12 x 8 x 8 cm",
            cost: 7.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "6 months",
            coverage: "Manufacturer's guarantee"
        },
        isNew: false
    },
    {
        id: "11281",
        name: "Woody Eau de Toilette",
        description: "An invigorating woody fragrance with notes of cedarwood, sandalwood, and vetiver. Ideal for an evening out or special occasions.",
        price: 74.99,
        initialPrice: 84.99,
        currency: "USD",
        brand: "Timeless",
        category: "Fragrances",
        subcategory: "Perfumes",
        availability: "In Stock",
        stock_quantity: 40,
        images: [
            "/home/flash-sales/woody-eau-de-toilette.jpg",
        ],
        rating: {
            average: 4.6,
            reviews: 95
        },
        features: [
            "Top Notes: Bergamot, Black Pepper",
            "Heart Notes: Cedarwood, Patchouli",
            "Base Notes: Sandalwood, Vetiver",
            "Sophisticated and Masculine",
            "Durable Bottle with Magnetic Cap"
        ],
        specifications: {
            volume: "100ml",
            fragrance_family: "Woody",
            scent_intensity: "Strong"
        },
        discount: {
            amount: 10,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11280", // ID of a related product, e.g., Woody Body Spray
            "11282"  // ID of another related product, e.g., Woody Aftershave
        ],
        reviews: [
            {
                user: "ClassicGent",
                rating: 5,
                comment: "A refined woody scent that's perfect for any formal event.",
                date: "2024-08-07T18:00:00Z"
            },
            {
                user: "UrbanExplorer",
                rating: 4.4,
                comment: "Great fragrance but a bit too strong for my taste.",
                date: "2024-08-09T10:15:00Z"
            }
        ],
        shipping: {
            weight: "250g",
            dimensions: "14 x 10 x 10 cm",
            cost: 8.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "6 months",
            coverage: "Manufacturer's guarantee"
        },
        isNew: true
    },
    {
        id: "11282",
        name: "Citrus Fresh Eau de Cologne",
        description: "A refreshing and zesty citrus cologne with notes of lemon, grapefruit, and mint. Perfect for a vibrant and energetic start to your day.",
        price: 39.99,
        initialPrice: 49.99,
        currency: "USD",
        brand: "Vivid",
        category: "Fragrances",
        subcategory: "Colognes",
        availability: "In Stock",
        stock_quantity: 80,
        images: [
            "/home/flash-sales/citrus-fresh-eau-de-cologne.jpg",
        ],
        rating: {
            average: 4.5,
            reviews: 80
        },
        features: [
            "Top Notes: Lemon, Grapefruit",
            "Heart Notes: Mint, Green Tea",
            "Base Notes: Cedarwood, Amber",
            "Light and Refreshing",
            "Ideal for Daily Use"
        ],
        specifications: {
            volume: "75ml",
            fragrance_family: "Citrus",
            scent_intensity: "Light"
        },
        discount: {
            amount: 20,
            type: "percentage",
            valid_until: "2024-08-31T23:59:59Z"
        },
        related_products: [
            "11280", // ID of a related product, e.g., Citrus Body Lotion
            "11281"  // ID of another related product, e.g., Citrus Shower Gel
        ],
        reviews: [
            {
                user: "FreshScentFan",
                rating: 4.8,
                comment: "A bright and uplifting fragrance. Perfect for summer!",
                date: "2024-08-06T16:00:00Z"
            },
            {
                user: "DailyUser",
                rating: 4.3,
                comment: "Great for everyday wear, though it doesn't last as long as I'd like.",
                date: "2024-08-09T11:30:00Z"
            }
        ],
        shipping: {
            weight: "150g",
            dimensions: "12 x 9 x 7 cm",
            cost: 6.99,
            delivery_time: "3-5 business days"
        },
        return_policy: {
            returnable: true,
            return_period: "30 days",
            conditions: "Product must be in original packaging and unused"
        },
        warranty: {
            duration: "6 months",
            coverage: "Manufacturer's guarantee"
        },
        isNew: false
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

