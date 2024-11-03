import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Shield, ShieldAlert, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToggleRole } from "@/features/user/api/use-toggle-role";
import { cn } from '@/lib/utils';
import { useCurrentUser } from '@/hooks/use-current-user';

type UserRoleProps = {
    role: "ADMIN" | "MODERATOR" | "CUSTOMER";
    isBanned: boolean;
    id: string;
};

export const UserRole = ({
    role,
    isBanned,
    id
}: UserRoleProps) => {
    const user = useCurrentUser();
    const isLoggedInAdmin = user?.role === "ADMIN";
    const isSelf = user?.id === id;

    const { toggleRoleMutation } = useToggleRole();

    const handleToggleRole = async (newRole: "ADMIN" | "MODERATOR" | "CUSTOMER") => {
        await toggleRoleMutation.mutateAsync({ userId: id, newRole });
    };

    const availableRoles: Array<"ADMIN" | "MODERATOR" | "CUSTOMER"> = (() => {
        if (isLoggedInAdmin) {
            return role === "ADMIN" ? [] : ["ADMIN", "MODERATOR", "CUSTOMER"];
        } else {
            switch (role) {
                case "ADMIN":
                    return [];
                case "MODERATOR":
                    return ["ADMIN", "MODERATOR", "CUSTOMER"];
                default:
                    return [];
            }
        }
    })();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                    <p>
                        {role === "ADMIN" && (
                            <Shield
                                className={cn(
                                    "mr-1 size-3 text-red-500",
                                    isBanned && "text-gray-400",
                                )}
                            />
                        )}
                        {role === "MODERATOR" && (
                            <ShieldAlert
                                className={cn(
                                    "mr-1 size-3 text-blue-500",
                                    isBanned && "text-gray-400",
                                )}
                            />
                        )}
                        {role === "CUSTOMER" && (
                            <User
                                className={cn(
                                    "mr-1 size-3 text-gray-500",
                                    isBanned && "text-gray-400",
                                )}
                            />
                        )}
                    </p>
                    <p className={cn(
                        "text-xs",
                        isBanned && "text-gray-400",
                        role === "ADMIN" && "text-red-500",
                        role === "MODERATOR" && "text-blue-500",
                    )}>
                        {role}
                    </p>
                    {!isSelf && isLoggedInAdmin && (
                        <ChevronDown className="ml-2 size-3" />
                    )}
                </Button>
            </DropdownMenuTrigger>
            {!isSelf && isLoggedInAdmin && availableRoles.length > 0 && (
                <DropdownMenuContent align="start" className="bg-white dark:bg-gray-800 dark:text-gray-200">
                    {availableRoles.map((availableRole) => (
                        <DropdownMenuItem
                            key={availableRole}
                            className="cursor-pointer flex gap-x-2 dark:hover:bg-gray-700"
                            onClick={() => handleToggleRole(availableRole)}
                        >
                            <span className="text-xs">{availableRole}</span>
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator className="dark:bg-gray-600" />
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
};
