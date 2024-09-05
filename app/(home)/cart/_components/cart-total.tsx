"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const CartTotal = () => {

    const cart = useSelector((state: RootState) => state.cart.items);
    // const shippingFee = useSelector((state: RootState) => state.cart.shippingFee); 
    const shippingFee = 50;

    // Calculate subtotal
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    // Calculate total (including shipping fee if applicable)
    const total = shippingFee ? subtotal + shippingFee : subtotal;

    return (
        <div className="flex md:flex-row flex-col gap-6 justify-between items-start mt-6">
            <div className="flex gap-x-3 items-center w-full">
                <Input
                    className="md:max-w-[298px] max-w-full"
                    placeholder="Enter coupon code"
                />
                <Button
                    variant="destructive"
                    className=""
                >
                    Apply Coupon
                </Button>
            </div>
            <div className="md:w-[420px] w-full border p-4">
                <h4 className="font-bold text-lg mb-2">Cart Total</h4>
                <div className="flex items-center justify-between mb-2">
                    Subtotal:
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between mb-2">
                    Shipping:
                    <p className="font-medium">
                        ${shippingFee ? shippingFee.toFixed(2) : "Free"}
                    </p>
                </div>
                <Separator />
                <div className="flex items-center justify-between mb-2">
                    Total:
                    <p className="font-bold text-xl">${total.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Button
                    variant="destructive"
                    className=""
                >
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
};
