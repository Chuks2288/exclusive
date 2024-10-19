"use client";

import { ColumnDef } from "@tanstack/react-table";
// import { ProductInfo } from "./product-info";
// import { ProductQuantity } from "./product-quantity";
// import { DeleteButton } from "./delete-button";

import { User } from "@prisma/client";
import { FullName } from "./full-name";
import { formatDate } from "@/lib/utils";
import { DeleteButton } from "./delete-button";
import { Actions } from "./action";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <FullName
                id={row.original.id}
                firstName={row.original.firstName}
                lastName={row.original.lastName}
            />
        ),
        filterFn: "includesString",
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <p>{row.original.email}</p>,
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => <p>{row.original.role}</p>,
    },
    {
        accessorKey: "createdAt",
        header: "Date of Account Creation",
        cell: ({ row }) => {
            const formattedDate = formatDate(row.original?.createdAt);
            return <p>{formattedDate}</p>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <Actions id={row.original.id} />,
    },
];
