import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Rating, Star } from "@smastrom/react-rating";
import { Heart, Minus, Plus, RefreshCcw, Truck } from "lucide-react";

type Props = {
    name: string;
    rating: number;
    reviews: number;
    availability: string;
    price: number;
    initialPrice: number;
    description: string;
    color: string;
    size: string[];
    returnable: boolean;
    returnPeriod: string;
    returnCondition: string;
};

export const ProductDetails = ({
    name,
    rating,
    reviews,
    availability,
    price,
    initialPrice,
    description,
    color,
    size,
    returnable,
    returnPeriod,
    returnCondition,
}: Props) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const totalPrice = price * quantity;

    return (
        <div className="space-y-4">
            <h4 className="font-bold text-xl">{name}</h4>
            <div className="flex items-center gap-x-2">
                <div className="max-w-[90px]">
                    <Rating
                        value={rating}
                        readOnly
                        itemStyles={{
                            itemShapes: Star,
                            activeFillColor: "#FFAD33",
                            inactiveFillColor: "#D3D3D3",
                        }}
                    />
                </div>
                <span className="text-gray-500 text-xs">{`(${reviews} reviews)`}</span>
                <Separator orientation="vertical" className="h-3" />
                <span className="text-green-500 text-xs">{availability}</span>
            </div>
            <div className="flex items-center gap-x-2">
                <p className="text-md font-medium">{`$${totalPrice.toFixed(2)}`}</p>
                {initialPrice > price && (
                    <p className="text-muted-foreground font-medium line-through">{`$${(initialPrice * quantity).toFixed(2)}`}</p>
                )}
            </div>
            <p className="text-xs">{description}</p>
            <Separator orientation="horizontal" className="border-[1.5]" />
            {color && (
                <>
                    <div className="flex items-center gap-x-4">
                        <p className="text-md font-medium">Colors:</p>
                        <span
                            className="w-4 h-4 rounded-full"
                            style={{
                                backgroundColor: color,
                            }}
                        />
                    </div>
                </>
            )}
            {size && (
                <>
                    <div className="flex items-center gap-x-4">
                        <p className="text-md font-medium">Size:</p>
                        <div className="flex flex-row gap-x-2">
                            {size.map((s, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center w-10 h-10 rounded-sm border border-gray-300 text-sm cursor-pointer hover:bg-red-500 hover:text-white"
                                >
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
            <div className="flex items-center gap-x-4 mt-4">
                <div className="flex items-center">
                    <Button
                        size="lg"
                        onClick={decreaseQuantity}
                        className="text-md border-2 hover:bg-red-500 hover:text-white"
                    >
                        {/* <Minus className="w-4 h-4" /> */}
                        -
                    </Button>
                    <div className="w-20 h-10  flex justify-center items-center text-center border-t border-b border-gray-300">
                        {quantity}
                    </div>
                    <Button
                        size="lg"
                        onClick={increaseQuantity}
                        className="text-md border-2  hover:bg-red-500 hover:text-white"
                    >
                        {/* <Plus className="w-4 h-4" /> */}
                        +
                    </Button>
                </div>
                <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white md:w-[200px] w-full"
                >
                    Buy Now
                </Button>
                <span className="flex justify-center items-center w-8 h-8 border-2 p-1 rounded-sm text-[10px] cursor-pointer">
                    <Heart className="w-4 h-4" />
                </span>
            </div>
            <div className="border-2 w-full p-3 space-y-4">
                <div className="flex items-center gap-x-4">
                    <Truck className="size-6" />
                    <div className="space-y-2">
                        <p className="text-sm font-bold">
                            Free Delivery
                        </p>
                        <span className="text-xs underline cursor-pointer">
                            Enter your postal code for Delivery Availability
                        </span>
                    </div>
                </div>
                {returnable && (
                    <>
                        <div className="flex items-center gap-x-4">
                            <RefreshCcw className="size-6" />
                            <div className="space-y-2">
                                <p className="text-sm font-bold">
                                    Return Delivery
                                </p>
                                <div className="text-xs flex items-center gap-x-1">
                                    <p className="">
                                        Free {returnPeriod || "30 days"} Returns.
                                    </p>
                                    <span className="underline cursor-pointer">
                                        Details
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
