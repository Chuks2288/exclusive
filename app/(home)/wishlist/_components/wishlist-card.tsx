"use client";

import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/features/cart/use-add-to-cart";
import { useRemoveFromCart } from "@/features/cart/use-remove-from-cart";
import { RootState } from "@/store";
import { Rating, Star } from "@smastrom/react-rating";
import { DeleteIcon, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useRemoveFromWishlist } from "@/features/wishlist/api/use-remove-from-wishlist";
import { WishlistItem } from "@/store/wishlist-slice";

export const WishlistCard = ({
    id,
    name,
    image,
    rating,
    reviews,
    availability,
    price,
    quantity,
    initialPrice,
    description,
    color,
    isNew,
    size,
    discount,
}: WishlistItem) => {
    const router = useRouter();
    const { mutate: addToCart } = useAddToCart();
    const { mutate: removeFromCart } = useRemoveFromCart();
    const { mutate: removeFromWishlist } = useRemoveFromWishlist();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const isInCart = cartItems.some((item) => item.id === id);

    const handleRemoveFromWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        removeFromWishlist(id);
    };

    return (
        <div>
            <div
                onClick={() => router.push(`/product/${id}`)}
                className="relative cursor-pointer overflow-hidden group"
            >
                <div className="relative bg-gray-200 rounded-sm w-full h-[200px] flex justify-center items-center p-4">
                    {discount > 0 && (
                        <span className="absolute top-2 left-2 flex justify-center items-center text-white w-10 h-5 bg-red-500 rounded-sm text-[10px]">
                            {`-${discount}%`}
                        </span>
                    )}
                    {isNew && (
                        <span className="absolute top-2 left-14 flex justify-center items-center text-white w-10 h-5 bg-green-500 rounded-sm text-[10px]">
                            New
                        </span>
                    )}
                    <Image
                        src={image && image.length > 0 ? image[0] : '/path/to/default-image.jpg'}
                        alt={name}
                        width={160}
                        height={160}
                        priority
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <span
                    onClick={handleRemoveFromWishlist}
                    className={`absolute top-2 right-2 flex justify-center items-center w-6 h-6 rounded-full text-[10px] cursor-pointer bg-white`}
                >
                    <Trash className="size-3 textr-red-500" />
                </span>

                {/* Add to Cart Button */}
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-none py-2 absolute bottom-0 left-0 flex justify-center transition-transform transform translate-y-full group-hover:translate-y-0 text-xs"
                // onClick={handleCartAction}
                >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                </Button>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-y-2 mt-4">
                <h4 className="text-sm font-bold">{name}</h4>
                <div className="flex items-center gap-x-2">
                    <p className="text-xs text-red-500">{`$${price}`}</p>
                    {initialPrice > price && (
                        <p className="text-xs line-through">{`$${initialPrice}`}</p>
                    )}
                </div>
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
                </div>
            </div>
        </div>
    );
};
