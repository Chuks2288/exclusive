"use client";


import { RootState } from "@/store"
import { useDispatch, useSelector } from "react-redux"
import { CheckoutCard } from "./checkout-card";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CheckoutDetails = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const shippingFee = 50;
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const total = shippingFee ? subtotal + shippingFee : subtotal;

    return (
        <div className="md:max-w-[520px] w-full p-4 space-y-3">
            <div className="">
                {cart.map((item) => (
                    <CheckoutCard
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={parseFloat((item.price * item.quantity).toFixed(2))}
                    />
                ))}
            </div>
            <div className="flex items-center justify-between mb-2">
                Subtotal:
                <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between mb-2">
                Shipping:
                <p className="font-medium">
                    ${shippingFee ? shippingFee : "Free"}
                </p>
            </div>
            <Separator />
            <div className="flex items-center justify-between mb-2">
                Total:
                <p className="font-bold text-lg">${total.toFixed(2)}</p>
            </div>
            <div className="flex gap-x-3 items-center w-full pt-4">
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
            <div className="flex justify-center items-center pt-8">
                <Button
                    // onClick={() => router.push("/checkout")}
                    variant="destructive"
                    className=""
                >
                    Place Your order
                </Button>
            </div>
        </div>
    )
}

