"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, Heart, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/features/cart/use-add-to-cart";
import { useRemoveFromCart } from "@/features/cart/use-remove-from-cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useAddToWishlist } from "@/features/wishlist/api/use-add-to-wishlist"; // Import the useAddToWishlist mutation
import { useCurrentUser } from "@/hooks/use-current-user";
import { toast } from "sonner";
import { useRemoveFromWishlist } from "@/features/wishlist/api/use-remove-from-wishlist";
import { useConfirm } from "@/hooks/use-confirm";

type Props = {
    id: string | any;
    image: string[];
    discount: number;
    name: string;
    price: number;
    initialPrice: number;
    rating?: number;
    reviews?: number;
    isNew?: boolean;
    isWishlistPage?: boolean;
};

export const ProductsCard = ({
    id,
    image,
    discount,
    name,
    price,
    initialPrice,
    rating,
    reviews,
    isNew,
    isWishlistPage = false,
}: Props) => {

    const [ConfirmDialog, confirm] = useConfirm(
        "Confirm Deletion",
        "Are you sure you want to remove the items from the wishlist?"
    );

    const user = useCurrentUser();
    const router = useRouter();
    const { mutate: addToCart } = useAddToCart();
    const { mutate: removeFromCart } = useRemoveFromCart();
    const { mutate: addToWishlist } = useAddToWishlist();
    const { mutate: removeFromWishlist } = useRemoveFromWishlist();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    const isInCart = cartItems.some((item) => item.id === id);
    const isInWishlist = wishlistItems.some((item) => item.id === id);

    const handleCartAction = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart({
                id,
                name,
                image,
                price,
                initialPrice,
                rating,
                quantity: 1,
            });
        }
    };

    const handleAddToWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (!user?.id) {
            toast.error("Please log in to add items to your wishlist");
            return;
        } else {
            if (isInWishlist) {
                removeFromWishlist(id);
            } else {
                addToWishlist({
                    id,
                    name,
                    images: image,
                    price,
                    initialPrice,
                    rating,
                    quantity: 1,
                })
            }
        }
    };

    const handleRemoveFromWishlist = async (e: React.MouseEvent) => {
        e.stopPropagation();

        const ok = await confirm();

        if (ok) {
            removeFromWishlist(id);
        }
    };



    return (
        <div>
            <ConfirmDialog />
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
                        src={image[0]}
                        alt={name}
                        width={160}
                        height={160}
                        priority
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {!isWishlistPage && (
                    <>
                        <span
                            onClick={handleAddToWishlist}
                            className={`absolute top-2 right-2 flex justify-center items-center w-6 h-6 rounded-full text-[10px] cursor-pointer 
                            ${isInWishlist ? "bg-red-500 " : "bg-white "}`}
                        >
                            <Heart className={`size-3 ${isInWishlist ? " text-white" : "text-black"}`} />
                        </span>
                        <span className="absolute top-10 right-2 flex justify-center items-center w-6 h-6 bg-white hover:bg-gray-100 rounded-full text-[10px] cursor-pointer">
                            <Eye className="size-3 text-black" />
                        </span>
                    </>
                )}

                {isWishlistPage && (
                    <span
                        onClick={handleRemoveFromWishlist}
                        className={`absolute top-2 right-2 flex justify-center items-center w-6 h-6 rounded-full text-[10px] cursor-pointer bg-white`}
                    >
                        <Trash className="size-3 text-red-500" />
                    </span>
                )}
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full rounded-none py-2 absolute bottom-0 left-0 flex justify-center transition-transform transform translate-y-full group-hover:translate-y-0 text-xs"
                    onClick={handleCartAction}
                >
                    {isInCart ? "Remove from Cart" : "Add to Cart"}
                </Button>
            </div>

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
                            value={rating ?? 0}
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
