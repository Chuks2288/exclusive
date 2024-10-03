"use client";

import React from "react";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/store/cart-slice";
import { CartTotal } from "./cart-total";
import { useConfirm } from "@/hooks/use-confirm";
import { CartSubDetails } from "./cart-sub-details";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const CartCard = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const [ConfirmDialog, confirm] = useConfirm(
        "Confirm Deletion",
        "Are you sure you want to clear the cart?"
    );

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
                    <div className="flex items-center justify-center h-[70vh]">
                        <p className="text-md font-bold">Your Cart is Empty</p>
                    </div>
                ) : (
                    <div>
                        <DataTable
                            columns={columns}
                            data={cart}
                        />
                        <CartSubDetails
                            handleClearCart={handleClearCart}
                        />
                        <CartTotal />
                    </div>
                )
                }
            </div>
        </>
    );
};
