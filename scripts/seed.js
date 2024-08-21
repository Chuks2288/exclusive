"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var db_1 = require("@/lib/db");
(0, dotenv_1.config)({ path: ".env.local" });
var SEED_SPECIFICATIONS = [
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
var SEED_RATINGS = [
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
var SEED_DISCOUNT = [
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
var SEED_PRODUCTREVIEWS = [
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
var SEED_SHIPPING = [
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
var SEED_RETURNPOLICY = [
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
var SEED_WARRANTIES = [
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
var SEED_PRODUCTS = [
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
var generateRelatedProducts = function (products) {
    var relatedProducts = [];
    products.forEach(function (product) {
        var related = products.filter(function (p) {
            return p.id !== product.id &&
                (p.category === product.category || p.subcategory === product.subcategory);
        });
        related.forEach(function (relProduct) {
            relatedProducts.push({
                id: "related-".concat(product.id, "-").concat(relProduct.id),
                relatedProductId: relProduct.id,
                productId: product.id,
            });
        });
    });
    return relatedProducts;
};
var SEED_RELATEDPRODUCTS = generateRelatedProducts(SEED_PRODUCTS);
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 19, , 20]);
                // Reset the database
                return [4 /*yield*/, db_1.db.rating.deleteMany()];
            case 1:
                // Reset the database
                _a.sent();
                return [4 /*yield*/, db_1.db.specification.deleteMany()];
            case 2:
                _a.sent();
                return [4 /*yield*/, db_1.db.discount.deleteMany()];
            case 3:
                _a.sent();
                return [4 /*yield*/, db_1.db.relatedProduct.deleteMany()];
            case 4:
                _a.sent();
                return [4 /*yield*/, db_1.db.productReview.deleteMany()];
            case 5:
                _a.sent();
                return [4 /*yield*/, db_1.db.shipping.deleteMany()];
            case 6:
                _a.sent();
                return [4 /*yield*/, db_1.db.returnPolicy.deleteMany()];
            case 7:
                _a.sent();
                return [4 /*yield*/, db_1.db.warranty.deleteMany()];
            case 8:
                _a.sent();
                return [4 /*yield*/, db_1.db.product.deleteMany()];
            case 9:
                _a.sent();
                // Seed data
                return [4 /*yield*/, db_1.db.returnPolicy.createMany({ data: SEED_RETURNPOLICY })];
            case 10:
                // Seed data
                _a.sent();
                return [4 /*yield*/, db_1.db.shipping.createMany({ data: SEED_SHIPPING })];
            case 11:
                _a.sent();
                return [4 /*yield*/, db_1.db.rating.createMany({ data: SEED_RATINGS })];
            case 12:
                _a.sent();
                return [4 /*yield*/, db_1.db.specification.createMany({ data: SEED_SPECIFICATIONS })];
            case 13:
                _a.sent();
                return [4 /*yield*/, db_1.db.discount.createMany({ data: SEED_DISCOUNT })];
            case 14:
                _a.sent();
                return [4 /*yield*/, db_1.db.relatedProduct.createMany({ data: SEED_RELATEDPRODUCTS })];
            case 15:
                _a.sent();
                return [4 /*yield*/, db_1.db.productReview.createMany({ data: SEED_PRODUCTREVIEWS })];
            case 16:
                _a.sent();
                return [4 /*yield*/, db_1.db.warranty.createMany({ data: SEED_WARRANTIES })];
            case 17:
                _a.sent();
                return [4 /*yield*/, db_1.db.product.createMany({ data: SEED_PRODUCTS })];
            case 18:
                _a.sent();
                console.log("Seed completed successfully");
                return [3 /*break*/, 20];
            case 19:
                error_1 = _a.sent();
                console.error("Error during seed:", error_1);
                process.exit(1);
                return [3 /*break*/, 20];
            case 20: return [2 /*return*/];
        }
    });
}); };
main();
