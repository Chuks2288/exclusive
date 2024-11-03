"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";
import { FullName } from "./full-name";
import { formatDate } from "@/lib/utils";
import { Actions } from "./action";
import { UserRole } from "./user-role";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <FullName
                id={row.original.id}
                firstName={row.original.firstName}
                lastName={row.original.lastName}
                isBanned={row.original.isBanned}
            />
        ),
        filterFn: "includesString",
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => (
            <p className={row.original.isBanned ? "text-gray-400" : ""}>
                {row.original.email}
            </p>
        ),
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => (
            // <p className={row.original.isBanned ? "text-gray-400" : ""}>
            //     {row.original.role}
            // </p>
            <UserRole
                role={row.original.role}
                isBanned={row.original.isBanned}
                id={row.original.id}
            />
        ),
    },
    {
        accessorKey: "createdAt",
        header: "Date of Account Creation",
        cell: ({ row }) => {
            const formattedDate = formatDate(row.original?.createdAt);
            return <p className={row.original.isBanned ? "text-gray-400" : ""}>
                {formattedDate}
            </p>;
        },
    },
    {
        id: "actions",
        cell: ({ row }) =>
            <Actions
                id={row.original.id}
                isBanned={row.original.isBanned}
                role={row.original.role}
            />,
    },
];
