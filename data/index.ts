import { Camera, CircleX, Gamepad, Headphones, Heart, LucideIcon, Phone, Radio, ScreenShare, ShoppingBag, ShoppingCart, Star, User, Watch } from "lucide-react";

interface navItemProps {
    label: string,
    href: string,
}
interface userActionRoutesProps {
    icon: any,
    path: string,
    item: number,
}
interface userProfileRoutesProps {
    icon: any,
    label: string,
    path: string,
}

interface categoryQueryItemsProps {
    category: string;
    imageIcon: LucideIcon;
    relatedWords?: string[];
}

export const routes = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Contact",
        href: "/contact"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Sign Up",
        href: "/auth/sign-up"
    },
] as navItemProps[];

export const userActionRoutes = [
    {
        icon: Heart,
        path: "/wishlist",
        item: 0,
    },
    {
        icon: ShoppingCart,
        path: "/cart",
        item: 2,
    },
] as userActionRoutesProps[];

export const userProfileRoutes = [
    {
        icon: User,
        label: "Manage My Account",
        path: "/manage-account",
    },
    {
        icon: ShoppingBag,
        label: "My Order",
        path: "/orders",
    },
    {
        icon: CircleX,
        label: "My Cancellations",
        path: "/cancellations",
    },
    {
        icon: Star,
        label: "My Reviews",
        path: "/reviews",
    },
] as userProfileRoutesProps[];


export const searchWordItems = [
    {
        category: "Woman’s Fashion",
        subCategories: [
            "Dresses",
            "Tops",
            "Shoes",
            "Accessories"
        ]
    },
    {
        category: "Men’s Fashion",
        subCategories: [
            "Shirts",
            "Pants",
            "Shoes",
            "Watches"
        ]
    },
    {
        category: "Electronics",
        relatedWords: [
            "Mobile Phones",
            "Laptops",
            "Cameras",
            "Audio & Headphones"
        ]
    },
    {
        category: "Home & Lifestyle",
        relatedWords: [
            "Furniture",
            "Decor",
            "Kitchenware",
            "Bedding"
        ]
    },
    {
        category: "Medicine",
        relatedWords: [
            "Prescription Drugs",
            "Over-the-Counter",
            "Supplements",
            "Medical Equipment"
        ]
    },
    {
        category: "Sports & Outdoor",
        relatedWords: [
            "Fitness Equipment",
            "Outdoor Gear",
            "Sportswear",
            "Camping"
        ]
    },
    {
        category: "Baby’s & Toys",
        relatedWords: [
            "Toys",
            "Clothing",
            "Nursery",
            "Baby Gear"
        ]
    },
    {
        category: "Groceries & Pets",
        relatedWords: [
            "Pet Food",
            "Pet Accessories",
            "Groceries",
            "Organic Products"
        ]
    },
    {
        category: "Health & Beauty",
        relatedWords: [
            "Skincare",
            "Haircare",
            "Makeup",
            "Personal Care"
        ]
    }
] as any;

export const categoryQueryItems = [
    {
        category: "Phones",
        // imageIcon: "/home/category/cell-phone.svg",
        imageIcon: Phone,
        relatedWords: [
            "Smartphones",
            "Mobile Phones",
            "Feature Phones",
            "Accessories"
        ]
    },
    {
        category: "Computers",
        // imageIcon: "/home/category/computer.svg",
        imageIcon: ScreenShare,
        relatedWords: [
            "Laptops",
            "Desktops",
            "Monitors",
            "Computer Accessories",
            "Keyboards",
            "Mice"
        ]
    },
    {
        category: "Smartwatches",
        // imageIcon: "/home/category/smart-watch.svg",
        imageIcon: Watch,
        relatedWords: [
            "Fitness Trackers",
            "Wearables",
            "Watch Bands",
            "Chargers"
        ]
    },
    {
        category: "Cameras",
        imageIcon: Camera,
        relatedWords: [
            "Digital Cameras",
            "DSLR Cameras",
            "Action Cameras",
            "Camera Lenses",
            "Tripods"
        ]
    },
    {
        category: "Headphones",
        // imageIcon: "/home/category/headphone.svg",
        imageIcon: Headphones,
        relatedWords: [
            "Over-Ear Headphones",
            "In-Ear Headphones",
            "Wireless Headphones",
            "Noise-Cancelling Headphones",
            "Headphone Accessories"
        ]
    },
    {
        category: "Cameras",
        imageIcon: Camera,
        relatedWords: [
            "Digital Cameras",
            "DSLR Cameras",
            "Action Cameras",
            "Camera Lenses",
            "Tripods"
        ]
    },
    {
        category: "Gaming Pads",
        // imageIcon: "/home/category/gamepad.svg",
        imageIcon: Gamepad,
        relatedWords: [
            "Game Controllers",
            "Gamepads",
            "Joystick",
            "Arcade Sticks",
            "Gaming Accessories"
        ]
    },
    {
        category: "Cameras",
        imageIcon: Camera,
        relatedWords: [
            "Digital Cameras",
            "DSLR Cameras",
            "Action Cameras",
            "Camera Lenses",
            "Tripods"
        ]
    },
] as categoryQueryItemsProps[];
