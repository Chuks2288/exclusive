"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@prisma/client";
import { formatDate } from "@/lib/utils";
import { Actions } from "./action";
import Image from "next/image"; // Assumes Next.js for image optimization
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Product>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => {
            const productImage = row.original.images?.[0] || "/placeholder-image.jpg";
            return (
                <div className="w-16 h-16 flex items-center">
                    <Image
                        src={productImage}
                        alt={row.original.name}
                        width={44}
                        height={44}
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
            <p className="line-through text-gray-500 dark:text-gray-400">
                ${row.original.initialPrice.toFixed(2)}
            </p>
        ),
    },
    {
        accessorKey: "subcategory",
        header: "Subcategory",
        cell: ({ row }) => <p>{row.original.subcategory}</p>,
    },
    // {
    //     accessorKey: "availability",
    //     header: "Availability",
    //     cell: ({ row }) => (
    //         <p className={row.original.availability === "Out of Stock" ? "text-red-500" : ""}>
    //             {row.original.availability}
    //         </p>
    //     ),
    // },
    {
        accessorKey: "stockQuantity",
        header: "Stock Quantity",
        cell: ({ row }) => <p>{row.original.stockQuantity}</p>,
    },
    // {
    //     accessorKey: "isNew",
    //     header: "New",
    //     cell: ({ row }) => (
    //         <span
    //             className={
    //                 row.original.isNew
    //                     ? "text-green-500 font-semibold"
    //                     : "text-gray-400"
    //             }
    //         >
    //             {row.original.isNew ? "Yes" : "No"}
    //         </span>
    //     ),
    // },
    {
        accessorKey: "createdAt",
        header: "Date Added",
        cell: ({ row }) => {
            const formattedDate = formatDate(row.original.createdAt);
            return <p>{formattedDate}</p>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) =>
            <Actions id={row.original.id} />,
    },
];
