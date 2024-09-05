"use client";

import React from "react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity, removeFromCart, clearCart } from "@/store/cart-slice";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CartTotal } from "./cart-total";
import { useConfirm } from "@/hooks/use-confirm";
import { CartSubDetails } from "./cart-sub-details";

export const CartCard = () => {
    const router = useRouter();
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const [ConfirmDialog, confirm] = useConfirm(
        "Confirm Deletion",
        "Are you sure you want to remove this item from the cart?"
    );

    const handleQuantityChange = (itemId: string, value: number) => {
        if (!isNaN(value) && value > 0) {
            dispatch(updateCartQuantity({ id: itemId, quantity: value }));
        }
    };

    const handleRemoveFromCart = async (itemId: string) => {
        const ok = await confirm();

        if (ok) {
            dispatch(removeFromCart(itemId));
        }
    };
    const handleClearCart = async () => {
        const ok = await confirm();

        if (ok) {
            dispatch(clearCart());
        }
    };

    return (
        <>
            <ConfirmDialog />
            <div>
                {cart.length === 0 ? (
                    <div className="flex items-center justify-center h-screen">
                        <p className="text-md font-bold">Your Cart is Empty</p>
                    </div>
                ) : (
                    <div>
                        <div className="overflow-x-auto">
                            <div className="space-y-4">
                                <table className="w-full border">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b text-left">Product</th>
                                            <th className="py-2 px-4 border-b text-center">Price</th>
                                            <th className="py-2 px-4 border-b text-center">Quantity</th>
                                            <th className="py-2 px-4 border-b text-center">Subtotal</th>
                                            <th className="py-2 px-4 border-b text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id} className="text-center">
                                                <td
                                                    onClick={() => router.push(`/product/${item.id}`)}
                                                    className="py-2 px-4 border-b flex items-center text-left cursor-pointer hover:underline">
                                                    {item.image && Array.isArray(item.image) && item.image.length > 0 ? (
                                                        <Image
                                                            src={item.image[0]}
                                                            alt="image"
                                                            className="w-12 h-12 mr-4"
                                                            width={48}
                                                            height={48}
                                                        />
                                                    ) : (
                                                        <div className="w-12 h-12 mr-4 flex items-center justify-center">
                                                            <span>No Image</span>
                                                        </div>
                                                    )}
                                                    <span className="">{item.name}</span>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    ${item.price.toFixed(2)}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <div className="flex items-center justify-center">
                                                        <Input
                                                            type="number"
                                                            min="1"
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                                            className="w-20 h-10 text-center border-t border-b border-gray-300"
                                                        />
                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <Button
                                                        variant="destructive"
                                                        onClick={() => handleRemoveFromCart(item.id)}
                                                    >
                                                        <Trash className="size-4" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <CartSubDetails
                                handleClearCart={handleClearCart}
                            />
                        </div>
                        <CartTotal />
                    </div>
                )
                }
            </div>
        </>
    );
};
