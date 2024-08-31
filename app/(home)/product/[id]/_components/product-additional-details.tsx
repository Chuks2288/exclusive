import { Button } from "@/components/ui/button";
import { RelatedProducts } from "./related-products";
import { flashSalesProducts, ourProducts } from "@/constants";
import { Rating, Star } from "@smastrom/react-rating";
import { ProductComment } from "./product-comment";
import { useCurrentUser } from "@/hooks/use-current-user";
import { User } from "@prisma/client";


interface ProductAdditionalDetailsProps {
    id: string;
    features: string[];
    specifications: {
        weight: string;
        dimensions: string;
        color: string;
        material: string;
        connectivity: string;
    };
    discount?: {
        amount: number;
        type: string;
        valid_until: string;
    };
    reviews: {
        user: string;
        rating: number;
        comment: string;
        date: string;
    }[];
    shipping: {
        weight: string;
        dimensions: string;
        cost: number;
        delivery_time: string;
    };
    warranty?: {
        duration: string;
        coverage: string;
    };
    products: any[];
}

export const ProductAdditionalDetails = ({
    id,
    features,
    specifications,
    discount,
    reviews,
    shipping,
    warranty,
    products,
}: ProductAdditionalDetailsProps) => {
    const user = useCurrentUser();

    return (
        <div className="p-8 space-y-12 ">
            <div className="grid lg:grid-cols-4 grid-cols-2  gap-8">
                <div>
                    <h2 className="font-bold text-md mb-4">Features</h2>
                    <ul className="list-disc list-inside text-lg leading-relaxed">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="text-sm"
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-md mb-4">Specifications</h2>
                    <ul className="list-disc list-inside text-sm leading-relaxed">
                        <li>Weight: {specifications.weight}</li>
                        <li>Dimensions: {specifications.dimensions}</li>
                        <li>Color: {specifications.color}</li>
                        <li>Material: {specifications.material}</li>
                        <li>Connectivity: {specifications.connectivity}</li>
                    </ul>
                </div>

                <div className="">
                    <h2 className="font-bold text-md mb-4">Shipping Details</h2>
                    <p className="text-sm">Weight: {shipping.weight}</p>
                    <p className="text-sm">Dimensions: {shipping.dimensions}</p>
                    <p className="text-sm">Cost: ${shipping.cost}</p>
                    <p className="text-sm">Delivery Time: {shipping.delivery_time}</p>
                </div>
                {warranty && (
                    <div className="">
                        <h2 className="font-bold text-md mb-4">Warranty</h2>
                        <p className="text-sm">Duration: {warranty.duration}</p>
                        <p className="text-sm">Coverage: {warranty.coverage}</p>
                    </div>
                )}
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="bg-gray-100 dark:bg-gray-500">
                    <h2 className="font-bold rounded-sm  p-1 text-md mb-4 text-gradient bg-gradient-to-r from-red-500 to-pink-500">Reviews</h2>
                    <div className="space-y-3">
                        {reviews.map((review, index) => (
                            <div key={index} className="p-4 rounded-sm ">
                                <p className="font-semibold text-md">{review.user}</p>
                                <div className="max-w-[80px]">
                                    <Rating
                                        value={review.rating}
                                        readOnly
                                        itemStyles={{
                                            itemShapes: Star,
                                            activeFillColor: "#FFAD33",
                                            inactiveFillColor: "#D3D3D3",
                                        }}
                                    />
                                </div>
                                {/* <p className="text-xs text-yellow-600 dark:text-yellow-400">Rating: {review.rating} / 5</p> */}
                                <p className="italic text-xs">"{review.comment}"</p>
                                <p className="text-xs ">{new Date(review.date).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                    {user && (
                        <div>
                            <ProductComment
                                userId={user?.id}
                                productId={id}
                            />
                        </div>
                    )}
                </div>
                {discount && (
                    <div className="space-y-4">
                        <div className="">
                            <h2 className="font-bold text-md">Discount</h2>
                            <p className="text-sm">{discount.amount}% off ({discount.type}), valid until {new Date(discount.valid_until).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <h2 className="font-bold text-md mb-4">Features</h2>
                            <ul className="list-disc list-inside text-lg leading-relaxed">
                                {features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="text-sm"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <div className="py-10 space-y-4">
                <div className="flex items-center gap-x-3">
                    <div className="w-3 h-8 rounded-sm bg-red-600" />
                    <p className="text-red-600 text-sm font-bold">
                        Related Items
                    </p>
                </div>
                <div className="">
                    <RelatedProducts
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};
