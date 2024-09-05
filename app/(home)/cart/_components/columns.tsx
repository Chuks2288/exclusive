"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ProductInfo } from "./product-info";
import { ProductQuantity } from "./product-quantity";
import { DeleteButton } from "./delete-button";
import { CartItem } from "@/store/cart-slice";

export const columns: ColumnDef<CartItem>[] = [
    {
        accessorKey: "name",
        header: "Product",
        cell: ({ row }) => (
            <ProductInfo
                id={row.original.id}
                image={row.original.image}
                name={row.original.name}
            />
        ),
        filterFn: "includesString",
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => <p>${row.original.price.toFixed(2)}</p>,
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
        cell: ({ row }) => (
            <ProductQuantity
                id={row.original.id}
                quantity={row.original.quantity}
            />
        ),
    },
    {
        accessorKey: "subTotal",
        header: "Subtotal",
        cell: ({ row }) => (
            <p>${(row.original.price * row.original.quantity).toFixed(2)}</p>
        ),
    },
    {
        id: "actions",
        cell: ({ row }) => <DeleteButton id={row.original.id} />,
    },
];
