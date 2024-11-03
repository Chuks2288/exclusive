"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@prisma/client";
import { formatDate } from "@/lib/utils";
import { Actions } from "./action";
import Image from "next/image"; // Assuming you are using Next.js for image optimization

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const productImage = row.original.images?.[0] || "/placeholder-image.jpg"; // Fallback image
            return (
                <div className="w-16 h-16 flex items-center">
                    <Image
                        src={productImage}
                        alt={row.original.name}
                        width={64}
                        height={64}
                        className="rounded-md object-cover"
                    />
                </div>
            );
        },
    },
    {
        accessorKey: "name",
        header: "Product Name",
        cell: ({ row }) => (
            <p className="font-semibold">{row.original.name}</p>
        ),
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => (
            <p>${row.original.price.toFixed(2)}</p>
        ),
    },
    {
        accessorKey: "initialPrice",
        header: "Initial Price",
        cell: ({ row }) => (
            <p className="line-through text-gray-500">
                ${row.original.initialPrice.toFixed(2)}
            </p>
        ),
    },
    {
        accessorKey: "availability",
        header: "Availability",
        cell: ({ row }) => (
            <p className={row.original.availability === "Out of Stock" ? "text-red-500" : ""}>
                {row.original.availability}
            </p>
        ),
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => (
            <p>{row.original.category}</p>
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Date Added",
        cell: ({ row }) => {
            const formattedDate = formatDate(row.original?.createdAt);
            return <p>{formattedDate}</p>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) =>
            <Actions id={row.original.id} />,
    },
];
