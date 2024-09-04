"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Rating, Star } from "@smastrom/react-rating";
import { Heart, Minus, Plus, RefreshCcw, Truck } from "lucide-react";
import { useReturnModal } from "@/features/products/hooks/use-return-modal";
import { useSelector } from "react-redux";
import { useRemoveFromCart } from "@/features/cart/use-remove-from-cart";
import { useAddToCart } from "@/features/cart/use-add-to-cart";
import { RootState } from "@/store";
import { Input } from "@/components/ui/input";

type Props = {
    id: any;
    name: string;
    image: string[];
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
    id,
    name,
    image,
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
    const { onOpen } = useReturnModal();
    const [quantity, setQuantity] = useState(1);

    const { mutate: addToCart } = useAddToCart();
    const { mutate: removeFromCart } = useRemoveFromCart(id);
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // Initialize quantity from cart items
    useEffect(() => {
        const cartItem = cartItems.find((item) => item.id === id);
        if (cartItem) {
            setQuantity(cartItem.quantity);
        }
    }, [cartItems, id]);

    const isInCart = cartItems.some((item) => item.id === id);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    const totalPrice = price * quantity;

    const handleCartAction = (e: React.MouseEvent) => {
        e.stopPropagation();

        // Extract the first image URL if the image is an array
        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart({
                id,
                name,
                image,
                price: totalPrice,
                initialPrice,
                rating,
                quantity,
            });
        }
    };

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
                        -
                    </Button>
                    <Input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-20 h-10 text-center border-t border-b border-gray-300"
                    />
                    <Button
                        size="lg"
                        onClick={increaseQuantity}
                        className="text-md border-2  hover:bg-red-500 hover:text-white"
                    >
                        +
                    </Button>
                </div>
                <Button
                    onClick={handleCartAction}
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white md:w-[200px] w-full"
                >
                    {isInCart ? "Remove From cart" : "Buy Now"}
                </Button>
                <span className="flex justify-center items-center w-8 h-8 border-2 p-1 rounded-sm text-[10px] cursor-pointer">
                    <Heart className="w-4 h-4" />
                </span>
            </div>
            <div className="border-2 w-full p-3 space-y-4">
                <div className="flex items-center gap-x-4">
                    <Truck className="size-6" />
                    <div className="space-y-2">
                        <p className="text-sm font-bold">Free Delivery</p>
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
                                <p className="text-sm font-bold">Return Delivery</p>
                                <div className="text-xs flex items-center gap-x-1">
                                    <p>Free {returnPeriod || "30 days"} Returns.</p>
                                    <span
                                        onClick={onOpen}
                                        className="underline cursor-pointer"
                                    >
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
